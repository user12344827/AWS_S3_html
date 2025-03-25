const { MongoClient } = require('mongodb');

const mongoConfig = {
    url: process.env.MONGODB_URI,
    dbName: process.env.DB_NAME
};

exports.handler = async (event) => {
    let client;
    try {
        console.log('Complete event object:', JSON.stringify(event, null, 2));
        
        let data;
        try {
            // 處理 API Gateway 的請求格式
            if (event.body) {
                data = JSON.parse(event.body);
            } else if (typeof event === 'string') {
                data = JSON.parse(event);
            } else {
                data = event;
            }
            
            console.log('Parsed data:', data);
            console.log('nickname:', data.nickname);
            
            if (!data.nickname) {
                throw new Error('Nickname not found in the request data');
            }
            
            // 建立 MongoDB 連線
            client = new MongoClient(mongoConfig.url);
            await client.connect();
            console.log('MongoDB connection created');
            
            const db = client.db(mongoConfig.dbName);
            const collection = db.collection('user_answers');  // 使用單一集合

            console.log('Connect success');
            
            // 準備要插入的完整文檔
            const userAnswerDocument = {
                nickname: data.nickname,
                answers: data.answers && Array.isArray(data.answers) 
                    ? data.answers.map((answer, index) => ({
                        question_number: index + 1,
                        answer: answer
                    }))
                    : [],
                created_at: new Date()
            };
            
            // 插入完整文檔
            const result = await collection.insertOne(userAnswerDocument);
            console.log('Data insert success');
            
            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: 'success',
                    message: '資料已成功儲存',
                    userId: result.insertedId.toString()
                })
            };
            
        } catch (parseError) {
            console.error('Data parsing error:', {
                error: parseError,
                receivedEvent: event,
                eventType: typeof event,
                eventBody: event.body
            });
            
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: 'error',
                    message: `Data parsing error: ${parseError.message}`,
                    receivedEvent: event
                })
            };
        }
        
    } catch (error) {
        console.error('Detailed error:', {
            message: error.message,
            stack: error.stack,
            eventBody: event
        });
        
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: 'error',
                message: `錯誤詳情: ${error.message}`,
                errorCode: error.code,
                receivedEvent: event
            })
        };
    } finally {
        // 確保關閉 MongoDB 連線
        if (client) {
            await client.close();
        }
    }
};
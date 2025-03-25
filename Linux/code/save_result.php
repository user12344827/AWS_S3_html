<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// 資料庫連線設定
$host = '';
$dbname = '';
$username = '';
$password = '';

try {
    // 建立資料庫連線
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // 獲取 POST 資料
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);
    
    if ($data === null) {
        throw new Exception('Invalid JSON data');
    }
    
    // 將答案整理成陣列
    $answers = array_fill(1, 7, ''); // 初始化7個答案的陣列
    foreach ($data['answers'] as $answer) {
        $answers[$answer['questionId']] = $answer['optionId'];
    }
    
    // 準備 SQL 語句
    $sql = "INSERT INTO test_results (
        nickname, 
        question1_answer, 
        question2_answer, 
        question3_answer, 
        question4_answer, 
        question5_answer, 
        question6_answer, 
        question7_answer
    ) VALUES (
        :nickname,
        :q1, :q2, :q3, :q4, :q5, :q6, :q7
    )";
    
    $stmt = $pdo->prepare($sql);
    
    // 執行插入
    $stmt->execute([
        ':nickname' => $data['nickname'],
        ':q1' => $answers[1],
        ':q2' => $answers[2],
        ':q3' => $answers[3],
        ':q4' => $answers[4],
        ':q5' => $answers[5],
        ':q6' => $answers[6],
        ':q7' => $answers[7]
    ]);
    
    // 回傳成功訊息
    echo json_encode(['status' => 'success', 'message' => '資料已成功儲存']);
    
} catch (Exception $e) {
    // 回傳錯誤訊息
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
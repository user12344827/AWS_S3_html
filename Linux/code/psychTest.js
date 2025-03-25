class PsychTest {
    constructor() {
        this.currentStep = -1; // -1 表示暱稱輸入頁面
        this.answers = [];
        this.nickname = '';
        this.questions = [
            {   
                story: "當你慢慢走進森林深處時，遇到了一隻動物。",
                id: 1,
                text: "你遇到的動物是什麼？牠的外貌、特徵，以及牠帶給你的感受如何？",
                options: [
                    { 
                        id: 'a', 
                        text: "優雅的鹿",
                        meaning: "你內心充滿溫柔與細膩的感受，對美好事物特別敏感。你傾向於追求和平與和諧，內心對純粹的關係抱有渴望。"
                    },
                    { 
                        id: 'b', 
                        text: "威猛的獅子",
                        meaning: "你內心充滿力量與領導的潛力，對自信與勇氣有著深刻的體現。你喜歡主導局面，內心有一份渴望掌控的需求。"
                    },
                    { 
                        id: 'c', 
                        text: "靈活的狐狸",
                        meaning: "你是個機智且適應力強的人，內心對挑戰充滿好奇與興趣。你善於觀察並解決問題，但可能偶爾帶著些許防備心。"
                    },
                    { 
                        id: 'd', 
                        text: "溫順的兔子",
                        meaning: "你內心柔軟且敏感，渴望安全與穩定的環境。你可能對外界的壓力感到不安，但內心充滿純真的愛與善意。"
                    },
                    { 
                        id: 'e', 
                        text: "孤僻的獨狼",
                        meaning: "你內心可能感到孤單與疏離，渴望獨處並遠離群體，這種孤獨感有時候讓你難以與他人建立深厚的連結。你有時會過度依賴自己的世界，讓自己與他人保持距離。"
                    },
                    { 
                        id: 'f', 
                        text: "懶散的樹懶",
                        meaning: "你可能缺乏動力，對生活中的挑戰顯得漠不關心，容易感到無所作為，對改變與前進缺乏熱情。你可能會陷入自我放棄的狀態，對外界的刺激反應冷淡。"
                    }
                ]
            },
            {   
                story: "當你走進森林，意外發現一座高大的圍牆，擋住了你的前路。",
                id: 2,
                text: "這座圍牆是什麼樣子的呢？",
                options: [
                    { 
                        id: 'a', 
                        text: "高大厚重的鋼鐵牆",
                        meaning: "你對世界的防衛心極強，對他人保持高度戒備，傾向於封閉自己。"
                    },
                    { 
                        id: 'b', 
                        text: "中等高度的木製牆",
                        meaning: "你擁有防衛心，但也能夠保持一定的開放性，對外界有適度的信任。"
                    },
                    { 
                        id: 'c', 
                        text: "低矮的藤蔓牆",
                        meaning: "你對世界的防衛心較低，較容易接受他人與外界的影響，內心開放且包容。"
                    },
                    { 
                        id: 'd', 
                        text: "極高堅固的水泥牆",
                        meaning: "你對世界的防衛心非常強烈，極度封閉自己，對外界缺乏信任，無法輕易接納他人。"
                    }
                ]
            },
            {   
                story: "通過圍牆後，你來到一座房子，門靜靜地在你面前。你開始注意到門的開闔狀態。",
                id: 3,
                text: "這扇門是怎樣的呢？",
                options: [
                    { 
                        id: 'a', 
                        text: "緊閉且上鎖的門",
                        meaning: "你內心防衛強烈，對親近的人也保持距離，信任他人存在障礙。"
                    },
                    { 
                        id: 'b', 
                        text: "微微開著的門",
                        meaning: "你對親近的人開放且包容，願意讓他們輕易進入自己的內心世界。"
                    },
                    { 
                        id: 'c', 
                        text: "關閉但可解鎖的門",
                        meaning: "你對他人有所保留，願意在他人付出努力後打開自己，建立信任。"
                    },
                    { 
                        id: 'd', 
                        text: "重重關閉並上鎖的門",
                        meaning: "你完全封閉內心，對任何人有高度防範，可能曾經受過情感傷害。"
                    }
                ]
            },
            {   
                story: "當你走進屋子，第一眼便看到一張桌子。桌子上鋪著一塊桌巾。",
                id: 4,
                text: "你的桌巾是什麼模樣呢？",
                options: [
                    { 
                        id: 'a', 
                        text: "古老的手工刺繡桌巾",
                        meaning: "你是懷舊且保守的人，珍惜傳統與過往，對新事物接受度較低。"
                    },
                    { 
                        id: 'b', 
                        text: "純白素雅的棉麻桌巾",
                        meaning: "你性格樸實務實，追求穩定與舒適，對改變持開放但謹慎的態度。"
                    },
                    { 
                        id: 'c', 
                        text: "鮮豔的印花桌巾",
                        meaning: "你熱愛新鮮事物，內心開放，對改變充滿好奇，但可能稍顯浮躁。"
                    },
                    { 
                        id: 'd', 
                        text: "高科技材質的桌巾",
                        meaning: "高科技材質的桌巾：你思維前衛，重視功能性與效率，較少在意傳統價值，未來導向明顯。"
                    }
                ]
            },
            {   
                story: "觀察完桌巾後，你環顧四周，發現桌子旁邊擺放著椅子。",
                id: 5,
                text: "你喜歡哪一張？",
                options: [
                    { 
                        id: 'a', 
                        text: "一把單人搖椅",
                        meaning: "你享受獨處與個人空間，未來家庭可能較小或獨居。"
                    },
                    { 
                        id: 'b', 
                        text: "一對成套的餐椅",
                        meaning: "你重視兩人世界，期待和伴侶共度溫馨生活。"
                    },
                    { 
                        id: 'c', 
                        text: "四把木製餐椅",
                        meaning: "你渴望建立溫馨的小家庭，對孩子和穩定生活充滿期待。"
                    },
                    { 
                        id: 'd', 
                        text: "一張長板凳",
                        meaning: "你喜歡熱鬧的大家庭氛圍，對群體生活有高度期待與嚮往。"
                    }
                ]
            },
            {   
                story: "你離開了森林中的房子，房子的後方有一個「坡」。",
                id: 6,
                text: "你覺得這個坡是什麼樣的，你會如何通過它？",
                options: [
                    { 
                        id: 'a', 
                        text: "我覺得這坡太陡，無法攀登",
                        meaning: "你可能目前面對的困難讓你感到沮喪和無力，或許對挑戰感到畏懼，這需要更多的信心和勇氣去面對。"
                    },
                    { 
                        id: 'b', 
                        text: "坡雖然陡峭，但我相信只要一步步努力，最終一定能夠達到頂端",
                        meaning: "你是一個充滿信心的人，面對困難時能夠保持冷靜，並相信自己有能力克服挑戰。"
                    },
                    { 
                        id: 'c', 
                        text: "這坡不算太難，我感覺自己能夠迅速找到一條通向頂端的捷徑",
                        meaning: "你在面對問題時，擁有靈活的思維和解決方案，通常能夠迅速找到突破口，並對問題抱持較輕鬆的態度。"
                    },
                    { 
                        id: 'd', 
                        text: "這坡讓我有些不安，但我會小心克服它",
                        meaning: "你面對挑戰時，可能會感到焦慮或不安，但你仍然會保持謹慎，逐步克服困難，並相信自己可以應對即將來臨的挑戰。"
                    }
                ]
            },
            {   
                story: "最後你通過了這個坡，有一個「生物」佇立在面前。",
                id: 7,
                text: " 當你克服了困難，站在這個生物面前，你覺得他會是個怎麼樣的存在？",
                options: [
                    { 
                        id: 'a', 
                        text: "一隻龐大而威嚴的生物，身上覆蓋著光滑的金色鱗片，眼中透露出深邃的智慧，它的目光讓我感到既敬畏又無法逃避。",
                        meaning: "你內心渴望一個成熟穩重、富有智慧和力量的伴侶。你對於另一半有著高標準，並且渴望能夠共同面對生活的挑戰。這樣的伴侶對你而言不僅是情感上的依靠，更是精神上的啟發與支持。"
                    },
                    { 
                        id: 'b', 
                        text: "纖細而優雅，身上散發著柔和的光芒，彷彿一隻如同星辰般的精靈，眼神中帶著溫暖，似乎能夠看透我心底的秘密。",
                        meaning: "你尋找的另一半可能是一個充滿溫柔、感性和夢幻色彩的人。你對於愛情充滿幻想，期待對方能給你帶來安慰與平和。這樣的伴侶在你心中代表著理想中的浪漫和精神上的契合。"
                    },
                    { 
                        id: 'c', 
                        text: "神秘而陰影重重，周身彷彿被黑霧包圍，目光冷峻、深邃，讓我感到一種莫名的恐懼與吸引。",
                        meaning: "你對於另一半的期待可能充滿著某種挑戰或不確定感。你或許在內心中渴望一個具有神秘感和深度的伴侶，這樣的人可能讓你既感到吸引，又有些許的不安或困惑。你對愛情的需求可能帶有一些掙扎與複雜性。"
                    },
                    { 
                        id: 'd', 
                        text: "一隻充滿活力的小型生物，顏色鮮豔如彩虹般斑斕，帶著無憂無慮的微笑，眼神純真而無邪，讓我不禁感到輕鬆與愉悅。",
                        meaning: "你內心渴望的是一個開朗、輕鬆、能夠帶來快樂的伴侶。你希望愛情是充滿樂趣和輕鬆的，不想過於沉重或複雜。這樣的伴侶能夠讓你感受到無憂無慮的幸福和喜悅。"
                    }
                ]
            }
        ];
    }

    // 初始化顯示暱稱輸入頁面
    init() {
        this.currentStep = -1;
        this.updateUI();
    }

    // 處理暱稱輸入並開始測驗
    startWithNickname() {
        const nicknameInput = document.getElementById('nickname');
        const nicknameError = document.getElementById('nicknameError');
        const nickname = nicknameInput.value.trim();

        if (nickname === '') {
            nicknameInput.classList.add('error');
            nicknameError.style.display = 'block';
            return;
        }

        this.nickname = nickname;
        this.currentStep = 0; // 轉到開始頁面
        this.updateUI();
    }

    // 開始測驗
    startTest() {
        this.currentStep = 1;
        this.answers = [];
        this.updateUI();
    }

    // 處理答案
    handleAnswer(questionId, optionId) {
        this.answers.push({
            questionId: questionId,
            optionId: optionId
        });
        this.currentStep++;
        this.updateUI();
    }

    // 更新UI
    updateUI() {
        const nicknamePage = document.getElementById('nicknamePage');
        const startPage = document.getElementById('startPage');
        const questionPage = document.getElementById('questionPage');
        const resultPage = document.getElementById('resultPage');

        // 隱藏所有頁面
        nicknamePage.style.display = 'none';
        startPage.style.display = 'none';
        questionPage.style.display = 'none';
        resultPage.style.display = 'none';

        // 顯示當前頁面
        if (this.currentStep === -1) {
            nicknamePage.style.display = 'block';
        } else if (this.currentStep === 0) {
            startPage.style.display = 'block';
        } else if (this.currentStep <= this.questions.length) {
            questionPage.style.display = 'block';
            this.updateQuestion();
        } else {
            resultPage.style.display = 'block';
            this.showResult();
        }
    }

    // 更新問題
    updateQuestion() {
        const question = this.questions[this.currentStep - 1];
        document.getElementById('questionTitle').textContent = `問題 ${question.id}/${this.questions.length}`;
        document.getElementById('questionStory').textContent = question.story;
        document.getElementById('questionText').textContent = question.text;
        
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';
        
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option.text;
            button.onclick = () => this.handleAnswer(question.id, option.id);
            optionsContainer.appendChild(button);
        });
    }

    // 顯示結果
    showResult() {
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = `
            <h2 class="title">${this.nickname} 的選擇分析</h2>
        `;
    
        this.answers.forEach((answer, index) => {
            const question = this.questions.find(q => q.id === answer.questionId);
            const selectedOption = question.options.find(opt => opt.id === answer.optionId);
    
            const questionDiv = document.createElement('div');
            questionDiv.className = 'result-item';
            questionDiv.style.animation = `fadeIn 0.6s ease-out ${index * 0.2}s`;
            questionDiv.style.opacity = '0';
            questionDiv.style.animationFillMode = 'forwards';
            
            questionDiv.innerHTML = `
                <h3>${question.story}</h3>
                <p><strong>你的選擇：</strong>${selectedOption.text}</p>
                <p><strong>選擇含義：</strong>${selectedOption.meaning}</p>
            `;
            resultContainer.appendChild(questionDiv);
        });
    
        // 準備要儲存的資料
        const resultData = {
            nickname: this.nickname,
            answers: this.answers
        };
    
        // 使用 API Gateway URL (請替換為你的 API Gateway URL)
        fetch('https://YOUR_API_GATEWAY_URL/prod/save-result', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resultData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                console.log('測驗結果已成功儲存');
            } else {
                console.error('儲存失敗:', data.message);
            }
        })
        .catch(error => {
            console.error('儲存錯誤:', error);
        });
    }
    
    // 重新開始
    restart() {
        this.currentStep = -1; // 回到暱稱輸入頁面
        this.answers = [];
        this.nickname = '';
        const nicknameInput = document.getElementById('nickname');
        if (nicknameInput) {
            nicknameInput.value = '';
            nicknameInput.classList.remove('error');
        }
        const nicknameError = document.getElementById('nicknameError');
        if (nicknameError) {
            nicknameError.style.display = 'none';
        }
        this.updateUI();
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    window.psychTest = new PsychTest();
    window.psychTest.init();
});
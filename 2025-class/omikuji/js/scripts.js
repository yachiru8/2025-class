document.getElementById('draw').addEventListener('click', function() {
    const omikujiResults = ['大大吉','大吉','中吉','小吉','末吉','凶','大凶'];
    const result = omikujiResults[Math.floor(Math.random() * omikujiResults.length)];

    const resultElem = document.getElementById('result');
    resultElem.textContent = `あなたの運勢は…${result}!`;

    // 結果に応じて文字の色を変える
    let color = '';
    switch(result) {
        case '大大吉':
            color = 'gold';
            break;
        case '大吉':
            color = 'red';
            break;
        case '中吉':
            color = 'limegreen';
            break;
        case '小吉':
            color = 'green';
            break;
        case '末吉':
            color = 'skyblue';
            break;
        case '凶':
            color = 'blue';
            break;
        case '大凶':
            color = 'purple';
            break;
        default:
            color = 'black';
    }

    resultElem.style.color = color;
});

const TARGET = {
    10000: 4,
    5000: 4,
    1000: 19,
    500: 5,
    100: 11,
    50: 6,
    10: 10
};

const TARGET_TOTAL = 83000;

function getValue(id){
    return Number(document.getElementById(id).value) || 0;
}

function calculate(){

    const cash = {
        50000:getValue("50000"),
        10000:getValue("10000"),
        5000:getValue("5000"),
        1000:getValue("1000"),
        500:getValue("500"),
        100:getValue("100"),
        50:getValue("50"),
        10:getValue("10")
    };

    // 총액 계산
    let total = 0;

    for(let money in cash){
        total += Number(money) * cash[money];
    }

    // 입금액
    const deposit = total - TARGET_TOTAL;

    document.getElementById("total").innerHTML =
        total.toLocaleString() + "원";

    document.getElementById("deposit").innerHTML =
        deposit.toLocaleString() + "원";



    //--------------------------------------
    // 부족한 권종 계산
    //--------------------------------------

    let lackHtml = "";

    for(let money in TARGET){

        const current = cash[money] || 0;
        const target = TARGET[money];

        if(current >= target){

            lackHtml +=
            `✅ ${money}원 : ${current}개 (충분)<br>`;

        }else{

            lackHtml +=
            `❌ ${money}원 : ${target-current}개 부족<br>`;

        }

    }

    document.getElementById("lack").innerHTML = lackHtml;



    //--------------------------------------
    // 최종 시재 출력
    //--------------------------------------

    let resultHtml = "";

    resultHtml += "10,000원 × 4장<br>";
    resultHtml += "5,000원 × 4장<br>";
    resultHtml += "1,000원 × 19장<br>";
    resultHtml += "500원 × 5개<br>";
    resultHtml += "100원 × 11개<br>";
    resultHtml += "50원 × 6개<br>";
    resultHtml += "10원 × 10개<br>";

    resultHtml += "<hr>";

    resultHtml += "<b>총 시재 : 83,000원</b>";

    document.getElementById("result").innerHTML =
        resultHtml;



    //--------------------------------------
    // 환전 추천 (임시)
    //--------------------------------------

    let exchangeHtml="";

    if(cash[10000] < 4){

        exchangeHtml +=
        `10,000원 ${(4-cash[10000])}장 확보 필요<br>`;

    }

    if(cash[5000] < 4){

        exchangeHtml +=
        `5,000원 ${(4-cash[5000])}장 확보 필요<br>`;

    }

    if(cash[1000] < 19){

        exchangeHtml +=
        `1,000원 ${(19-cash[1000])}장 확보 필요<br>`;

    }

    if(cash[500] < 5){

        exchangeHtml +=
        `500원 ${(5-cash[500])}개 확보 필요<br>`;

    }

    if(cash[100] < 11){

        exchangeHtml +=
        `100원 ${(11-cash[100])}개 확보 필요<br>`;

    }

    if(cash[50] < 6){

        exchangeHtml +=
        `50원 ${(6-cash[50])}개 확보 필요<br>`;

    }

    if(cash[10] < 10){

        exchangeHtml +=
        `10원 ${(10-cash[10])}개 확보 필요<br>`;

    }

    if(exchangeHtml===""){

        exchangeHtml =
        "🎉 환전이 필요하지 않습니다.";

    }

    document.getElementById("exchange").innerHTML =
        exchangeHtml;

}

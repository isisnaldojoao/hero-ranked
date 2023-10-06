
function calcRanked(win,lose){
    let saldoVitorias = win - lose;

    switch(true){
        case saldoVitorias < 10:
        var nivel = "Ferro"
        break;

        case saldoVitorias >11 && saldoVitorias<20:
        var nivel = "Bronze"
        break;

        case saldoVitorias >21 && saldoVitorias<50:
        var nivel = "Prata"
        break;

        case saldoVitorias >51 && saldoVitorias<80:
        var nivel = "Ouro"
        break;

        case saldoVitorias >81 && saldoVitorias<90:
        var nivel = "Diamente"
        break;

        case saldoVitorias >91 && saldoVitorias<100:
        var nivel = "Lendário"
        break;

        case saldoVitorias> 101:
        var nivel = "Imortal"
        break;
    }
    console.log("O Héroi tem saldo de "+saldoVitorias+" Vitórias e está no nivel de "+nivel)
}

calcRanked(10,5)

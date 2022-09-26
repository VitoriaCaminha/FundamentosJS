var analyzerNumber = document.getElementById("analyzerNumber");
var list = document.getElementById("select");
var result = document.getElementById("analyzerResult");
var values = [];

function add() {
    if (isNumero(analyzerNumber.value) && !inLista(analyzerNumber.value, values)) {
        values.push(Number(analyzerNumber.value));
        let item = document.createElement("option");
        item.text = `Valor ${analyzerNumber.value} adicionado`;
        list.appendChild(item);
        result.innerHTML = "";
    } else {
        window.alert("Digite um número entre 1 e 100 que não esteja na lista!");
    }
    analyzerNumber.value = "";
    analyzerNumber.focus();
}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function finishAnalyzer() {
    if (values.length == 0) {
        window.alert("Adicione alguns números para continuar");
    } else {
        let tot = values.length;
        let maior = values[0];
        let menor = values[0];
        let soma = 0;
        let media = 0;
        for (let pos in values) {
            soma += values[pos];
            if (values[pos] > maior) maior = values[pos];
            if (values[pos] < menor) menor = values[pos];
        }

        media = soma / tot;

        result.innerHTML = "";
        result.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`;
        result.innerHTML += `<p>O maior número é: ${maior}</p>`;
        result.innerHTML += `<p>O menor número é: ${menor}</p>`;
        result.innerHTML += `<p>A soma dos números é: ${soma}</p>`;
        result.innerHTML += `<p>A média dos números é: ${media}</p>`;
    }
}
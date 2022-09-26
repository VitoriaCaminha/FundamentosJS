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

function count() {
    let initialNumber = document.getElementById("initialNumber");
    let lastNumber = document.getElementById("lastNumber");
    let step = document.getElementById("step");
    let counterResult = document.getElementById("counterResult");

    if (
        initialNumber.value.length == 0 ||
        lastNumber.value.length == 0 ||
        step.value.length == 0
    ) {
        window.alert("[ERRO] Faltam dados");
    } else {
        counterResult.innerHTML = "contando: <br>";
        let i = Number(initialNumber.value);
        let f = Number(lastNumber.value);
        let p = Number(step.value);
        if (p <= 0) {
            window.alert("Passo inválido! Considerando step = 1");
            p = 1;
        }
        if (i < f) {
            for (let c = i; c < f; c += p) {
                counterResult.innerHTML += ` ${c} \u{1F449}`;
            }
            counterResult.innerHTML += `\u{1F3c1}`;
        } else {
            for (let c = i; c >= f; c -= p) {
                counterResult.innerHTML += ` ${c} \u{1F449}`;
            }
            counterResult.innerHTML += `\u{1F3c1}`;
        }
    }
}

function load() {
    var message = window.document.getElementById("message");
    var image = window.document.getElementById("image");
    var data = new Date();
    var hora = data.getHours();
    message.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        image.src = "./images/fotomanha.png";
        document.body.style.background = "#fdbe49";
    } else if (hora >= 12 && hora < 18) {
        image.src = "./images/fototarde.png";
        document.body.style.background = "#6d84a3";
    } else {
        image.src = "./images/fotonoite.png";
        document.body.style.background = "#3c4964";
    }
}



function table() {
    var table = document.getElementById("table");
    var tableNumber = document.getElementById("tableNumber");
    if (tableNumber.value.length == 0) {
      window.alert("Digite um número!");
    } else {
      let n = Number(tableNumber.value);
      let c = 1;
      table.innerHTML = "";
      while (c <= 10) {
        let item = document.createElement("option");
        item.text = `${n} x ${c} = ${n * c}`;
        item.value = `tab${c}`;
        table.appendChild(item);
        c++;
      }
    }
  }
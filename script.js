let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°c"
    document.querySelector(".description").innerHTML = dados.weather[0].description
    document.querySelector(".umid").innerHTML = "Umidade do ar: " + dados.main.humidity + "%"
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric")
        .then(resposta => resposta.json())

    colocarNaTela(dados)


}


function clickonButton() {
    let cidade = document.querySelector(".inputCidade").value

    buscarCidade(cidade)
}
let ARRAYDATA = []

let num = -1

function prepareAndPrintBillets(data) {
    console.log(`dados recolhidos`)
    console.log(data)

    ARRAYDATA = []
    num = -1

    let html = `<table border="1" style="width:100%; text-align:center;">`

            html += "<tr>"
                html += `<th>Banco</th>`
                html += `<th>Codigo de barra</th>`
                html += `<th>CPF/CNPJ</th>`
                html += `<th>Pagador</th>`
                html += `<th>Beneficiário</th>`
                html += `<th>Expira em</th>`
                html += `<th>Hoje</th>`
                html += `<th>Visualizar</th>`
            html += "</tr>"

    for(let index in data){

        num++
        ARRAYDATA.push(data[index])

            html += "<tr>"
                html += `<td id="index${num}">${data[index].bankName}</td>`
                html += `<td id="index${num}">${data[index].barCode}</td>`
                html += `<td id="index${num}">${data[index].identify}</td>`
                html += `<td id="index${num}">${data[index].payer}</td>`
                html += `<td id="index${num}">${data[index].recipient}</td>`
                html += `<td id="index${num}">${data[index].expDate}</td>`
                html += `<td id="index${num}">${data[index].today}</td>`
                html += `<td><button onclick="exibir(${num})" style="width:100%; height:100%;">Exibir valores</button></td>`
            html += "</tr>"

    }

    html += "</table>"

    printData("transfer-area", html)

}

function printData(id, html){
    document.getElementById(id).innerHTML = `<center>${html}</center>`
}

function exibir(number) {
    document.getElementById("billetId").value = ARRAYDATA[number].id
    document.getElementById("billetPrice").value = ARRAYDATA[number].price
    document.getElementById("billetTaxa").value = ARRAYDATA[number].taxa
    document.getElementById("billetTotalValue").value = ARRAYDATA[number].totalValue
}

function clear() {
    document.getElementById("billetId").value = ""
    document.getElementById("billetPrice").value = ""
    document.getElementById("billetTaxa").value = ""
    document.getElementById("billetTotalValue").value = ""
}
class Api{

    constructor() {
        this.name = ""
        this.email = ""
        this.password = ""
        this.host = "http://localhost:3000"
        this.valid = ""
        this.placeName = ""
    }

    processDatas(email, password) {
        this.email = email
        this.password = password
        this.parse_email = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/
        this.isValid =  this.parse_email.test(this.email)

        console.log(this.email)
        return this.isValid
    }

    async fetchLogin(email, password) {

        this.email = email
        this.password = await calcSHA1(password)

        const Email = this.email
        const Password = this.password
        console.log(Password)

        let url = `${this.host}/Find?email=${Email}&password=${Password}`

        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if(data[0]){
                console.log(data[0].name)
                this.valid = true
                alert("Login validado: Status " + this.valid)
                window.location.href = "src/pages/dashboard.html"
            }else{
                alert("Usuário ou senha inválidos!")
                this.valid = false
            }
        })
        .catch((err) => {
            console.log(err)
        })

    }

    async cadNewUser(name, email, password) {
        this.name = name.toUpperCase()
        this.email = email
        this.password = await calcSHA1(password)

        const Email = this.email
        const Name = this.name
        const Password = this.password

        const url = `${this.host}/Store?name=${this.name}&password=${this.password}&email=${this.email}`

        //const form = document.querySelector("form")
        //form.action = url

        fetch(url, {
            mode:"cors",
            method:"POST",
            body: JSON.stringify({ Email, Name, Password})
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if(data.message){
                //alert(`Conta registrada`)
                window.location.href = "cadastrofinal.html"
            }else{
                alert("algo deu errado")
            }
        })
        .catch((err) => {
            console.log(`Erro: ${err}`)
        })
    }

    searchCompany(placeName) {
        this.placeName = placeName

        const url = `${this.host}/catchBillet?placeName=${this.placeName}`

        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(`dados recolhidos`)
            console.log(data)
            if(data[0]){
                prepareAndPrintBillets(data)
            }else{
                alert("Nenhum boleto cadastrado")
            }
        })
        .catch((err) => {
            //alert("Algum erro ocorreu, digite o nome da empresa cadastrado nos boletos")
            console.log(err)
        })

    }

    payBillet(id) {
        const url = `${this.host}/finalizeBillet?id=${id}`

        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            alert("Boleto finalizado")
            printData("transfer-area", "")
            this.searchCompany(localStorage.getItem("placeName"))
            clear()
        })
        .catch((err) => {
            alert("Algum erro ocorreu")
            console.log(err)
        })
    }

    cadBillet(bankName, barCode, identify, payer, recipient, price, taxa, expDate, today, placeName, totalValue) {

        const EMAIL = localStorage.getItem("email")
        
        const url = `${this.host}/cadBillet?bankName=${bankName}&barCode=${barCode}&identify=${identify}&payer=${payer}&recipient=${recipient}&price=${price}&taxa=${taxa}&expDate=${expDate}&today=${today}&placeName=${placeName}&totalValue=${totalValue}&email=${EMAIL}`

        fetch(url, {
            mode:"cors",
            method:"POST",
            body: JSON.stringify({ bankName, barCode, identify, payer, recipient, price, taxa, expDate, today, placeName, totalValue, EMAIL })
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if(data.message){
                alert(`Boleto registrado`)
                console.log(data)
            }else{
                alert("algo deu errado")
            }
        })
        .catch((err) => {
            console.log(`Erro: ${err}`)
        })

    }

}
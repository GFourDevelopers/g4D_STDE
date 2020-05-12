
const api = new Api()

async function fetchLogin() {
    const email = "luizdaviinformatia@gmail.com"
    const password = "deiv3silvaka"

    if(api.processDatas(email, password)){
        await api.fetchLogin(email, password)
    }else{
        alert("Digite um email válido")
    }
}


const api = new Api()

async function fetchLogin() {
    const email = "daniel@gmail.com"
    const password = "danielzinho1234"

    if(api.processDatas(email, password)){
        await api.fetchLogin(email, password)
    }else{
        alert("Digite um email válido")
    }
}

fetchLogin()
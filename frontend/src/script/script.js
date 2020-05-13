
const api = new Api()

async function fetchLogin() {
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if(api.processDatas(email, password)){
        await api.fetchLogin(email, password)
    }else{
        alert("Digite um email válido")
    }
}

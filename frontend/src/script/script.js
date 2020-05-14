
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


async function cadNewUser() {

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const password2 = document.querySelector("#password2").value
    const name = document.querySelector("#Name").value

    if(password === password2 && password !== ""){
        if(api.processDatas(email, password)){
            await api.cadNewUser(name, email, password)
        }else{
            alert("Digite um email válido")
        }
    }else{
        alert("Preencha os campos de acordo com as instruções")
    }

}

async function logadState() {
    if(localStorage.getItem("logad")) {
        if(localStorage.getItem("logad") === "TRUE") {
            alert("Logado")
        }
    }else{
        localStorage.setItem("logad", "FALSE")
    }
}

logadState()
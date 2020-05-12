
class Api{

    constructor() {
        this.email = ""
        this.password = ""
        this.host = "http://localhost:3000"
    }

    processDatas(email, password) {
        this.email = email
        this.password = password
        this.parse_email = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/
        this.isValid =  this.parse_email.test(this.email)

        console.log(this.email)
        return this.isValid
    }

    fetchLogin(email, password) {
        console.log("Buscando...")
    }

}
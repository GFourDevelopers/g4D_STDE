
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

        this.email = email
        this.password = calcSHA1(password)

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
            }else{
                console.log("não encontrei ninguem")
            }
        })
        .catch((err) => {
            console.log(err)
        })

    }

}
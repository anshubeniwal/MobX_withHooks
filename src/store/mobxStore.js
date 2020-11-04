import { observable } from "mobx"


class login {

    @observable username = ""
    @observable password = ""

    

}

var store = window.store = new login

export default store
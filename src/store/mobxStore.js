import { action, computed, observable } from "mobx"


class login {

    @observable username = ""
    @observable password = ""

    @computed get credCheck() {
        return this.username === "Anshu" && this.password === "Beniwal"
    }

    @action validationMessage() {
		if (this.credCheck)
			return this.username + " " + this.password + "\n" + "Login Success!"
		else
			return "Wrong Credentials!" + "\n" + "Try Again"
	}

}

var store = window.store = new login

export default store
import { action, computed, observable } from "mobx"


class login {

    @observable username = ""
    @observable password = ""

    @computed get pwsEqual() {
		return this.username === this.password
	}

	@computed get pwsStrong() {
		return this.password.length >= 8
    }
    
    @computed get validationMessage() {
		if (!this.pwsStrong)
			return "Password should contain at least 8 characters"
		if (!this.pwsEqual)
			return "Passwords are not equal"
		return null
	}


    @computed get credCheck() {
        return this.username === "Anshu" && this.password === "Beniwal"
    }

    @action validation() {
		if (this.credCheck)
			return this.username + " " + this.password + "\n" + "Login Success!"
		else
			return "Wrong Credentials!" + "\n" + "Try Again"
	}

}

var store = window.store = new login

export default store
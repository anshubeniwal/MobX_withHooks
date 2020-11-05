const { default: ApixStore } = require("./ApiDataStore");
const { default: store } = require("./mobxStore");


class RootStore {
    constructor() {
        this.loginStore = store
        this.ApiStore = ApixStore
    }
}
const rootStore = new RootStore()

export default rootStore
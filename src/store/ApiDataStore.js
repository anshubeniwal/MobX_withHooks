import { observable, action } from 'mobx';
import axios from "axios";


class ApiDataStore {

    @observable abc = 'Anshu'
    @observable todos = ''

    @action fetchTodos() {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: `https://reqres.in/api/users/2`,
            }).then(res => {
                this.todos = res.data.data.email
                console.log("item", res.data.data.email)
                console.log("tod", this.todos)
                // res.data.map(item => {
                //     console.log("in axios ", item)
                //     this.todos.push(item.text)
                // })
                resolve(res.data);
            }).catch(err => {
                reject(err.message)
            })
        })

    }
}


var ApixStore = new ApiDataStore

export default ApixStore
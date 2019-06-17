import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
   state: {

   } ,
   actions: {
       getJson(){
           return new Promise((resolve, rejects) => {
               this.api.get(`countries.json`).then(res => {
                   console.log(res)
                   resolve(res)
               },error => {
                   rejects(error)
               })
           })
       }
   }
})

export default store
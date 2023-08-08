const app = Vue.createApp({
    data(){
        return {
            tittle: 'Naruto',
            episode: '1',
        }
    },
   methods: {
    changeTittle(tittle){
        this.tittle = tittle
    }
   }
})


app.mount('#app')
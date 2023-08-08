const app = Vue.createApp({
    data(){
        return {
            tittle: 'Dr. James',
            episode: 1,
        }
    },
   methods: {
    getResult(episode){
        if (episode === 1) {
            return 'Diceritakan sebuah anak yang bertekad untuk membalaskan dendam karena kematian orangtuanya';
        } else if (episode === 2){
           return 'Dia berusaha keras untuk menjadi seorang doktor demi memenuhi rencana balas dendamnya';
        } else {
           return 'COMING SOON';
        }
    },
    
    nextEpisode(){
        this.episode++
    },

    previousEpisode(){
        this.episode--
    }
   }
})


app.mount('#app')
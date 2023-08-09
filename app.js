const app = Vue.createApp({
    data() {
        return {
            tittle: 'Dr. James',
            episode: 1,
            event: 'event',
            x: 0,
            y: 0,
        }
    },
    methods: {
        getResult(episode) {
            if (episode === 1) {
                return 'Diceritakan sebuah anak yang bertekad untuk membalaskan dendam karena kematian orangtuanya';
            } else if (episode === 2) {
                return 'Dia berusaha keras untuk menjadi seorang doktor demi memenuhi rencana balas dendamnya';
            } else {
                return 'COMING SOON';
            }
        },

        nextEpisode() {
            this.episode++
        },

        previousEpisode() {
            this.episode--
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousePosition(e) {
           this.x = e.offsetX
           this.y = e.offsetY
        }
    }
})


app.mount('#app')
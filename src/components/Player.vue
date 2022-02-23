<template>
    <section class="player">

        <div class="button">
            <button class="fa fa-pause fa-2x" @click="pause()"></button>
            <button class="fa fa-step-backward fa-2x" @click="playPrevious()"></button>
            <button class="fa fa-play fa-2x" @click="playSong()"></button>
            <button class="fa fa-step-forward fa-2x" @click="playNext()"></button>
        </div>

        <div>Song: {{song.artist.name}}</div>
        <div>Song: {{song.name}}</div>


    </section>
</template>

<script>

export default{

    data(){
        return{
            id: (this.$route.params.videoId)        
        }
    },

    computed:{
        song(){
            console.log('player -> song():', this.$store.state.currentSong)
            return this.$store.state.currentSong
        }
    },

    created(){
    this.$store.dispatch('currentSong', this.id)
    },

    methods:{
    // getCurrentSong(){
    //     return this.$store.state.currentSong
    // },

    //     playByIndex(id){
    //     for (let index = 0; index < this.$store.state.data.content.length; index++) {
    //         if (this.$store.state.data.content[index].videoId == id) {
    //          window.player.playVideoAt(index)
    //     }
    //     }
    // },

        // await window.player.loadPlaylist(videoIdsArray)
    // const loadSongs = new Promise((resolve) => {
    //     resolve(window.player.loadPlaylist(videoIdsArray))
    // });

    // loadSongs.then(() => {
    // window.player.pauseVideo()
    // });

    playSong(){
        window.player.loadVideoById(this.id)
    },
    pause(){
        window.player.pauseVideo()
    },


    playNext(){
        window.player.nextVideo()
    },
    playPrevious(){
        window.player.previousVideo()
    }
}
}

</script>
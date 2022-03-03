<template>
    <section class="player">

        <div class="button">
            <button class="fa fa-pause fa-2x" @click="pause()"></button>
            <button class="fa fa-step-backward fa-2x" @click="playPrevious()"></button>
            <button class="fa fa-play fa-2x" @click="playSong()"></button>
            <button class="fa fa-step-forward fa-2x" @click="playNext()"></button>
        </div>

        <div class="nowPlaying">
            <div class="nowPlayingText">Now playing:</div>
            <div style="padding:10px">

                <div>Song: {{song.artist.name}}</div>
                <div>Song: {{song.name}}</div>
            </div>
        </div>

            <div v-for="songs in this.$store.state.data.content" :key="songs.videoId" style="margin-bottom:-30px">
                <router-link @click="routeSong(songs.videoId)" :to="`/player/${[searchObject.song, songs.videoId]}`">
                <p style="margin:0">{{songs.name}}</p>
                </router-link>
            </div>

    </section>
</template>

<script>

export default{

    data(){
        return{
            searchObject: {
                song: '',
            },
            urlData: (this.$route.params.videoId),
            currentSongId: '',
            isPlayingSong = false
        }
    },

    computed:{
        song(){
            console.log('computed:', this.$store.state.currentSong)
            return this.$store.state.currentSong
        }
    },

    created(){
        console.log('created')
        const data = this.urlData.split(',');
        this.searchObject.song = data[0]
        this.currentSongId = data[1]

        this.$store.dispatch('currentSong', this.currentSongId)
        this.$store.dispatch('searchForSong', this.searchObject)

        window.player.loadPlaylist(this.$store.state.listVideoIds)
        setTimeout(this.pauseVideoAfterCreated, 500)

    },

    methods:{

    pauseVideoAfterCreated(){
        window.player.pauseVideo()
    },
        
    routeSong(clickedId){
        this.currentSongId = clickedId
        this.$store.dispatch('currentSong', this.currentSongId)
    },

    playSong(){
         if(this.isPlayingSong === false){
             this.isPlayingSong = true;
             window.player.loadVideoById(this.currentSongId)
         } 
       else if(this.isPlayingSong === true){
        window.player.playVideo()
       }
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
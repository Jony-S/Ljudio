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

        <div v-if="isFetched">
            <div v-for="songs in this.$store.state.data.content" :key="songs.videoId" style="margin-bottom:-30px">
                <router-link @click="routeSong(songs.videoId)" :to="`/player/${songs.videoId}`">
                <p style="margin:0">{{songs.name}}</p>
                </router-link>
            </div>
        </div>

    </section>
</template>

<script>

export default{

    data(){
        return{
            searchObject: {
                searchString: '',
            },
            urlData: (this.$route.params.videoId),
            currentSongId: '',
            isFetched = false        
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
        this.searchString = data[0]
        this.currentSongId = data[1]
        this.$store.dispatch('currentSong', this.currentSongId)

        this.fetchData()
    },

    methods:{

    getDataFromStore(){
        this.$store.dispatch('searchForSong', this.searchObject)
    },

    fetchData(){
        const timeout = setTimeout(this.getDataFromStore, 400);
        this.isFetched = true
    },

    routeSong(clickedId){
        this.currentSongId = clickedId
        this.$store.dispatch('currentSong', this.currentSongId)
    },

    playSong(){
        window.player.loadVideoById(this.currentSongId)
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
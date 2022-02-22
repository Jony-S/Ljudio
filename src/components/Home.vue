<template>
<section class="search">

    <div >
      <label>Search for songs: </label>
      <input type="text" placeholder="Search for songs" v-model="searchObject.song" />
      <button class="fa fa-search fa-2x" @click="searchSong(searchObject)"></button> 
    </div>



<p>Search result:</p>

    <div v-for="songs in this.$store.state.data.content" :key="songs.videoId">
        <router-link type="button" :to="{ name: 'player', params: {videoId: songs.videoId}}">
        <p>{{songs.name}}</p>
        </router-link>
    </div>


    <!-- <ul class="list">

      <li v-for='songs in this.$store.state.data.content' :key="songs">
        <button class="fa fa-play" @click="playByIndex(songs.videoId)"></button>
        <span class="listSongName"> {{ songs.name }}</span>
        <br>
        <p class="listSongArtist">Link: https://www.youtube.com/watch?v={{songs.videoId }}</p>
      </li>
    </ul> -->
        
  </section>
</template>

<script>
export default {
    data(){
        return {
            searchObject:{
                song: '',
            },
        }
    },

    methods:{
        playByIndex(id){
        for (let index = 0; index < this.$store.state.data.content.length; index++) {
            if (this.$store.state.data.content[index].videoId == id) {
             window.player.playVideoAt(index)
        }
        }
    },
    // playSong(){
    //     window.player.playVideo()
    // },
    // pause(){
    //     window.player.pauseVideo()
    // },
    async searchSong(searchObject) {
        console.log('searchObject', searchObject)
        
        await this.$store.dispatch('searchForSong', searchObject)

        var videoIdsArray = []
        for (let index = 0; index < this.$store.state.data.content.length; index++) {
            videoIdsArray.push(this.$store.state.data.content[index].videoId);
        }

        console.log('data', this.$store.state.data)
        console.log('data.content', this.$store.state.data.content)

        // await window.player.loadPlaylist(videoIdsArray)
        // const loadSongs = new Promise((resolve) => {
        //     resolve(window.player.loadPlaylist(videoIdsArray))
        // });

        // loadSongs.then(() => {
        // window.player.pauseVideo()
        // });
    },

    // playNext(){
    //     window.player.nextVideo()
    // },
    // playPrevious(){
    //     window.player.previousVideo()
    // }
  }
}
</script>
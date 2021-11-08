<template>
<section>

    <div class="search">
      <label>Search for songs: </label>
      <input type="text" placeholder="Search for songs" v-model="song" />
      <button class="fa fa-search fa-2x" @click="searchSong"></button> 
    </div>


    <div class="button">
        <button class="fa fa-pause fa-2x" @click="pause()"></button>
        <button class="fa fa-step-backward fa-2x" @click="playPrevious()"></button>
        <button class="fa fa-play fa-2x" @click="playSong()"></button>
        <button class="fa fa-step-forward fa-2x" @click="playNext()"></button>

    </div>
    <ul class="list">
      <p>Search result:</p>
      <li v-for='songs in this.$store.state.data.content' :key="songs">
        <button class="fa fa-play" @click="playByIndex(songs.videoId)"></button>
        <span class="listSongName"> {{ songs.name }}</span>
        <br>
        <p class="listSongArtist">Link: https://www.youtube.com/watch?v={{songs.videoId }}</p>
      </li>
    </ul>
        

  </section>
</template>

<script>
export default {
  data(){
    return {
      song: ''
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
    playSong(){
      window.player.playVideo()
    },
    pause(){
      window.player.pauseVideo()
    },
    async searchSong() {
      await this.$store.dispatch('searchForSong', [this.song])

      var videoIdsArray = []
      for (let index = 0; index < this.$store.state.data.content.length; index++) {
        videoIdsArray.push(this.$store.state.data.content[index].videoId);
      }

      await window.player.loadPlaylist(videoIdsArray)
      const loadSongs = new Promise((resolve) => {
        resolve(window.player.loadPlaylist(videoIdsArray))
      });

      loadSongs.then(() => {
        window.player.pauseVideo()
      });
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
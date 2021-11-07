<template>
<section>
  <div class="search">
    <label>Search for a song:     </label>
    <input type="text" placeholder="Search for a song" v-model="name" />
    <button class="fa fa-search fa-2x" @click="searchSong"></button> 
    </div>

    <br>

    <div class="button">
        <button class="fa fa-play fa-2x" @click="playSong()"></button>
        <button class="fa fa-pause fa-2x" @click="pause()"></button>
        <button class="fa fa-step-forward fa-2x" @click="playPrevious()"></button>
        <button class="fa fa-step-backward fa-2x" @click="playNext()"></button>
    </div>

    <ul class="list">
      <li><p>Search result:</p></li>
      <li v-for='songs in this.$store.state.data.content' :key="songs">
        <button @click="playByIndex(songs.videoId)">{{ songs.name }}</button>
      </li>
    </ul>
    </section>
    
</template>

<script>
export default {
    data(){
        return {
            name: ""
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
    playNext(){
      window.player.nextVideo()
    },
    playPrevious(){
      window.player.previousVideo()
    },
    loadSong(){
      console.log(data.content[0].name)
      this.play(data.content[0].videoId)
    },
      searchForSong(input){
        this.$store.state.data
    },

    async searchSong() {
      await this.$store.dispatch('searchForSong', [this.name])

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
    }
    }
}
</script>
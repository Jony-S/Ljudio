<template>
  <div>
      <div>
        <button @click="playSong()">Play</button>
        <button @click="pause()">Pause</button>
        <button @click="playPrevious()">Play Next</button>
        <button @click="playNext()">Play Previous</button>
      </div>

    <input type='text' v-model="input" placeholder='search for song'/>   
    <p>Value: {{ input }}</p>

    <br>
    <br>
    <br>

    <ul>
      <li><b>Click to play:</b></li>
      <li v-for='songs in this.$store.state.data.content' :key="songs">
        <button @click="play(songs.videoId)">{{ songs.name }}</button>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
    data(){
        return {
            input: "my name"
        }
    },
  methods:{
    play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
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
     }
  },
  mounted() {
    this.$store.dispatch('loadSong')
    this.$store.state.data
  }
}
</script>
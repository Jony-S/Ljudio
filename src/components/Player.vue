<template>
  <div>

    <input v-model="input" placeholder="search for song">
    <p>Search text is: {{ input }}</p>

    <br>
    <br>
    <br>

    <button @click="pause()">Pause</button>

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
  methods:{
    play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
    },
    pause(){
      window.player.pauseVideo()
    },
    loadSong(){
      console.log(data.content[0].name)
      this.play(data.content[0].videoId)
    },
    //  searchForSong('text from textfield'){
    //    this.$store.state.data
    // }
  },
  mounted() {
    this.$store.dispatch('loadSong')
    this.$store.state.data
  }
}
</script>
<template>
<section>

    <div class="search">
      <label>Search for artists: </label>
      <input type="text" placeholder="Search for artists" v-model="artist" />
      <button class="fa fa-search fa-2x" @click="searchArtist()"></button> 
    </div>

    <ul class="list">
      <p>Search result:</p>
      <li v-for='a in this.$store.state.artistData.content' :key="a">
        <button class="fa fa-play" @click="searchSong(artist)"></button>
        <span class="listSongName"> {{ a.type }}</span>
        <br>
        <p class="listSongArtist">Link: https://www.youtube.com/watch?v={{a.name }}</p>
      </li>
    </ul>
        

  </section>
</template>

<script>
export default {
  data(){
    return {
      artist: ''
    }
  },
  methods:{
    async searchArtist() {
      await this.$store.dispatch('searchForArtist', [this.artist])
    },
  }
}
</script>

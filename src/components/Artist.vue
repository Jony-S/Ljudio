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
                <span class="listSongName"> {{ a.name }}</span>
                <br>
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

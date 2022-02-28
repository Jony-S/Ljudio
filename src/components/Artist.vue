<template>
    <section class="search">

        <div>
            <label>Search for artists: </label>
            <input style="margin-right: 5px;" type="text" placeholder="Search for artists" v-model="artist" />
            <button style="margin-left: 10px;" class="fa fa-search fa" @click="searchArtist()"></button> 
        </div>

        <p>Search result:</p>

        <div v-for='a in this.$store.state.artistData.content' :key="a">
            <p style="margin:0">{{a.name}}</p>
        </div>
        
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

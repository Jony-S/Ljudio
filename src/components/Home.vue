<template>
    <section class="search">

        <div>
            <label>Search for songs: </label>
            <input style="margin-right: 5px;" type="text" placeholder="Search for songs" v-model="searchObject.song" />
            <button style="margin-left: 10px;" class="fa fa-search fa" @click="searchSong(searchObject)"></button> 
        </div>

        <p>Search result:</p>

        <div v-for="songs in this.$store.state.data.content" :key="songs.videoId" style="margin-bottom:-30px">
            <router-link @click="routeSong(songs.videoId)" :to="`/player/${songs.videoId}`">
            <p style="margin:0">{{songs.name}}</p>
            </router-link>
        </div>
        
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

    async searchSong(searchObject) {
        console.log('searchObject', searchObject)
        
        await this.$store.dispatch('searchForSong', searchObject)

        var videoIdsArray = []
        for (let index = 0; index < this.$store.state.data.content.length; index++) {
            videoIdsArray.push(this.$store.state.data.content[index].videoId);
        }

        console.log('data', this.$store.state.data)
        console.log('data.content', this.$store.state.data.content)
    },

    routeSong(id){
        this.$store.dispatch('currentSong', id)
    },

    }


  
}
</script>
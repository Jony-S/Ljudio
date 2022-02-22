import { createStore } from "vuex" 

const state = {
    data: {},
    artistData: {}
}

const mutations = {
    saveState(state, value){
        state.data = value
    },
    saveStateArtist(state, value){
        state.artistData = value
    },
}

const actions = {
    async searchForSong({commit}, searchObject){
        let result = await fetch(`https://yt-music-api.herokuapp.com/api/yt/songs/${searchObject.song}`)
        let data = await result.json()
        commit('saveState', data)
    },
    async searchForArtist({commit}, [artist]){
        let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/artists/' + artist)
        let data = await result.json()
        console.log(data)
        commit('saveStateArtist', data)
    }
}


export default createStore ({
    state, mutations, actions
})
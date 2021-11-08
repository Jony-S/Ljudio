import { createStore } from "vuex" 

const state = {
    data: {}
}

const mutations = {
    saveState(state, value){
        state.data = value
    },
}

const actions = {
    async searchForSong({commit}, [song]){
        let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/' + song)
        let data = await result.json()
        commit('saveState', data)
    },
    async searchForArtist({commit}, [artist]){
        let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/artist/' + artist)
        let data = await result.json()
        commit('saveState', data)
    }
}


export default createStore ({
    state, mutations, actions
})
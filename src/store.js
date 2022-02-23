import { createStore } from "vuex" 

const state = {
    data: {},
    artistData: {},
    currentSong:{}
}

const mutations = {
    saveState(state, value){
        state.data = value
    },
    saveStateArtist(state, value){
        state.artistData = value
    },
    setCurrentSong(state, song){
        state.currentSong = song.content[0];
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

        commit('saveStateArtist', data)
    },

    async currentSong({commit}, id){
        let response = await fetch
        (`https://yt-music-api.herokuapp.com/api/yt/songs/${id}`)
        let data = await response.json()

        commit('setCurrentSong', data)

        console.log('currentSong', data)


    },
}


export default createStore ({
    state, mutations, actions
})
import { createStore } from "vuex" 

const state = {
    data: {},
    artistData: {},
    currentSong:{},
    listVideoIds:{},
}

const mutations = {
    saveState(state, value){
        state.data = value
    },
    saveStateArtist(state, value){
        state.artistData = value
    },
    setCurrentSong(state, song){
        state.currentSong = song.content[0]
    },
    setListVideoIds(state, value){
        state.listVideoIds = value
    },
}

const actions = {
    async searchForSong({commit}, searchObject){
        let result = await fetch(`http://localhost:4000/api/yt/songs/${searchObject.song}`)
        let data = await result.json()

        let listVideoIds = []
        for (let i = 0; i < data.content.length; i++) {
            listVideoIds.push(data.content[i].videoId)
        }

        commit('saveState', data)
        commit('setListVideoIds', listVideoIds)
    },

    async searchForArtist({commit}, [artist]){
        let result = await fetch('http://localhost:4000/api/yt/artists/' + artist)
        let data = await result.json()

        commit('saveStateArtist', data)
    },

    async currentSong({commit}, id){
        let response = await fetch
        (`http://localhost:4000/api/yt/songs/${id}`)
        let data = await response.json()

        commit('setCurrentSong', data)
    },
}

export default createStore ({
    state, mutations, actions
})
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
        let result = await fetch(`https://yt-music-api.herokuapp.com/api/yt/songs/${searchObject.song}`)
        let data = await result.json()

        let listVideoIds = []
        for (let i = 0; i < data.content.length; i++) {
            console.log('hamnar vi här?')
            listVideoIds.push(data.content[i].videoId)
        }
        console.log('listvideIds', listVideoIds)

        commit('saveState', data)
        commit('setListVideoIds', listVideoIds)
    },

    async searchForArtist({commit}, [artist]){
        let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/artists/' + artist)
        let data = await result.json()

        commit('saveStateArtist', data)
    },

    async currentSong({commit}, id){
        console.log("current song", id)
        let response = await fetch
        (`https://yt-music-api.herokuapp.com/api/yt/songs/${id}`)
        let data = await response.json()

        console.log("current song after api fetch", data)

        commit('setCurrentSong', data)

        console.log('currentSong', data)


    },
}


export default createStore ({
    state, mutations, actions
})
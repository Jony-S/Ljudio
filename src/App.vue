<template>
    <body>
        <div class="wrapper">
        <header>
            <h1>Ljudio</h1>
        </header>

        <main>

            <router-link to="/Artists">Search for artists</router-link>
            <router-view></router-view>

        <Player/>

        </main>
        </div>
    </body>
</template>


<script>
import Player from './components/Player.vue'

export default {
    components:{
    Player
    }
}
</script>
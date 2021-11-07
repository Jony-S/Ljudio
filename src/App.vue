<template>
    <body>
        <div class="wrapper">
        <header>
            <h1>Ljudio</h1>
        </header>

        <main>

        <Player/>

        <br>
        <br>

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
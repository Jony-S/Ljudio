<template>
    <section class="player">

        <div class="button">
            <button class="fa fa-pause fa-2x" @click="pause()"></button>
            <button class="fa fa-step-backward fa-2x" @click="playPrevious()"></button>
            <button class="fa fa-play fa-2x" @click="playSong()"></button>
            <button class="fa fa-step-forward fa-2x" @click="playNext()"></button>
        </div>

        <!-- <div>Song: {{song.name}}</div> -->

    </section>
</template>

<script>

export default{
    computed:{
        song(){
            console.log('player -> song():', this.$store.state.data.content)
            return this.$store.state.data.content.song
        }
    }
}

</script>
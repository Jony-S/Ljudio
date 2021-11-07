<template>
    <div>
        <h1>Ljudio</h1>

        <router-link to="/">Route</router-link>

        <br>
        <br>

        <router-view></router-view> 
        <FooterComponent/>
    </div>
</template>


<script>
import FooterComponent from '/src/components/Footer.vue'

export default {
    components:{ 
        FooterComponent
    }
}
</script>
<template>
    <h1>{{title}}</h1>
    <button @click="changeTitle">change title</button>
</template>


<script>
export default {
    data(){ // local data
        return {
            title: 'LocalPlayer'
        }
    },
    methods:{
        changeTitle(){
            this.title = 'Here you will see the LocalPlayer'
        }
    }
}

</script>
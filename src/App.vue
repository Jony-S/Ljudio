<template>
    <body>
        <div class="wrapper">
        <header>
            <h1>Ljudio</h1>
        </header>

        <main>
            <div class="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/player">Search and play songs</router-link> |
                <router-link to="/Artist">Search for artists</router-link> |
                <router-view></router-view>
            </div>
        </main>
        </div>
    </body>
</template>


<script>
</script>
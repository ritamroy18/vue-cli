<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h1>Hello World</h1> -->
    <Home></Home>
    <div class="container">
        <Header></Header>
        <hr>
        <div class="row">

          <app-server></app-server>
          <ServerDetails></ServerDetails>
        </div>
         <hr>
        <Footer></Footer>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from '@/components/Shared/Header.vue'
import Footer from '@/components/Shared/Footer.vue'
import Servers from '@/components/Server/Servers.vue'
import ServerDetails from '@/components/Server/ServerDetails.vue'

export default {
  name: 'App',
  components: {
    Header,
    // Servers,
    //another approach with selector
    'app-server':Servers,
    ServerDetails,
    Footer  
    }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

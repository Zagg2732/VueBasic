<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <br> <h1>Data binding</h1>
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinghtml">HTML</router-link> |
    <router-link to="/databindinginputtext">Input</router-link> |
    <router-link to="/databindingselect">Select</router-link> |
    <router-link to="/databindingmultiselect">Multi Select</router-link> |
    <router-link to="/databindingradio">Radio</router-link> |
    <router-link to="/databindingattribute">Attr</router-link> |
    <router-link to="/databindingbutton">Button</router-link> |
    <router-link to="/databindingclass">Class</router-link> |
    <router-link to="/databindinglist">v-for List</router-link> |
    <router-link to="/renderingvif">v-if render</router-link> |
    <router-link to="/eventclick">eventclick</router-link> |

  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

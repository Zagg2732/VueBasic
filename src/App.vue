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
    <router-link to="/watchandcomputed">watch</router-link> |
    <router-link to="/watchandcomputed2">computed</router-link>
    <br> <h1>Mock Server(Postman)</h1>
    <router-link to="/databindinglist2">Mock Server</router-link>
    <br> <h1>Components</h1>
    <router-link to="/nestedcomponent">Nest Component</router-link> |
    <router-link to="/nestedcomponent2">Nest Component</router-link>
    <br> <h1>Parent/Child Components</h1>
    <router-link to="/parentcomponent">ParentComponent</router-link> |
    <router-link to="/parentcomponent2">ParentComponent2</router-link> |
    <router-link to="/parentcomponent3">ParentComponent3</router-link> |
    <router-link to="/parentcomponent4">ParentComponent4</router-link> |
    <router-link to="/parentcomponent5">ParentComponent5</router-link>
    <br> <h1>Slot</h1>
    <router-link to="/slot">Slot</router-link>
    <br> <h1>Provide / Inject</h1>
    <router-link to="/grandparent">GrandParent</router-link>  |
    <router-link to="/provideinject">Provide Inject</router-link> |
    <router-link to="/provideinject2">Provide Inject2</router-link>
    <br> <h1>Calculator</h1>
    <router-link to="/calculator">Calculator</router-link> |
    <router-link to="/calculator2">Calculator2</router-link> |
    <router-link to="/calculator3">Calculator3</router-link>
    <br> <h1>vuex</h1>
    <router-link to="/storeaccess">vuex</router-link>


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

<template>
  <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>
    <a role="button" class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }"  aria-label="menu" aria-expanded="false" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
 <div class="navbar-menu" :class="{ 'is-active': showNav }">
  <div class="navbar-start">
    <!-- navbar items -->
    <router-link tag="a" active-class="is-active" class="navbar-item" to="/" exact>
      Home
    </router-link>
    <router-link tag="a" active-class="is-active" class="navbar-item" to="/kuliner" exact>
      Tempat kuliner
    </router-link>
    <a class="navbar-item">
      Tempat Wisata
    </a>
    <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      Informasi
    </a>
    <div class="navbar-dropdown">
      <!-- Other navbar items -->
        <a class="navbar-item">
          Cuaca
        </a>
        <a class="navbar-item">
          Lalu Lintas
        </a>
      </div>
    </div>
  </div>

  <div class="navbar-end">
 
  </div>
</div>
</nav>
</template>

<script>
export default {
  name: 'HelloWorld',
   data (){
    return{
    showNav: false
    }
  },
  props: {
    msg: String
  }
}
</script>
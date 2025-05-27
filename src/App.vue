<script setup>
import Navbar from './components/Navbar.vue'
import Player from "./modules/layout/Player.vue";
</script>

<template>
  <Navbar/>
  <router-view/>
  <Player/>
</template>



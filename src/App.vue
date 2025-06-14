<script setup>
import Navbar from './components/Navbar.vue'
import Player from "./modules/Player/components/Player.vue";
</script>

<template>
  <Navbar/>
  <router-view/>
  <Player/>
</template>



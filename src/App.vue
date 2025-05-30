<script setup>
import Navbar from './components/Navbar.vue'
import PlayerLegacy from "./modules/Player/components/PlayerLegacy.vue";
</script>

<template>
  <Navbar/>
  <router-view/>
  <PlayerLegacy/>
</template>



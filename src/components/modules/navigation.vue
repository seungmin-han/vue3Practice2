<template>
  <div id="nav" v-if="!route.meta.isHideTab">
      <router-link to="/">HOME</router-link>
      <router-link to="/page2">Page 2</router-link>
      <router-link to="/page3">Page 3</router-link>
      <router-link to="/page4">Page 4</router-link>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user'
import { useRoute } from 'vue-router';
export default {
    name: "Navigation"
    , setup() {
        const user = useUserStore();
        const route = useRoute();
        return {
            user,
            route
        }
    }
}
</script>

<style>

</style>
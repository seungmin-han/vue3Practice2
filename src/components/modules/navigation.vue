<template>
  <div id="nav" v-if="!user.isHideTab">
      <router-link to="/">HOME</router-link>
      <router-link to="page2">Page 2</router-link>
      <router-link to="page3">Page 3</router-link>
      <router-link to="page4">Page 4</router-link>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user'
export default {
    name: "Navigation"
    , setup() {
        const user = useUserStore();
        return {
            user
        }
    }
}
</script>

<style>

</style>
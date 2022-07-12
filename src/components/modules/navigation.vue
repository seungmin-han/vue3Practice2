<template>
  <div id="nav" v-if="user.currentPage!=1">
      <router-link :to="{name: 'HOME', params:{index: user.index, page:0}}">HOME</router-link>
      <router-link :to="{name: 'page2', params:{index: user.index, page:1}}">Page 2</router-link>
      <router-link :to="{name: 'page3', params:{index: user.index, page:2, currentTab:user.currentTab}}">Page 3</router-link>
      <router-link :to="{name: 'page4', params:{index: user.index, page:3}}">Page 4</router-link>
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
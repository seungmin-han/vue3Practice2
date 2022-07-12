<template>
  <router-view />
  
  <Navigation></Navigation>
</template>

<script>
import { useUserStore } from "@/stores/user";
import { useRoute } from 'vue-router';
import { onMounted } from '@vue/runtime-core';
import { Navigation } from '@/components/modules';

export default {
  components : { 
    Navigation 
  }
  , setup() {
    const user = useUserStore();
    const route = useRoute();
    const index = onMounted(()=> {route.params.index});
    const page = onMounted(()=> {route.params.page});

    return {
      user
      , index
      , page
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  > * {
    margin: 0 20px;
  }
}
</style>

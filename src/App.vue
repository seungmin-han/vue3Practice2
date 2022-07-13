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

    return {
      user

    }
  }
}

</script>

<style lang="scss">

* {
	margin: 0 auto;
	padding: 0;
	text-decoration: none;
	list-style: none;
	box-sizing: border-box;
	text-align: center;
}

h1 {
	text-align: center;
	padding: 30px;
}

#nav {
	display: flex;
	justify-content: space-around;
	flex-direction: row;
}
</style>

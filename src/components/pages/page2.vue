<template>
    <Header></Header>
    <h1>페이지2-{{user.subPage}}</h1>
    <hr>
    <router-link v-if="next < 6" :to="{name:'page2sub', params:{index:user.index, page:1, subPage:next}}">다음페이지</router-link>
    <router-link v-else to="/">메인페이지</router-link>
</template>

<script>
import { useUserStore } from "@/stores/user"
import { Header } from "@/components/modules"
import { useRoute } from 'vue-router';
import { computed } from '@vue/runtime-core';


export default {
    name: "Page2"
    , components : {
        Header
    }
    , props: ["page", "index", "subPage"]
    , setup() {
        const user = useUserStore();
        const route = useRoute();
        
        user.subPage = computed(()=> {
            return !route.params.subPage ? 1 : route.params.subPage;
        });

        const next = computed(()=> {
            return parseInt(user.subPage)+1;
        });
        return {
            user
            , next
        }
    }
}

</script>

<style>
    a {
        text-decoration: underline;
        font-size: 24px;
        cursor: pointer;
    }
</style>
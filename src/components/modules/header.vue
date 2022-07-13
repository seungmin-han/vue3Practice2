<template>
    <header :class="route.meta.headerClass">
        <template v-if="route.meta.headerType =='A'">
            Type-A
        </template>
        <template v-else-if="route.meta.headerType =='B'">
            Type-B 
            <!-- <router-link :to="{name:'HOME'}">돌아가기</router-link> -->
            <a @click="$router.go(-1);">돌아가기</a>
        </template>
        <template v-else>
            Type-C: {{user.info[user.index].name}}
        </template>
    </header>
</template>

<script>

import { useUserStore } from "@/stores/user"
import { useRoute } from 'vue-router';
export default {    
    name : "Header"
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

<style lang="scss">
    header {
        width: 100%;
        height: 60px;

        color: #fff;
        font-size: 40px;
        > div {
            text-align: right;
            padding: 0 40px;
        }
        a {
            color: #fff;
        }
    }

    .red {
        background-color: red;
    }

    .blue {
        background-color: blue;
    }

    .green {
        background-color: green;
    }
</style>
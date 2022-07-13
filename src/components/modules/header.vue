<template>
    <header :class="user.headerColor">
        <div v-if="user.type=='A'">
            Type-A
        </div>
        <div v-else-if="user.type=='B'">
            Type-B 
            <!-- <router-link :to="{name:'HOME'}">돌아가기</router-link> -->
            <a @click="$router.go(-1);">돌아가기</a>
        </div>
        <div v-else>
            Type-C: {{user.name}}
        </div>
    </header>
</template>

<script>
import { useUserStore } from "@/stores/user"
import { useRoute } from 'vue-router';
export default {    
    name : "Header"
    , setup() {
        const user = useUserStore();
        return {
            user
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
<template>
    <Header></Header>
    <h1>메인페이지</h1>
    
    <select name="user" id="" v-model="user.index">
        <option v-for="(value, key) in user.info" :key="key" :value="key">
            {{value.name}}
        </option>
    </select>

    <div>
        <Dog v-if="user.info[user.index].animals.indexOf('강아지') > -1"></Dog>
        <Cat v-if="user.info[user.index].animals.indexOf('고양이') > -1"></Cat>
        <Rabbit v-if="user.info[user.index].animals.indexOf('토끼') > -1"></Rabbit>
        <Lion v-if="user.info[user.index].animals.indexOf('사자') > -1"></Lion>
    </div>
</template>

<script>
import { useUserStore } from "@/stores/user"
import { useRoute } from 'vue-router';
import { Header } from '@/components/modules';
import {Dog, Cat, Rabbit, Lion} from '@/components/animals';
import { computed, reactive } from '@vue/runtime-core';
export default {
    name: "Home"
    , components : {
        Header
        , Rabbit
        , Dog
        , Cat
        , Lion
    }
    , setup() {
        const user = useUserStore();
        const route = useRoute();
        // meta name 
        // proxy meta = name 

        console.log('route',route.meta);
        const name = computed(()=> {
            return user.info[user.index].name;
        })

        return {
            user
            , name
        }
    }
}
</script>

<style>

</style>
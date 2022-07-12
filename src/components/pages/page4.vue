<template>
    <Header></Header>
    <h3>페이지4</h3>
</template>

<script>
import { Header } from "@/components/modules"
import { useUserStore } from '@/stores/user'
export default {
    components : {
        Header
        , 
    }, name: "Page4",
    setup() {
        const user = useUserStore();
        return {
            user
        }
    }
}
</script>

<style>

</style>
<template>
    <Header></Header>
    <h1>페이지4</h1>
    <img src="../../assets/logo.png" alt="Vue Logo" />
</template>

<script>
import { Header } from "@/components/modules";
import { useUserStore } from "@/stores/user";
export default {
    components: {
        Header,
    },
    name: "Page4",
    setup() {
        const user = useUserStore();
        return {
            user,
        };
    },
};
</script>

<style></style>

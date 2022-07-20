<template>
    <Header></Header>
    <h1>페이지3</h1>
    <hr />
    <div>
        <div class="tabMenu">
            <div
                :class="{ active: currentTab == 0 }"
                class="tab"
                @click="switchTab(0)"
            >
                3-1
            </div>
            <div
                :class="{ active: currentTab == 1 }"
                class="tab"
                @click="switchTab(1)"
            >
                3-2
            </div>
            <div
                :class="{ active: currentTab == 2 }"
                class="tab"
                @click="switchTab(2)"
            >
                3-3
            </div>
        </div>
        <div class="tabContentWrap">
            <div class="tabContent red" v-show="currentTab == 0">
                content 3-1 <br />
                안녕하세요.
            </div>
            <div class="tabContent blue" v-show="currentTab == 1">
                content 3-2 <br />
                반갑습니다.
            </div>
            <div class="tabContent green" v-show="currentTab == 2">
                content 3-3 <br />
                즐거운 하루 되세요.
            </div>
        </div>
    </div>
</template>

<script>
import { Header } from "@/components/modules";
import { useUserStore } from "@/stores/user";
import { useRoute } from "vue-router";
import { computed, reactive, ref } from "vue";
export default {
    components: {
        Header,
    },
    name: "Page3",
    setup() {
        const user = useUserStore();
        let currentTab = ref(0);

        const switchTab = (idx) => {
            currentTab.value = idx;
        };
        return {
            user,
            switchTab,
            currentTab,
        };
    },
};
</script>

<style lang="scss">
.active {
    border-bottom: 5px solid violet;
}
.tabMenu {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    > .tab {
        cursor: pointer;
        width: 100%;
        border-left: 1px solid #000;
        border-right: 1px solid #000;
    }
}
.tabContentWrap {
    min-height: 200px;
    .tabContent {
        width: 100%;
        min-height: inherit;
        border: 1px solid #ccc;
        line-height: 50px;
        color: #fff;
        font-weight: bold;
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
}
</style>

<template>
    <Header></Header>
    <h3>페이지3</h3>
    <hr>
    <div>
        <div class="tabMenu">
            <div :class="{'active' : currentTab==0}" class="tab" @click="$router.push({name: 'page3', params:{index:user.index, page:2, currentTab:0}})">3-1</div>
            <div :class="{'active' : currentTab==1}" class="tab" @click="$router.push({name: 'page3', params:{index:user.index, page:2, currentTab:1}})" >3-2</div>
            <div :class="{'active' : currentTab==2}" class="tab" @click="$router.push({name: 'page3', params:{index:user.index, page:2, currentTab:2}})" >3-3</div>
        </div>
        <div class="tabContentWrap">
            <div class="tabContent" v-show="currentTab == 0">
                content 3-1 <br>
                안녕하세요.
            </div>
            <div class="tabContent" v-show="currentTab == 1">
                content 3-2 <br>
                반갑습니다.
            </div>
            <div class="tabContent" v-show="currentTab == 2">
                content 3-3 <br>
                즐거운 하루 되세요.
            </div>
        </div>
    </div>
</template>

<script>
import { Header } from "@/components/modules";
import { useUserStore } from '@/stores/user';
import { useRoute } from 'vue-router';
import { computed } from '@vue/runtime-core';
export default {
    components : {
        Header
        , 
    }
    , props: ["page", "index", "currentTab"]
    , name: "Page3"
    , setup() {
        const user = useUserStore();
        const route = useRoute();

        user.currentTab = computed(()=> {
            return !route.params.currentTab ? 0 : route.params.currentTab;
        });
        const switchTab = (idx) => {
            
        }
        return {
            user
            , switchTab
        }
    }
}
</script>

<style lang="scss">
    .active {
        border-bottom: 2px solid red;
    }
    .tabMenu  {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        > .tab {
            cursor: pointer;
        }  
    }
    .tabContentWrap {
        min-height: 200px;
        padding: 10px;
        .tabContent{
            width: 100%;
            min-height: inherit;
            border: 1px solid #ccc;
        }
    }
</style>
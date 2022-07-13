import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useUserStore = defineStore("useUserStore", () => {

    const index = ref(0);
    const subPage = ref(1);
    
    const info = reactive([
        {
            name: "비회원"
            , animals: ["강아지", "고양이"]
        }
        ,{
            name: "A회원"
            , animals: ["강아지", "사자"]
        }
        ,{
            name: "B회원"
            , animals: ["고양이", "토끼"]
        }
        ,{
            name: "VIP회원"
            , animals: ["사자", "토끼"]
        }
    ]);

    return {
        index
        , info
        , subPage
    }

})
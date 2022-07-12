import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useUserStore = defineStore("useUserStore", () => {

    const index = ref(0);
    const currentPage = ref(0);
    const subPage = ref(1);
    const currentTab = ref(0);
    const type = ref("A");
    const name = computed(()=> {
        return info[index.value].name;
    });
    const headerColor = computed(()=> {
        let color = "green";
        if(currentPage.value == 0) 
        {
            if(index.value == 0) 
            {
                type.value = "A";
                color = "red";
            }
            else 
            {
                type.value = "C";
                color = "green";
            }
        } 
        else
        {
            type.value = "B";
            color = "blue";
        }
        return color;
    });

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
        , headerColor
        , type
        , name
        , currentPage
        , subPage
        , currentTab
    }

})
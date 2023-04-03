import {onBeforeMount, onMounted, ref} from 'vue'

export function useScoll(){
    const nowScrollPos = ref<number>(0)
    function scollUpdate(){
        nowScrollPos.value = document.documentElement.scrollTop
    }
    onMounted(()=>{
        window.addEventListener('scroll',scollUpdate)
    })
    onBeforeMount(()=>{
        window.removeEventListener('scroll',scollUpdate)
    })
    return {nowScrollPos}
}
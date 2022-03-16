<template>
  <div class="flex-auto bg-white dark:bg-gray-900 h-screen overflow-y-scroll justify-center" @click="showCode">
    <div  class="w-full h-full text-gray-900">
      <iframe 
        class="mt-32 w-2/3 h-52 bg-blue-400"
        title="Page preview"
        :onload="logShit"
        loading="lazy"
        :name="lalac"
        :srcdoc="lilas"
      >
        
      </iframe>
      <component :is="blocksList[selectedIcons[0][1]][selectedIcons[0][0]]"  />
      <div v-html="codeBlock?.value?.innerHTML"></div>
    </div> 
    <main class="hidden px-8 my-12 min-h-screen" ref="codeBlock">
      <div v-for="(currentIcon, index) in selectedIcons" :key="index">
        <component :is="blocksList[currentIcon[1]][currentIcon[0]]"  />
      </div>
    </main>
  </div>
</template>
<script>
import { useComponents } from "@/compossable/components"
import { useDarkMode } from "@/compossable/dark-mode"
import { ref, onMounted, computed } from "vue";

export default {
  name: 'CodeOrPagePreview',
  data() {
    return {
      asee: "Weret",
    }
  },
  setup() {
    const { 
      blocksList,
      selectedIcons,
    } = useComponents()
    const { darkMode } = useDarkMode()

    const codeBlock = ref('')
    const codeForPreview = ref('<span>Emile</span>')
    
    const showCode = () => {
      // codeForPreview.value = codeBlock.value.innerHTML
      console.log(typeof codeForPreview.value)
      console.log(codeForPreview.value)
    }

    onMounted(() => {
        codeBlock.value = document.querySelector('main')
      })

    const lilas = computed(() => {
        return `<span>${codeBlock.value.innerHTML}</span>`
      })
    
    const logShit = () => {
      console.log('Hmmm', showCode())
    }
    return {
      selectedIcons,
      blocksList,
      showCode,
      codeForPreview,
      codeBlock,
      darkMode,
      logShit,
      lilas,
    }
  },
}
</script>
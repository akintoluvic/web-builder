<template>
  <div class="flex-auto bg-white dark:bg-gray-900 h-screen overflow-y-scroll justify-center">
    <main class="px-8 my-12 min-h-screen">
        <div v-for="(currentIcon, index) in selectedIcons" :key="index">
        <component :is="blocksList[currentIcon[1]][currentIcon[0]]"  />
        </div>
    </main>
  </div>
</template>
<script>
import { useComponents } from "@/compossable/components"

export default {
  name: 'CodeOrPagePreview',
  setup() {
    const { 
      blocksList,
      selectedIcons,
    } = useComponents()    
    
    return { selectedIcons, blocksList }
  },
}
</script>
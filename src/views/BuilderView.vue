<template>
  <div class="h-screen w-screen lg:overflow-x-hidden" :class="theme">
    <!-- Top Bar -->
    <TopBar />

    
    <div class="h-screen flex">
      <!-- components sidebar -->
      <LeftSideBar />
      <!-- design preview/code -->
      <CodeOrPagePreview />

      <!-- customise components sidebar -->
      <!-- <div class="w-52 flex-grow-0 bg-slate-200 py-20 px-4">
        <h3 class="text-sm mb-2">Choose theme</h3>
      </div> -->
    </div>
  </div>
</template>

<script >
import TopBar from "@/components/builder/TopBar.vue"
import LeftSideBar from "@/components/builder/LeftSideBar.vue"
import { useTheme } from "@/compossable/theme"
import CodeOrPagePreview from '@/components/builder/CodeOrPagePreview.vue'

export default {
  name: "BuilderView",
  components: {
    TopBar,
    LeftSideBar,
    CodeOrPagePreview
  },
  setup() {
    const { theme } = useTheme()
    return { theme }
  },
};
</script>

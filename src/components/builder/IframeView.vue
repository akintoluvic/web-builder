<template>
  <iframe 
        ref="iframe"
        class="h-full bg-white dark:bg-gray-900 mx-auto border-2 border-slate-200"
        :class="[viewWidth, ]"
        title="Page components preview"
        :onload="logShit"
        loading="lazy"
        name="Page components preview"
      />
</template>
<script>
import { useViewOrCode } from "@/compossable/view-mode"

export default {
  name: 'IframeView',
  setup() {
    const { viewWidth, codeView, } = useViewOrCode()
    return {
      viewWidth,
      codeView,
    }
  }
}
</script>
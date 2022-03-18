<template>
  <iframe 
        ref="iframe"
        class="h-full bg-white dark:bg-gray-900 mx-auto border-2 border-slate-200"
        :class="[viewWidth, ]"
        title="Page components preview"
        loading="lazy"
        name="Page components preview"
      />
</template>
<script>
import { useViewOrCode } from "@/compossable/view-mode"
import { toRefs, onMounted, ref, onUnmounted  } from "vue"

export default {
  name: 'IframeView',
  props: {
    code: String
  },
  setup(props) {
    const { code } = toRefs(props)
    const { viewWidth, codeView, } = useViewOrCode()
    const iframe = ref('')

    const displayContent = () => {
        iframe.value.contentWindow.document.write(code.value)
        iframe.value.contentWindow.document.close()
    }

    onMounted(() => {
      displayContent()
      console.log('mounted')
    })

    onUnmounted(() => {
      console.log('destroyed')
    })

    const logShit = () => {
      console.log('Hmmm, what iFrame doing here?')
    }

    return {
      viewWidth,
      codeView,
      iframe,
      logShit,
    }
  }
}
</script>
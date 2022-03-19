<template>
  <div 
    class="h-ful overflow-y-scroll py-14 bg-slate-200 border-2 border-slate-300 mx-auto rounded-3xl"
    :class="[deviceViewWidth]" 
  >
    <iframe 
        ref="iframe"
        id="iframe"
        class="h-full bg-white mx-auto dark:bg-gray-900 border-2 border-slate-300"
        :class="[iframeViewWidth, ]"
        title="Page components preview"
        loading="lazy"
        name="Page components preview"
      />
  </div>
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
    const { viewWidth, codeView, deviceViewWidth, iframeViewWidth } = useViewOrCode()
    const iframe = ref('')

    const displayContent = () => {
        iframe.value.contentWindow.document.write(code.value)
        iframe.value.contentWindow.document.close()
    }

    onMounted(() => {
      displayContent()
    })

    onUnmounted(() => {})

    const logShit = () => {
      console.log('Hmmm, what iFrame doing here?')
    }

    return {
      viewWidth,
      codeView,
      iframe,
      logShit,
      deviceViewWidth,
      iframeViewWidth,
    }
  }
}
</script>

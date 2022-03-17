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
import { toRefs, onMounted, ref,  } from "vue"

export default {
  name: 'IframeView',
  props: {
    code: String
  },
  setup(props) {
    const { code } = toRefs(props)
    const { viewWidth, codeView, } = useViewOrCode()
    const iframe = ref('')

    // computed property that auto-updates when the prop changes
    // const normalizedSize = computed(() => props.size.trim().toLowerCase())
    
    const displayContent = () => {
        iframe.value.contentWindow.document.write(code.value)
    }

    console.log(code, 'codeForView')

    onMounted(() => {
      displayContent()
    })

    const logShit = () => {
      console.log('Hmmm, what iFrame doing here?')
    }


    // watch(codeForView, () => {
    //   displayContent(codeForView)
        
    //   console.log('iframe updated', codeForView.value)
    // })

    return {
      viewWidth,
      codeView,
      iframe,
      logShit,
    }
  }
}
</script>
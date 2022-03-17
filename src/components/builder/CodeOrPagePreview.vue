<template>
  <div class="flex-auto bg-white dark:bg-gray-900 h-screen overflow-y-scroll justify-center">
    <div  class="w-full h-full text-gray-900 mt-32">
      <div v-if="codeView" class="p-8"><pre>{{ codeForView }}</pre></div>
      <IframeView v-else :code="codeForPreview" />
    </div> 
    <main  class="hidden px-8 my-12 min-h-screen" ref="codeBlock">
      <div v-for="(currentIcon, index) in selectedIcons" :key="index">
        <component :is="blocksList[currentIcon[1]][currentIcon[0]]"  />
      </div>
    </main>
  </div>
</template>
<script>
import { useComponents } from "@/compossable/components"
import { useDarkMode } from "@/compossable/dark-mode"
import { useViewOrCode } from "@/compossable/view-mode"
import { ref, computed,   } from "vue";
import IframeView from "@/components/builder/IframeView";

export default {
  name: 'CodeOrPagePreview',
  components: {
    IframeView,
  },
  setup() {
    const { 
      blocksList,
      selectedIcons,
    } = useComponents()
    const { darkMode } = useDarkMode()
    const { viewWidth, codeView, } = useViewOrCode()

    const codeBlock = ref('')
    

    const beautifyHTML = (codeStr) => {
      const process = (str) => {
        let div = document.createElement('div');
        div.innerHTML = str.trim();
        return format(div, 0).innerHTML.trim();
      }
      
      const format = (node, level) => {
        let indentBefore = new Array(level++ + 1).join('  '),
          indentAfter = new Array(level - 1).join('  '),
          textNode;
      
        for (let i = 0; i < node.children.length; i++) {
          textNode = document.createTextNode('\n' + indentBefore);
          node.insertBefore(textNode, node.children[i]);
      
          format(node.children[i], level);
      
          if (node.lastElementChild === node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
          }
        }
        return node;
      }
      return process(codeStr);
    }

    const codeForPreview = computed(() => {
        return `
          <!DOCTYPE html>
        <html>
        <head>
        <title>Page Title</title>
        <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet" />
        </head>
        <body class="dark dark-mode"><span>${codeBlock.value.innerHTML}</span>
        </body>
        </html>`
      })

    const codeForView = computed(() => beautifyHTML(codeForPreview.value))

    // const codeForViewAndPreview = () => {
    //   codeForView.value = beautifyHTML(codeForPreview)
    //   console.log('codeForViewAndPreview', codeForView.value)
    // }
    

    // onMounted(() => {
    //   // codeForViewAndPreview()
    //   iframe.value.contentWindow.document.write(codeForPreview.value)
    // })

    // watch(() => selectedIcons.value, () => {
    //   codeForViewAndPreview()
        
    //   console.log('iframe updated', codeForView.value)
    // })

    
    
    return {
      selectedIcons,
      blocksList,
      codeForView,
      codeForPreview,
      codeBlock,
      darkMode,
      viewWidth,
      codeView,
    }
  },
}
</script>
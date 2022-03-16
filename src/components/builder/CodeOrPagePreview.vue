<template>
  <div class="flex-auto bg-white dark:bg-gray-900 h-screen overflow-y-scroll justify-center" @click="showCode">
    <div  class="w-full h-full text-gray-900 mt-32">
      <div v-if="codeView" class="p-8"><pre>{{ codeForPreview }}</pre></div>
      <iframe 
        v-else
        class="h-full bg-white dark:bg-gray-900 mx-auto"
        :class="viewWidth"
        title="Page preview"
        :onload="logShit"
        loading="lazy"
        :name="lalac"
        :srcdoc="lilas"
      />
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
import { useViewOrCode } from "@/compossable/view-mode"
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
    const { viewWidth, codeView, } = useViewOrCode()

    const codeBlock = ref('')
    const codeForPreview = ref('')
    
    const showCode = () => {
      // codeForPreview.value = codeBlock.value
      console.log('showcode')
    }

    onMounted(() => {
        codeForPreview.value = beautifyHTML(codeBlock.value.innerHTML)
    })

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
      console.log('beautify', process(codeStr))
      return process(codeStr);
    }

    const lilas = computed(() => {
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
      beautifyHTML,
      viewWidth,
      codeView,
    }
  },
}
</script>
<template>
  <div class="fixed top-0  w-full flex items-center justify-between h-12 px-5"
    :class="bgColor600"
  >
      <!-- Logo & Title -->
      <div class="flex items-center space-x-5">
        <div class="flex items-center justify-center bg-slate-100 rounded-full h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" />
          </svg>
        </div>
        <h1 class="text-white">DragBuilder</h1>
      </div>

      <!-- Preview -->

      <div class="flex items-center">
        <h3 class="text-white mr-5">Preview</h3>
        <button class="h-12 w-12 flex items-center justify-center p-1 hover:bg-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </button>
        <button class="h-12 w-12 flex items-center justify-center p-1 hover:bg-gray-600 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </button>
        <button class="h-12 w-12 flex items-center justify-center p-1 hover:bg-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
        <button class="h-12 w-12 flex items-center justify-center p-1 hover:bg-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </button>
      </div>

      <!-- Save, publish buttons -->
      <div class="flex space-x-5">
        <div class="w-full flex space-x-2 justify-between py-2 px-3 bg-slate-100 rounded-lg">
          <button 
            v-for="(uiTheme, key) in themeList" 
            :key="uiTheme" 
            class="rounded-full w-4 h-4 text-xs" 
            :class="uiTheme"
            @click="switchTheme(key)"
            :aria-label="`select ${key} uiTheme`"
          >
            <span v-if="uiTheme === `bg-${currentTheme}-500`">&#10004;</span>
          </button>
        </div>
        <button class="h-8 px-4 border border-white text-white text-sm rounded-md">Save</button>
        <button class="h-8 px-4 bg-amber-600 text-white text-sm rounded-md">Publish</button>
      </div>
    </div>
</template>
<script>
import { useTheme } from "@/compossable/theme";
import { ref, reactive, toRefs } from 'vue'

export default {
  name: 'TopBar',
  setup() {
    const currentTheme = ref('blue')
    const { bgColor600, changeTheme } = useTheme()
    let state = reactive({
      themeList: {
        blue: 'bg-blue-500',
        red: 'bg-red-500',
        orange: 'bg-orange-500',
        yellow: 'bg-yellow-500',
        indigo: 'bg-indigo-500',
        pink: 'bg-pink-500',
        purple: 'bg-purple-500',
      },
      selectedIcons: [],
    })

    const switchTheme = newTheme => {
        currentTheme.value = newTheme
        changeTheme(currentTheme.value)
    }

    return { bgColor600, currentTheme, switchTheme, ...toRefs(state) }
  }
}
</script>
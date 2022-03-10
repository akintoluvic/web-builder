<template>
  <div class="h-screen w-screen lg:overflow-x-hidden" :class="theme">
    <!-- Top Bar -->
    <TopBar />

    
    <div class="h-screen flex">
      <!-- components sidebar -->
      <div class="w-40 flex-shrink-0 max-w-60 h-screen overflow-y-scroll bg-slate-200 py-16">
        <h3 class="px-4 text-sm">Page Sections</h3>
        <div class="px-2 my-5 h-32 overflow-y-scroll">
          <div 
            class="text-xs mx-2 px-2 py-1 hover:bg-slate-100 rounded mb-1 cursor-pointer"
            v-for="(component, index) in selectedIcons"
            :key="index"
          >
            {{ component[0] }}
          </div>
        </div>
        <h3 class="px-4 text-sm border-t border-gray-400">Add new section</h3>
        <div
          v-for="(icons, type) in iconList"
          :key="type"
          class="mt-5 mx-2 px-2"
        >
          <h2 class="mb-5 text-sm">{{ type }}</h2>
          <div
            v-for="(icon, index) in icons"
            :key="index"
            class="relative shadow-md rounded mb-5 overflow-hidden hover:outline hover:outline-slate-300 cursor-pointer"
            @click="addComponent([index, type])"
            aria-labelledby="component icon button"
          >
            <component :is="icon" />
            <span v-if="!blockAvailable(type, index)" class="absolute inset-0 z-30 flex justify-center items-center text-xs bg-gray-200 bg-opacity-50 w-full h-full text-gray-900">
              <span class="text-xs">Coming soon</span>
            </span>
          </div>
        </div>
      </div>

      <!-- design preview/code -->
      <div class="flex-auto h-screen overflow-y-scroll justify-center">
        <main class="px-8 my-12 min-h-screen">
          <div v-for="(currentIcon, index) in selectedIcons" :key="index">
            <component :is="blocksList[currentIcon[1]][currentIcon[0]]"  />
          </div>
        </main>
      </div>

      <!-- customise components sidebar -->
      <div class="w-52 flex-grow-0 bg-slate-200 py-20 px-4">
        <h3 class="text-sm mb-2">Choose theme</h3>
      </div>
    </div>
  </div>
</template>

<script >
import TopBar from "@/components/builder/TopBar.vue";
import getIcons from "@/components/icons";
import getBlocks from "@/components/blocks";
import { reactive, toRefs, onMounted} from 'vue'
import { useTheme } from "@/compossable/theme"

export default {
  name: "BuilderView",
  components: {
    TopBar,
  },
  setup() {
    let state = reactive({
      iconList: null,
      blocksList: null,
      blockListArr: [],
      selectedIcons: [],
    })
    
    state.iconList = getIcons()
    state.blocksList = getBlocks()
    const { theme } = useTheme()

    onMounted(() => {
      Object.entries(state.iconList).forEach(([type, icons]) => {
        Object.keys(icons).map((name) =>
          state.blockListArr.push(`${name},${type}`)
        );
      })
    })

    const blockAvailable = (type, index) => {
      return state.blocksList[type] !== undefined && state.blocksList[type][index] !== undefined
    }
    
    const addComponent = val =>  {
      state.selectedIcons = [...state.selectedIcons, val]
    }
    
    return { addComponent, theme, ...toRefs(state), blockAvailable }
  },
};
</script>

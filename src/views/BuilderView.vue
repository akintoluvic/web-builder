<template>
  <div class="h-screen">
    <!-- Top Bar -->
    <TopBar />

    
    <div class="h-screen flex">
      <!-- components sidebar -->
      <div class="w-60 h-screen overflow-y-scroll bg-slate-200 py-20">
        <h3 class="px-8">Page Sections</h3>
        <div class="mx-2 mb-5">
          <h4 
            class="text-sm px-6"
            v-for="(component, index) in selectedIcons"
            :key="index"
          >
            {{ component[0] }}
          </h4>
        </div>
        <h3 class="px-8">Add new section</h3>
        <div
          v-for="(icons, type) in iconList"
          :key="type"
          class="mt-5 mx-2 px-6"
        >
          <h2 class="mb-5">{{ type }}</h2>
          <div
            v-for="(icon, index) in icons"
            :key="index"
            class="shadow-sm rounded mb-5 overflow-hidden hover:outline hover:outline-slate-300"
            @click="e => addComponent([index, type])"
          >
            <component :is="icon" />
          </div>
        </div>
      </div>

      <!-- design preview/code -->
      <div class="flex-auto h-screen overflow-y-scroll justify-center">
        <main class="mx-6 my-20 bg-white min-h-screen">
          <div v-for="(currentIcon, index) in selectedIcons" :key="index">
            <component :is="blocksList[currentIcon[1]][currentIcon[0]]"  />
          </div>
        </main>
      </div>

      <!-- customise components sidebar -->
      <div class="w-72 bg-white py-20 px-8">
        <h3 class="text-sm">Choose theme</h3>
        <div class="w-full flex justify-between py-2 px-3 bg-slate-100 rounded-2xl">
          <button 
            v-for="(theme, key) in themeList" 
            :key="theme" 
            class="rounded-full w-4 h-4" 
            :class="theme"
            @click="e => switchTheme(key)"
            :aria-label="`select ${key} theme`"
          ></button>
        </div>
        <div class="w-72 bg-white py-20">
          <h3 class="px-8">Customise component</h3>
          {{ selectedIcons }}
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import TopBar from "@/components/builder/TopBar.vue";
import getIcons from "@/components/icons";
import getBlocks from "@/components/blocks";
// import { useTheme,  } from "@/compossable/theme";
// import { ref } from 'vue'


export default {
  name: "BuilderView",
  components: {
    TopBar,
  },
  data() {
    return {
      iconList: getIcons(),
      blocksList: getBlocks(),
      blockListArr: [],
      currentTheme: 'green',
      themeList: {
        blue: 'bg-blue-500',
        red: 'bg-red-500',
        orange: 'bg-orange-500',
        yellow: 'bg-yellow-500',
        indigo: 'bg-indigo-500',
        pink: 'bg-pink-500',
        purple: 'bg-purple-500',
      },
      theme: 'green',
      selectedIcons: [],
    };
  },
  // setup() {
  //   const state = ref('blue')
  //   const { theme  } = useTheme()
  //   const switchTheme = newTheme => {
  //       // useSetTheme(newTheme)
  //       // console.log(this.theme)
  //       // this.theme = newTheme
  //       console.log(state)
  //       state.value = newTheme
  //       console.log(state)
  //   }
    
  //   return { state, theme, switchTheme }
  // },
  methods: {
      switchTheme(newTheme) {
          this.theme = newTheme
          console.log(this.theme)
      },
      addComponent(val) {
        this.selectedIcons = [...this.selectedIcons, val]
      }
  },
  mounted() {
    Object.entries(this.iconList).forEach(([type, icons]) => {
      Object.keys(icons).map((name) =>
        this.blockListArr.push(`${name},${type}`)
      );
    });
  },
};
</script>

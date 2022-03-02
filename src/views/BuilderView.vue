<template>
  <div class="h-screen">
    <!-- Top Bar -->
    <TopBar />

    <!-- components sidebar -->
    <div class="h-screen flex">
      <div class="w-60 h-screen overflow-y-scroll bg-slate-200 py-20">
        <h3 class="px-8">Page Title</h3>
        <div
          v-for="(icons, type) in iconList"
          :key="type"
          class="mt-5 mx-2 px-6"
        >
          <h2 class="mb-5">{{ type }}</h2>
          <div
            v-for="(icon, i) in icons"
            :key="i"
            class="shadow-sm rounded mb-5 overflow-hidden hover:outline hover:outline-slate-300"
          >
            <component :is="icon" />
          </div>
        </div>
      </div>

      <!-- design preview/code -->
      <div class="flex-auto h-screen overflow-y-scroll justify-center">
        <main class="mx-6 my-20 bg-white min-h-screen">
          <div v-for="i in 4" :key="i" >
            <component :is="blocksList.Blog.BlogB"  />
          </div>
        </main>
      </div>

      <!-- customise components sidebar -->
      <div class="w-72 bg-white py-20 px-8">
        <h3>Choose theme</h3>
        <div class="w-full flex justify-between py-2 px-3 bg-slate-100 rounded-2xl">
          <button 
            v-for="theme in themeList" 
            :key="theme[0]" 
            class="rounded-full w-4 h-4" 
            :class="theme[1]"
            @click="switchTheme(theme[0])"
            :aria-label="`${theme[0]} theme`"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/builder/TopBar.vue";
import getIcons from "@/components/icons";
import getBlocks from "@/components/blocks";

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
      theme: 'green',
      themeList: [
        ['blue', 'bg-blue-500'],
        ['red', 'bg-red-500'],
        ['orange', 'bg-orange-500'],
        ['green', 'bg-green-500'],
        ['yellow', 'bg-yellow-500'],
        ['purple', 'bg-purple-500'],
        ['pink', 'bg-pink-500'],
        ['indigo', 'bg-indigo-500'],
      ]
    };
  },
  methods: {
      switchTheme(theme) {
        console.log(theme)
          this.theme = theme
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

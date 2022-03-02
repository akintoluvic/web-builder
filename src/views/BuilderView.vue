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
          <div v-for="i in 4" :key="i" @click="switchTheme">
            <component :is="blocksList.Blog.BlogC"  />
          </div>
        </main>
      </div>

      <!-- customise components sidebar -->
      <div class="w-72 bg-white py-20">Customise</div>
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
    };
  },
  methods: {
      switchTheme() {
          this.theme = 'yellow'
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

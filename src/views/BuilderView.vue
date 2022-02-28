<template>
  <div class="h-screen">
    <!-- Top Bar -->
    <TopBar />
    <div class="h-screen flex">
      <div class="w-60 bg-slate-200 py-20">
        <h3 class=" px-8">Page Title</h3>
        <div class="mt-5 border-t border-gray-200 mx-2 px-6">
          <h2>Select Components</h2>
          <div class="shadow-sm rounded overflow-hidden">
            <component :is="blog" />  
          </div>
        </div>
      </div>
      <div class="flex-auto h-screen overflow-y-scroll justify-center">
        <main class="mx-6 my-20 bg-white min-h-screen">
          <h2>Design preview</h2>
          <div v-for="i in 4" :key="i">
            <component :is="blog" />
          </div>
        </main>
      </div>
      <div class="w-72 bg-white py-20">Customise</div>
    </div>
    
  </div>  
</template>

<script>
import TopBar from '@/components/builder/TopBar.vue'
import getIcons from '@/components/icons'

export default {
  name: 'BuilderView',
  components: {
    TopBar,
  },
  data() {
      return {
        blog: ''
      }
  },
  mounted() {
      this.blog = getIcons().Pricing.PricingB
      console.log(getIcons().Blog.BlogB)
  },
}
</script>

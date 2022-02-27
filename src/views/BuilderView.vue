<template>
  <div class="h-screen">
    <!-- Top Bar -->
    <TopBar />
    <div class="h-screen flex">
      <div class="w-60 bg-white py-20">
        <h3 class=" px-8">Page Title</h3>
        <div class="mt-5 border-t border-gray-200 mx-2 px-6">Select Components
            <component :is="blog" />
        </div>
      </div>
      <div class="flex-auto h-screen overflow-y-scroll justify-center">
        <main class="mx-6 my-20 bg-white min-h-screen">Design preview
            <component :is="blog" />
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
      this.blog = getIcons().Blog.BlogA
      console.log(getIcons().Blog.BlogA)
  },
}
</script>

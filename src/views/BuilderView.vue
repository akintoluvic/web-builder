<template>
  <div class="h-screen">
    <!-- Top Bar -->
    <TopBar />
    <div class="h-screen flex">
      <div class="w-60 bg-white py-20 px-8">Pages</div>
      <div class="flex-auto h-screen overflow-y-scroll justify-center">
        <main class="mx-6 my-20 bg-white min-h-screen">Design preview</main>
      </div>
      <div class="w-72 bg-white py-20">Customise</div>
    </div>
  </div>  
</template>

<script>
import TopBar from '@/components/builder/TopBar.vue'

export default {
  name: 'BuilderView',
  components: {
    TopBar
  }
}
</script>

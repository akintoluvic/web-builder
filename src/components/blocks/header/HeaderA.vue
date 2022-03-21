<template>
  <header class="text-gray-600 dark:text-gray-400 dark:bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href
            class="flex title-font font-medium items-center text-gray-900 dark:text-white mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="w-10 h-10 text-white p-2 bg-${props.theme}-500 rounded-full"
              :class="[theme.bgColor500]"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href class="mr-5 hover:text-gray-900 dark:hover:text-white">
              First Link
            </a>
            <a href class="mr-5 hover:text-gray-900 dark:hover:text-white">
              Second Link
            </a>
            <a href class="mr-5 hover:text-gray-900 dark:hover:text-white">
              Third Link
            </a>
            <a href class="mr-5 hover:text-gray-900 dark:hover:text-white">
              Fourth Link
            </a>
          </nav>
          <button class="inline-flex items-center bg-gray-800 dark:bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 dark:hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
</template>

<script>
import { useTheme } from "@/compossable/theme";
export default {
  data() {
    return {
      theme: useTheme(),
    }
  },

}
</script>
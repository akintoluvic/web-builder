import { ref, computed } from 'vue'

export function useTheme() {
      const theme = ref('blue')

      const themeColor = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'text-red-400'
          case 'orange':
            return 'text-orange-400'
          case 'green':
            return 'text-green-400'
          case 'yellow':
            return 'text-yellow-400'
          case 'blue':
            return 'text-blue-400'
          case 'purple':
            return 'text-purple-400'
          case 'pink':
            return 'text-pink-400'
          case 'indigo':
              return 'text-indigo-400'
            
          default:
            return `text-indigo-400`
        }
      })



  return { theme, themeColor }
}
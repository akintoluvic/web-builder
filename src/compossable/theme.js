import { ref, computed } from 'vue'

export function useTheme() {
      const theme = ref('blue')

      const textColor = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'text-red-500'
          case 'orange':
            return 'text-orange-500'
          case 'green':
            return 'text-green-500'
          case 'yellow':
            return 'text-yellow-500'
          case 'blue':
            return 'text-blue-500'
          case 'purple':
            return 'text-purple-500'
          case 'pink':
            return 'text-pink-500'
            
          default:
            return `text-indigo-500`
        }
      })

      const textBgColor = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'bg-red-50'
          case 'orange':
            return 'bg-orange-50'
          case 'green':
            return 'bg-green-50'
          case 'yellow':
            return 'bg-yellow-50'
          case 'blue':
            return 'bg-blue-50'
          case 'purple':
            return 'bg-purple-50'
          case 'pink':
            return 'bg-pink-50'
            
          default:
            return `bg-indigo-50`
        }
      })



  return { theme, textColor, textBgColor }
}


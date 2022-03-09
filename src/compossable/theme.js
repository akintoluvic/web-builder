import { ref, computed } from 'vue'
const theme = ref('blue')

export function useTheme() {
  
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
          case 'indigo':
              return 'text-indigo-500'
            
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

      const bgColor500 = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'bg-red-500'
          case 'orange':
            return 'bg-orange-500'
          case 'green':
            return 'bg-green-500'
          case 'yellow':
            return 'bg-yellow-500'
          case 'blue':
            return 'bg-blue-500'
          case 'purple':
            return 'bg-purple-500'
          case 'pink':
            return 'bg-pink-500'
            
          default:
            return `bg-indigo-500`
        }
      })
      
      const bgColor600 = computed(() => {
        switch (theme.value) {
          case 'red':
            return 'bg-red-600'
          case 'orange':
            return 'bg-orange-600'
          case 'green':
            return 'bg-green-600'
          case 'yellow':
            return 'bg-yellow-600'
          case 'blue':
            return 'bg-blue-600'
          case 'purple':
            return 'bg-purple-600'
          case 'pink':
            return 'bg-pink-600'
            
          default:
            return `bg-indigo-600`
        }
      })

      const changeTheme = newTheme => { 
        theme.value = newTheme 
      }

  return { theme, textColor, textBgColor, changeTheme, bgColor600, bgColor500 }
}


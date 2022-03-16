import { ref, computed } from "vue"
const viewType = ref('desktop')
const codeView = ref(false)

export function useViewOrCode() {
  const viewWidth = computed(() => {
    switch (viewType.value) {
      case 'desktop':
        return 'w-full'
      case 'tablet':
        return 'max-w-lg w-full'
      case 'mobile':
        return 'max-w-sm w-full'
        
      default:
        return `w-full`
    }
  })

  const setViewType = value => {
    viewType.value = value
    codeView.value = false
  }

  const toggleCodeView = () => {
    codeView.value = !codeView.value
  }

  return {
    setViewType,
    toggleCodeView,
    codeView,
    viewType,
    viewWidth
  }
}

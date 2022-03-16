import { ref, onMounted } from "vue"
const viewType = ref('desktop')
const codeView = ref(false)

export function useViewOrCode() {
  onMounted(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
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
  }
}

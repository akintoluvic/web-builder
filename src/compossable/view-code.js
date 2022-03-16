import { ref, onMounted } from "vue"
const viewType = ref('desktop')
const codeView = ref(false)

export function useViewOrCode() {
  onMounted(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  })

  const toggleViewType = () => {
    codeView.value = !codeView.value
  }

  const toggleCodeView = () => {
    codeView.value = !codeView.value
  }

  return {
    toggleViewType,
    toggleCodeView,
    codeView,
    viewType,
  }
}

import { defineComponent, h, getCurrentInstance } from 'vue'

const _that = getCurrentInstance()

export default defineComponent({
  setup() {
    console.log(_that)
    return () => h('div', { class: 'ph-header' }, '')
  }
})

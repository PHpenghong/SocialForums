import { defineComponent, h } from 'vue'
import './index.scss'

export default defineComponent({
  setup() {
    return () => h('div', { class: 'ph-layout' }, '')
  }
})

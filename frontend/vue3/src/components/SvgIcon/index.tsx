import { defineComponent, h, computed } from 'vue'
import './index.scss'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    // 使用的svg图标名称，也就是svg文件名
    name: {
      type: String,
      required: true
    },
    prefix: {
      type: String,
      default: 'icon'
    },
    size: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)

    const svgNodeObj = {
      ariaHidden: true,
      class: 'svg-icon',
      style: {
        width: props.size + 'em',
        height: props.size + 'em'
      }
    }

    const useNode = h('use', {
      xlinkHref: symbolId
    })

    return () => h('svg', svgNodeObj, useNode)
  }
})

import { inject } from "vue"

export default {
  props: ["title"],
  setup() {
    const selectedTitle = inject("selectedTitle")

    return { selectedTitle }
  },
  template: `
    <div class="tab-content" v-show="title == selectedTitle">
      <slot></slot>
    </div>
  `,
}

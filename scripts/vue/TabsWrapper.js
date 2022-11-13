import { ref, provide } from "vue"

export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title))
    const selectedTitle = ref(tabTitles.value[0])

    provide("selectedTitle", selectedTitle)

    return { selectedTitle, tabTitles }
  },
  template: `
    <div class="tab-container">
      <button 
        v-for="title in tabTitles"
        @click="selectedTitle = title"
        :class="{ active: selectedTitle == title }"
        class="tab-btn"
      >
        {{ title }}
      </button>
    </div>
    <slot></slot>
  `,
}

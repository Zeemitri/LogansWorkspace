import { createApp } from "vue"

import TabsWrapper from "./TabsWrapper.js"
import SectionTab from "./SectionTab.js"
import StoreItem from "./StoreItem.js"

const app = createApp({
  data() {
    return {
      activeTabName: "Projects",
    }
  },
  components: {
    "tabs-wrapper": TabsWrapper,
    "section-tab": SectionTab,
    "store-item": StoreItem,
  },
  methods: {
    isActive(menuItem) {
      return this.activeTabName === menuItem
    },
    setActive(tabName) {
      this.activeTabName = tabName
    },
  },
})
app.mount("#app")

import { createApp } from "vue"

import TabSystem from "./TabSystem.js"
import TabSystemTab from "./TabSystemTab.js"
import StoreItem from "./StoreItem.js"

const app = createApp({
  data() {
    return {
      activeTabName: "Projects",
    }
  },
  components: {
    "tab-system": TabSystem,
    "tab-system-tab": TabSystemTab,
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

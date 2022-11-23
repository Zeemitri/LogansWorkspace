import { createApp } from "vue"

import TabSystem from "./TabSystem.js"
import TabSystemTab from "./TabSystemTab.js"
import StoreItem from "./StoreItem.js"
import SiteFooter from "./SiteFooter.js"

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
    "site-footer": SiteFooter,
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

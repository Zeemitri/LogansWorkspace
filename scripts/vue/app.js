import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
import TabSystem from "./TabSystem.js"

const app = createApp({
  data() {
    return {
      activeTabName: "Projects",
    }
  },
  components: {
    "tab-system": TabSystem,
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

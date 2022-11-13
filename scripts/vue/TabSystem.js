import TabContent from "./TabContent.js"

export default {
  data() {
    return {
      activeTabName: "Projects",
      tabTemplates: [],
    }
  },
  components: { "tab-content": TabContent },
  props: {
    titles: Array,
  },
  methods: {
    isActive(menuItem) {
      return this.activeTabName === menuItem
    },
    setActive(tabName) {
      this.activeTabName = tabName
    },
  },
  template: `
    <div class="tab-container">
      <button 
        v-for="title in titles"
        @click="setActive(title)"
        :class="{active: isActive(title)}"
        class="tab-btn"
      >
        {{ title }}
      </button>
    </div>
    <div class="tab-content-container">
      <div
        class="projects-container tab-content"
        :class="{active: isActive('Projects')}"
      >
        <article
          class="project"
          style="background-image: url('./images/kronos_void.png')"
        >
          <h3>KronosVoid</h3>
          <a
            href="https://www.roblox.com/games/11435662668/KronosVoid"
            class="button-link"
            >View</a
          >
        </article>
        <article
          class="project"
          style="background-image: url('./images/rumble.png')"
        >
          <h3>Rumble</h3>
          <a
            href="https://www.roblox.com/games/9725919081/Rumble"
            class="button-link"
            >View</a
          >
        </article>
        <article><p>More to come soon.</p></article>
      </div>
      <div class="tab-content" :class="{active: isActive('Store')}">
        <div class="tab-container">
          <button class="tab-btn" data-for-tab="1">Rumble</button>
          <button class="tab-btn" data-for-tab="2">KronosVoid</button>
        </div>
      </div>
      <div class="tab-content" :class="{active: isActive('News')}">3</div>
    </div>
  `,
}

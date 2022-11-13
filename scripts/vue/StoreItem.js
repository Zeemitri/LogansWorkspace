export default {
  props: ["price", "name", "img", "href"],
  computed: {
    image() {
      return this.img
    },
  },
  template: `
    <article
      class="store-item"
      :style="{
        'background-image': 'url(' + img + ')'
      }"
    >
      <h3>{{ name }}</h3>
      <a class="store-button" :href="href">
        <span class="robux"></span>
        {{ price }}
      </a>
    </article>
  `,
}

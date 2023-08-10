export default {
  template: `
        <span>
            <button class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" @click="btnClickedHandler()">View</button>
        </span>
    `,
  methods: {
    btnClickedHandler() {
      this.$router.push(`/admin/schedule/${this.params.node.data.id }`)
    }
  }
}

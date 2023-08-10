export default {
  template: `
        <span>
          <v-btn
            class="text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-1"
            color="#5865f2"
            size="small"
            variant="flat"
            @click="btnClickedHandler()">
            View
          </v-btn>
        </span>
    `,
  methods: {
    btnClickedHandler() {
      this.$router.push(`/admin/schedule/${this.params.node.data.id }`)
    }
  }
}

<template>
  <div class="flex flex-wrap h-screen">
    <div class="w-full lg:w-12/12 px-4">
      <v-card class="mx-auto">
        <v-card-item class="bg-purple-darken-4">
          <v-card-title> Schedule Details</v-card-title>
        </v-card-item>
        <v-table>
          <tbody>
            <tr>
              <td>Description</td>
              <td>{{ data.event_description }}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td><strong>{{ $filters.dateFormat(data.created_at) }}</strong></td>
            </tr>
            <tr>
              <td>Start Time</td>
              <td><strong>{{ $filters.getTime(data.event_date_start) }}</strong></td>
            </tr>
            <tr>
              <td>End Time</td>
              <td><strong>{{ $filters.getTime(data.event_date_end) }}</strong></td>
            </tr>
            <tr>
              <td>Reference Code</td>
              <td><strong>{{ data.reference_number }}</strong></td>
            </tr>
            <tr class="highlighted">
              <td><strong>Doctor, Best</strong></td>
              <td>Patient</td>
            </tr>
            <tr>
              <td><strong>Manager, Account</strong></td>
              <td>Patient</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </div>
  </div>
</template>
<script>
// import CardProfile from "@/components/Cards/CardProfile.vue";

export default {
  props: ['details'],
  components: {
    // CardProfile,
  },
  data() {
    return { 
      data: {}
    }
  },
  mounted() {
    this.data = JSON.parse(this.$route.query.details);
    console.log(JSON.parse(this.$route.query.details));
  }
};
</script>

<style>
.shadule-list .shadule-title {
  margin-bottom: 15px;
}
.shadule-list .shadule-title h2 {
  font-size: 20px;
  color: #000;
}
.list-items ul li {
  display: flex;
  justify-content: space-between;
  padding: 3px 0;
}
.list-items ul li.hightlited {
  background: #ddd;
  padding: 3px 5px;
}
</style>
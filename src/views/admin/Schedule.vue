<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4">
      <v-card class="mx-auto">
        <v-card-item class="bg-purple-darken-4">
          <v-card-title> Schedule Details</v-card-title>
        </v-card-item>
        <v-table>
          <tbody>
            <tr>
              <td>Description</td>
              <td>This albo ought to appear tomorrow</td>
            </tr>
            <tr>
              <td>Date</td>
              <td><strong>9/1/2021</strong></td>
            </tr>
            <tr>
              <td>Start Time</td>
              <td><strong>4:30 AM</strong></td>
            </tr>
            <tr>
              <td>End Time</td>
              <td><strong>5: 30 AM</strong></td>
            </tr>
            <tr>
              <td>Referance Code</td>
              <td><strong>12341234</strong></td>
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
  components: {
    // CardProfile,
  },
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
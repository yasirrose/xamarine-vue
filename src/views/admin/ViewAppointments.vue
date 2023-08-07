<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4">
      <appointment-table />
    </div>
    <div class="w-full lg:w-4/12 px-4">
      <!-- <CardProfile /> -->
    </div>
  </div>
</template>
<script>
// import CardSettings from "@/components/Cards/CardSettings.vue";
import AppointmentTable from "@/components/Cards/AppointmentTable.vue";

// import CardProfile from "@/components/Cards/CardProfile.vue";

export default {
  components: {
    AppointmentTable,
    // CardProfile,
  },
};
</script>

<template>
  <div class="flex flex-wrap h-screen">
    <div class="w-full lg:w-12/12 px-4">
      <survey-table />
    </div>
  </div>
</template>
<script>
import SurveyTable from "@/components/Cards/SurveyTable.vue";

export default {
  components: {
    SurveyTable,
  },
};
</script>

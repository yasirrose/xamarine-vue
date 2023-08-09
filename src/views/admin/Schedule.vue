<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4">
      <div class="shadule-list">
          <div class="shadule-title">
              <h2>Schedule</h2>
          </div>
          <div class="list-items">
            <ul>
              <li>
                <p>Discription</p>
                <p><strong>This albo ought to appear tomorrow</strong></p>
              </li>
              <li>
                <p>Date</p>
                <p><strong>9/1/2021</strong></p>
              </li>
              <li>
                <p>Start Time</p>
                <p><strong>4:30 AM</strong></p>
              </li>
              <li>
                <p>End Time</p>
                <p><strong>5: 30 AM</strong></p>
              </li>
              <li>
                <p>Referance Code</p>
                <p><strong>12341234</strong></p>
              </li>
              <li class="hightlited">
                <p><strong>Doctor, Best</strong></p>
                <p>Patient</p>
              </li>
              <li>
                <p><strong>Manager, Account</strong></p>
                <p>Patient</p>
              </li>
            </ul>
          </div>
      </div>
    </div>
    <div class="w-full lg:w-4/12 px-4">
      <!-- <CardProfile /> -->
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
    color: blue;
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
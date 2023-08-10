<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4">
      <div class="shadule-list">
          <div class="shadule-title">
            <div class="arrow-link">
                <a href="#"><i class="fas fa-angle-left"></i> <span>Schedule</span></a>
            </div>
            <h2>New Event</h2>
          </div>
          <div class="survey-form">
            <ScheduleForm />
          </div>
          <div class="survey-time">
            <TimeCheck />
            <TimeCheck />
          </div>
          <div class="toggle-sec">
            <p>Is this a survey event?</p>
            <ToggleSlider />
          </div>
          <div class="search-patients">
            <form>
                <div class="input-field">
                    <input type="text" placeholder="Search Patients">
                </div>
            </form>
            <v-table>
                <tbody>
                    <tr>
                        <td><strong>Doctor, Best</strong></td>
                        <td>Patient</td>
                    </tr>
                    <tr class="highlighted">
                        <td><strong>Nurse, Awesome</strong></td>
                        <td>Patient</td>
                    </tr>
                    <tr>
                        <td><strong>Manager, Account</strong></td>
                        <td>Patient</td>
                    </tr>
                </tbody>
                </v-table>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleForm from "@/components/ScheduleForm.vue";
import TimeCheck from "@/components/TimeCheck.vue";
import ToggleSlider from "@/components/ToggleSlider.vue";
    export default {
        components: {
            ScheduleForm,
            TimeCheck,
            ToggleSlider
        },
    };
</script>

<style>
.shadule-list .shadule-title {
  margin-bottom: 15px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.shadule-list .shadule-title h2 {
    font-size: 20px;
    color: #000;
    font-weight: 600;
    margin: 0 auto;
}
.shadule-list .shadule-title .arrow-link a {
    color: blue;
    font-size: 16px;
}
.shadule-list .shadule-title .arrow-link a i {
    font-size: 20px;
    font-weight: 600;
}
.shadule-list .shadule-title .arrow-link a span {
    margin-left: 5px;
}
tr.highlighted {
    background: #ddd;
}
table td{
    border: 0;
}
.search-patients input {
    width: 100%;
    border: 1px solid #ddd;
    outline: none;
    height: 37px;
    padding: 0 10px;
    box-shadow: none;
    background: #fff;
}
.search-patients .input-field {
    margin-bottom: 15px;
}
</style>
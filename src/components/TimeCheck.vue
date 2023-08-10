<template>
  <div class="date-field">
    <Datepicker v-model="date" time-picker />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
// import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

 export default {
        components: {
            Datepicker
        },
        data() {
            return {
            date: null,
            };
        }
    };

</script>
<style>
    .survey-time {
        display: flex;
        flex-wrap: wrap;
    }
    .survey-time .date-field {
        margin-right: 10px;
        width: 20%;
    }
</style>
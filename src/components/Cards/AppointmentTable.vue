<template>
  <div class="appointments-sec">
    <h3>Appointments</h3>
    <ag-grid-vue
      style="width: 100%; height: 500px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData">
    </ag-grid-vue>
  </div>
</template>
<script>
// import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

import bootstrap from "@/assets/img/bootstrap.jpg";
import angular from "@/assets/img/angular.jpg";
import sketch from "@/assets/img/sketch.jpg";
import react from "@/assets/img/react.jpg";
import vue from "@/assets/img/react.jpg";

import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";

export default {
  data() {
    return {
      columnDefs: [
        { headerName: "Discription", field: "disc" },
        { headerName: "Date", field: "date" },
        { headerName: "Start Time", field: "starttime" },
        { headerName: "End Time", field: "endtime" },
        { headerName: "Referance Code", field: "referance" },
        { headerName: "Action", field: "action" },
      ],
      rowData: [
        { disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
      ],
      bootstrap,
      angular,
      sketch,
      react,
      vue,
      team1,
      team2,
      team3,
      team4,
    };
  },
  components: {
    // TableDropdown,
    AgGridVue,
  },
  props: {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

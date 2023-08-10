<template>
  <div class="appointments-sec">
    <v-card>
      <template v-slot:title> Appointments </template>

      <!-- <template v-slot:subtitle>
        This is a subtitle
      </template> -->

      <template v-slot:text>
        <ag-grid-vue
            style="width: 100%; height: 500px"
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :rowData="rowData"
        >
        </ag-grid-vue>
      </template>
    </v-card>
  </div>
</template>
<script>
/* eslint-disable vue/no-unused-components */
import { AgGridVue } from "ag-grid-vue3";
import BtnCellRenderer from "./btn-cell-renderer.js";

export default {
  components: {
    btnCellRenderer: BtnCellRenderer,
    AgGridVue,
  },
  data() {
    return {
      columnDefs: [
        { headerName: "id", field: "id", hide: true },
        { headerName: "Discription", field: "disc" },
        { headerName: "Date", field: "date" },
        { headerName: "Start Time", field: "starttime" },
        { headerName: "End Time", field: "endtime" },
        { headerName: "Referance Code", field: "referance" },
        {
          headerName: "Action",
          field: "action",
          cellRenderer: "btnCellRenderer",
          cellRendererParams: {
            clicked: function (field) {
              alert(`${field} was clicked`);
            },
          },
        },
      ],
      rowData: [
        {
          id: 1,
          disc: "This albo ought to appear tomorrow",
          date: "9/1/2021",
          starttime: "4:30 AM",
          endtime: "5: 30 AM",
          referance: 12341234,
          action: "Action",
        },
        {
          id: 1,
          disc: "This albo ought to appear tomorrow",
          date: "9/1/2021",
          starttime: "4:30 AM",
          endtime: "5: 30 AM",
          referance: 12341234,
          action: "Action",
        },
        {
          id: 1,
          disc: "This albo ought to appear tomorrow",
          date: "9/1/2021",
          starttime: "4:30 AM",
          endtime: "5: 30 AM",
          referance: 12341234,
          action: "Action",
        },
        {
          id: 1,
          disc: "This albo ought to appear tomorrow",
          date: "9/1/2021",
          starttime: "4:30 AM",
          endtime: "5: 30 AM",
          referance: 12341234,
          action: "Action",
        },
        {
          id: 1,
          disc: "This albo ought to appear tomorrow",
          date: "9/1/2021",
          starttime: "4:30 AM",
          endtime: "5: 30 AM",
          referance: 12341234,
          action: "Action",
        },
        {
          id: 1,
          disc: "This albo ought to appear tomorrow",
          date: "9/1/2021",
          starttime: "4:30 AM",
          endtime: "5: 30 AM",
          referance: 12341234,
          action: "Action",
        },
        {
          id: 1,
          disc: "This albo ought to appear tomorrow",
          date: "9/1/2021",
          starttime: "4:30 AM",
          endtime: "5: 30 AM",
          referance: 12341234,
          action: "Action",
        },
        {
          id: 1,
          disc: "This albo ought to appear tomorrow",
          date: "9/1/2021",
          starttime: "4:30 AM",
          endtime: "5: 30 AM",
          referance: 12341234,
          action: "Action",
        },
        {
          id: 1,
          disc: "This albo ought to appear tomorrow",
          date: "9/1/2021",
          starttime: "4:30 AM",
          endtime: "5: 30 AM",
          referance: 12341234,
          action: "Action",
        },
        {
          id: 1,
          disc: "This albo ought to appear tomorrow",
          date: "9/1/2021",
          starttime: "4:30 AM",
          endtime: "5: 30 AM",
          referance: 12341234,
          action: "Action",
        },
        {
          id: 1,
          disc: "This albo ought to appear tomorrow",
          date: "9/1/2021",
          starttime: "4:30 AM",
          endtime: "5: 30 AM",
          referance: 12341234,
          action: "Action",
        },
        {
          id: 1,
          disc: "This albo ought to appear tomorrow",
          date: "9/1/2021",
          starttime: "4:30 AM",
          endtime: "5: 30 AM",
          referance: 12341234,
          action: "Action",
        },
      ],
    };
  },
  props: {
    color: {
      default: "light",
      validator: function (value) {
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },
};

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
</script>

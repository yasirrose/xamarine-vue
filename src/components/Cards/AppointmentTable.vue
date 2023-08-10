<template>
  <div class="appointments-sec">
    <h3>Appointments</h3>
    <div style="width: 100%; flex: 1 1 auto;">
      <ag-grid-vue
      style="width: 100%; height: 500px"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData">
      </ag-grid-vue>
    </div>
  </div>
</template>
<script>
/* eslint-disable vue/no-unused-components */
import { AgGridVue } from "ag-grid-vue3";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import BtnCellRenderer from './btn-cell-renderer.js';

export default {
  components: {
    btnCellRenderer: BtnCellRenderer,
    AgGridVue,
  },
  data() {
    return {
      columnDefs: [
        { headerName: "id", field: "id", hide: true},
        { headerName: "Discription", field: "disc" },
        { headerName: "Date", field: "date" },
        { headerName: "Start Time", field: "starttime" },
        { headerName: "End Time", field: "endtime" },
        { headerName: "Referance Code", field: "referance" },
        { headerName: "Action", field: "action", cellRenderer: 'btnCellRenderer',
        cellRendererParams: {
          clicked: function(field) {
            alert(`${field} was clicked`);
          }
        }, },
      ],
      rowData: [
        { id: 1, disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { id: 1, disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { id: 1, disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { id: 1, disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { id: 1, disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { id: 1, disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { id: 1, disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { id: 1, disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { id: 1, disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { id: 1, disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { id: 1, disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
        { id: 1, disc: "This albo ought to appear tomorrow", date: "9/1/2021", starttime: "4:30 AM", endtime: "5: 30 AM", referance: 12341234, action: "Action" },
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
</script>

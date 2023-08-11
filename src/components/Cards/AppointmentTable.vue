<template>
  <div class="appointments-sec">
    <v-card>
      <template v-slot:title> Appointments </template>

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
import API from '@/api'

export default {
  components: {
    btnCellRenderer: BtnCellRenderer,
    AgGridVue,
  },
  data() {
    return {
      columnDefs: [
        { headerName: "id", field: "id", hide: true },
        { headerName: "Description", field: "description", width: "540px"},
        { headerName: "created_at", field: "created_at", dataType: 'DateTime', valueFormatter: (params) => this.dateFormat(params), },
        // { headerName: "Start Time", field: "starttime" },
        // { headerName: "End Time", field: "endtime" },
        { headerName: "Reference Code", field: "slug" },
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
      rowData: [],
    //   rowData: [
    //     {
    //       id: 1,
    //       description: "This albo ought to appear tomorrow",
    //       created_at: "9/1/2021",
    //       starttime: "4:30 AM",
    //       endtime: "5: 30 AM",
    //       slug: 12341234,
    //       action: "Action",
    //     },
    //     {
    //       id: 1,
    //       description: "This albo ought to appear tomorrow",
    //       created_at: "9/1/2021",
    //       starttime: "4:30 AM",
    //       endtime: "5: 30 AM",
    //       slug: 12341234,
    //       action: "Action",
    //     },
    //     {
    //       id: 1,
    //       description: "This albo ought to appear tomorrow",
    //       created_at: "9/1/2021",
    //       starttime: "4:30 AM",
    //       endtime: "5: 30 AM",
    //       slug: 12341234,
    //       action: "Action",
    //     },
    //     {
    //       id: 1,
    //       description: "This albo ought to appear tomorrow",
    //       created_at: "9/1/2021",
    //       starttime: "4:30 AM",
    //       endtime: "5: 30 AM",
    //       slug: 12341234,
    //       action: "Action",
    //     },
    //     {
    //       id: 1,
    //       description: "This albo ought to appear tomorrow",
    //       created_at: "9/1/2021",
    //       starttime: "4:30 AM",
    //       endtime: "5: 30 AM",
    //       slug: 12341234,
    //       action: "Action",
    //     },
    //     {
    //       id: 1,
    //       description: "This albo ought to appear tomorrow",
    //       created_at: "9/1/2021",
    //       starttime: "4:30 AM",
    //       endtime: "5: 30 AM",
    //       slug: 12341234,
    //       action: "Action",
    //     },
    //     {
    //       id: 1,
    //       description: "This albo ought to appear tomorrow",
    //       created_at: "9/1/2021",
    //       starttime: "4:30 AM",
    //       endtime: "5: 30 AM",
    //       slug: 12341234,
    //       action: "Action",
    //     },
    //     {
    //       id: 1,
    //       description: "This albo ought to appear tomorrow",
    //       created_at: "9/1/2021",
    //       starttime: "4:30 AM",
    //       endtime: "5: 30 AM",
    //       slug: 12341234,
    //       action: "Action",
    //     },
    //     {
    //       id: 1,
    //       description: "This albo ought to appear tomorrow",
    //       created_at: "9/1/2021",
    //       starttime: "4:30 AM",
    //       endtime: "5: 30 AM",
    //       slug: 12341234,
    //       action: "Action",
    //     },
    //     {
    //       id: 1,
    //       description: "This albo ought to appear tomorrow",
    //       created_at: "9/1/2021",
    //       starttime: "4:30 AM",
    //       endtime: "5: 30 AM",
    //       slug: 12341234,
    //       action: "Action",
    //     },
    //     {
    //       id: 1,
    //       description: "This albo ought to appear tomorrow",
    //       created_at: "9/1/2021",
    //       starttime: "4:30 AM",
    //       endtime: "5: 30 AM",
    //       slug: 12341234,
    //       action: "Action",
    //     },
    //     {
    //       id: 1,
    //       description: "This albo ought to appear tomorrow",
    //       created_at: "9/1/2021",
    //       starttime: "4:30 AM",
    //       endtime: "5: 30 AM",
    //       slug: 12341234,
    //       action: "Action",
    //     },
    //   ],
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
  methods: {
    dateFormat: function (params) {
        var date = new Date(params.value);
        var day = date.getDate().toString().padStart(2, '0');
        var month = (date.getMonth() + 1).toString().padStart(2, '0');
        var year = date.getFullYear().toString().substring(2);
        return day + '/' + month + '/' + year;
    }
  },
  mounted() {
    API.getAppointments(
        data => {
            console.log(data)
            if (data.length > 0) {
                this.rowData = data;
            }
        },
        err => {
            console.log('err :', err);
        }
    )
  },
};

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
</script>
<style>
  .appointments-sec h3 {
    margin-bottom: 15px;
  }
</style>

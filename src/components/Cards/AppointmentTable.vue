<template>
  <div class="appointments-sec">
    <v-card>
      <template v-slot:title>
        <div class="w-full clearfix">
          <div class="float-left">Appointments</div>
          <div class="float-right">
            <v-btn
                class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-1"
                size="small"
                @click="addNewAppointment()">
                Add New
            </v-btn>
          </div>
        </div>

      </template>

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
        { headerName: "Description", field: "event_description", width: "540px"},
        { headerName: "created_at", field: "created_at", dataType: 'DateTime', valueFormatter: (params) => this.$filters.stringToDate(params), },
        { headerName: "Reference Code", field: "reference_number" },
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
    addNewAppointment() {
      this.$router.push('/admin/create-appointment');
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

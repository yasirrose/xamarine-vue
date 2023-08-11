import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import VueSweetalert2 from 'vue-sweetalert2';
import moment from 'moment'
// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";
import 'sweetalert2/dist/sweetalert2.min.css';

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import ViewAppointments from "@/views/admin/ViewAppointments.vue";
import CreateSurvey from "@/views/admin/CreateSurvey.vue";
import Schedule from "@/views/admin/Schedule.vue";
import CreatAppoinment from "@/views/admin/CreatAppoinment.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
// import Index from "@/views/Index.vue";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/view-appointments",
        component: ViewAppointments,
      },
      {
        path: "/admin/CreatAppoinment",
        component: CreatAppoinment,
      },
      {
        path: "/admin/schedule/:id",
        name: "Schedule",
        component: Schedule,
        props: true
      },
      {
        path: "/admin/createsurvey",
        component: CreateSurvey,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  // {
  //   path: "/",
  //   component: Index,
  // },
  { path: "/:pathMatch(.*)*", redirect: "/auth/login" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App)



app.use(router);

app.use(VueSweetalert2);

app.use(vuetify);

app.mount('#app');

app.config.globalProperties.$filters = {
  dateFormat(value) {
    if (value) {
      return moment(String(value)).format('MM/DD/YYYY')
    }
  },
  getTime(value) {
    if (value) {
      return moment(String(value)).format("hh:mm a")
    }
  }
}
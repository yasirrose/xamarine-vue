import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import VueSweetalert2 from 'vue-sweetalert2';
import moment from 'moment'
import { VueSignaturePad } from "vue-signature-pad";
import Toggle from '@vueform/toggle'
import PinchScrollZoom from '@coddicat/vue-pinch-scroll-zoom';

// import { createPinia } from 'pinia';
// import { useAuthStore } from '@/stores';
// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";
import 'sweetalert2/dist/sweetalert2.min.css';
import '@coddicat/vue-pinch-scroll-zoom/style.css';

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import ViewAppointments from "@/views/admin/ViewAppointments.vue";
import CreateSurvey from "@/views/admin/CreateSurvey.vue";
import ViewSurveys from "@/views/admin/ViewSurveys.vue";
import Schedule from "@/views/admin/Schedule.vue";
import CreateAppointment from "@/views/admin/CreateAppointment.vue";
import PatientPin from "@/views/admin/PatientPin.vue";
import PatientInputPin from "@/views/admin/PatientInputPin.vue";
import Disclaimer from "@/views/admin/Disclaimer.vue";
import FemaleImage from "@/views/admin/FemaleImage.vue";
import SessionComplete from "@/views/admin/SessionComplete.vue";
import MaleImage from "@/views/admin/MaleImage.vue";
import Signature from "@/views/admin/Signature.vue";
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

// const pinia = createPinia()
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
        path: "/admin/patient-pin",
        component: PatientPin,
      },
      {
        path: "/patient/enter-pin",
        component: PatientInputPin,
      },
      {
        path: "/patient/disclaimer",
        component: Disclaimer,
      },
      {
        path: "/admin/create-appointment",
        component: CreateAppointment,
      },
      {
        path: "/admin/female-image",
        component: FemaleImage,
      },
      {
        path: "/admin/male-image",
        component: MaleImage,
      },
      {
        path: "/admin/session-complete",
        component: SessionComplete,
      },
      {
        path: "/admin/signature",
        component: Signature,
      },
      {
        path: "/admin/schedule/:id",
        name: "Schedule",
        component: Schedule,
        props: true
      },
      {
        path: "/admin/view-surveys",
        component: ViewSurveys,
      },
      {
        path: "/admin/create-survey",
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

// router.beforeEach(async (to) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/auth/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();

//   if (authRequired && !auth.user) {
//     // auth.returnUrl = to.fullPath;
//     return '/auth/login';
//   }
// });

const app = createApp(App)

app.use(router);

app.use(VueSweetalert2);

app.use(vuetify);

// app.use(pinia);

app.component("VueSignaturePad", VueSignaturePad);

app.component("Toggle", Toggle);

app.component("PinchScrollZoom", PinchScrollZoom);

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
  },
  stringToDate(params) {
    if (params) {
      var date = new Date(params.value);
      var day = date.getDate().toString().padStart(2, '0');
      var month = (date.getMonth() + 1).toString().padStart(2, '0');
      var year = date.getFullYear().toString().substring(2);
      return day + '/' + month + '/' + year;
    }
  }
}
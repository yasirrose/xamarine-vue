<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <header-stats />
      <div class="px-4 md:px-10 mx-auto w-full">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>

import Sidebar from "@/components/Sidebar/Sidebar.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";

export default {
  name: "admin-layout",
  components: {
    HeaderStats,
    FooterAdmin,
    Sidebar,
    AdminNavbar
  },
};
</script>

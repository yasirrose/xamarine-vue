<template>
  <div>
    <section class="page_404">
        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-10 col-sm-offset-1 text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center">404</h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <router-link to="/admin/dashboard" class="link_404">
                    <button>Go to Home</button>
                </router-link>
              </div>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  data() {
    return {
    };
  },
  components: {
  },
};
</script>

<style>
.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo", serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url('../../public/dribbble_1.gif');
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  margin-top: -50px;
}
</style>
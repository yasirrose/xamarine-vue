<template>
<!-- <nav> -->
  <!-- <div class="navbar"> -->
    <!-- <i class='bx bx-menu'></i> -->
    <!-- <div class="logo"><a href="#">Logo</a></div> -->
    <div class="nav-links">
      <!-- <div class="sidebar-logo">
        <span class="logo-name">Logo</span>
        <i class='bx bx-x' ></i>
      </div> -->
      <ul class="links">
        <!-- <li><a href="#">HOME</a></li> -->
        <li>
          <!-- <a href="#">HTML & CSS</a> -->
          <!-- <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i> -->
          <ul class="htmlCss-sub-menu sub-menu bg-purple-darken-4">
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Login Forms</a></li>
            <li><a href="#">Card Design</a></li>
            <li class="more">
              <span><a href="#">More</a>
                <img src="../../../public/Iconsax/Svg/Category/Arrow/vuesax/linear/arrow-right.svg" class='bx bxs-chevron-right arrow more-arrow logo'>
              </span>
              <ul class="more-sub-menu sub-menu bg-purple-darken-4">
                <li><a href="#">Neumorphism</a></li>
                <li><a href="#">Pre-loader</a></li>
                <li><a href="#">Glassmorphism</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <!-- <li>
          <a href="#">JAVASCRIPT</a>
          <i class='bx bxs-chevron-down js-arrow arrow '></i>
          <ul class="js-sub-menu sub-menu">
            <li><a href="#">Dynamic Clock</a></li>
            <li><a href="#">Form Validation</a></li>
            <li><a href="#">Card Slider</a></li>
            <li><a href="#">Complete Website</a></li>
          </ul>
        </li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">CONTACT US</a></li> -->
      </ul>
    </div>
    <!-- <div class="search-box">
      <i class='bx bx-search'></i>
      <div class="input-box">
        <input type="text" placeholder="Search...">
      </div>
    </div> -->
  <!-- </div> -->
<!-- </nav> -->
</template>

<script>
import useVuelidate from '@vuelidate/core'
// import { required, sameAs } from '@vuelidate/validators'
// import API from '@/api'

export default {
    components: {},
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            fileMenuItems: [
                {
                    name: "Menu Item 1",
                    action: () => {
                    console.log("menu-item-1");
                    }
                },
                { isDivider: true },
                { name: "Menu Item 2" },
                {
                    name: "Sub 1",
                    menu: [
                    { name: "1.1" },
                    { name: "1.2" },
                    {
                        name: "Sub-menu 2",
                        menu: [
                        { name: "2.1" },
                        { name: "2.2" },
                        {
                            name: "Sub-menu 3",
                            menu: [
                            { name: "3.1" },
                            { name: "3.2" },
                            {
                                name: "Sub-menu 4",
                                menu: [{ name: "4.1" }, { name: "4.2" }, { name: "4.3" }]
                            }
                            ]
                        }
                        ]
                    }
                    ]
                },

                { name: "Menu Item 3" },
                { isDivider: true },
                {
                    name: "Menu Item 4",
                    action: () => {
                    console.log("menu-item-4");
                    }
                },
                {
                    name: "Menu Item 5",
                    action: () => {
                    console.log("menu-item-5");
                    }
                }
            ]
        }
    },
    // validations() {
    //     return {
    //         form: {},
    //     }
    // },
    mounted() {},
    methods: {
        async submit() {
            const result = await this.v$.$validate()
            if (result) {
                // this.saveAppointment()
            } else return
        },
        emitClickEvent(item) {
            this.$emit("dan-menu-click", item);
            this.openMenu = false;
        },
        onMenuItemClick(item) {
        console.log(`onMenuItemClick(), item=${item}`);
        if (item.action) {
            item.action();
        }
        }
    }
};
</script>

<style>
</style>

<style src="@vueform/multiselect/themes/default.css"></style>

<style src="@vueform/toggle/themes/default.css"></style>

<style>
/* Googlefont Poppins CDN Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  min-height: 100vh;
}
/* nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 70px;
  background: #3E8DA8;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  z-index: 99;
} */
/* nav {
  height: 100%;
  max-width: 1250px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  background: red;
  padding: 0 50px;
} */
 .logo a{
  font-size: 30px;
  /* color: #fff; */
  text-decoration: none;
  font-weight: 600;
}
  .nav-links{
  line-height: 70px;
  height: 100%;
}
  .links{
  display: flex;
}
  .links li{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0 14px;
}
  .links li a{
  height: 100%;
  text-decoration: none;
  white-space: nowrap;
  /* color: #fff; */
  font-size: 15px;
  font-weight: 500;
}
.links li:hover .htmlcss-arrow,
.links li:hover .js-arrow{
  transform: rotate(180deg);
  }

  .links li .arrow{
  /* background: red; */
  height: 100%;
  width: 22px;
  line-height: 70px;
  text-align: center;
  display: inline-block;
  /* color: #fff; */
  transition: all 0.3s ease;
}
  .links li .sub-menu{
  /* position: absolute; */
  /* top: 70px; */
  left: 0;
  line-height: 40px;
  /* background: #3E8DA8; */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 4px 4px;
  /* display: none; */
  z-index: 2;
}
  .links li:hover .htmlCss-sub-menu,
  .links li:hover .js-sub-menu{
  display: block;
}
 .links li .sub-menu li{
  padding: 0 22px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
 .links li .sub-menu a{
  /* color: #fff; */
  font-size: 15px;
  font-weight: 500;
}
 .links li .sub-menu .more-arrow{
  line-height: 40px;
  /* filter: #fff; */
}
 .links li .htmlCss-more-sub-menu{
  /* line-height: 40px; */
}
 .links li .sub-menu .more-sub-menu{
  position: absolute;
  top: 0;
  left: 100%;
  border-radius: 0 4px 4px 4px;
  z-index: 1;
  display: none;
}
.links li .sub-menu .more:hover .more-sub-menu{
  display: block;
}
 .search-box{
  position: relative;
   height: 40px;
  width: 40px;
}
 .search-box i{
  position: absolute;
  height: 100%;
  width: 100%;
  line-height: 40px;
  text-align: center;
  font-size: 22px;
  /* color: #fff; */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
 .search-box .input-box{
  position: absolute;
  right: calc(100% - 40px);
  top: 80px;
  height: 60px;
  width: 300px;
  background: #3E8DA8;
  border-radius: 6px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease;
}
.showInput .search-box .input-box{
  top: 65px;
  opacity: 1;
  pointer-events: auto;
  background: #3E8DA8;
}
.search-box .input-box::before{
  content: '';
  position: absolute;
  height: 20px;
  width: 20px;
  background: #3E8DA8;
  right: 10px;
  top: -6px;
  transform: rotate(45deg);
}
.search-box .input-box input{
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  height: 35px;
  width: 280px;
  outline: none;
  padding: 0 15px;
  font-size: 16px;
  border: none;
}
 .nav-links .sidebar-logo{
  display: none;
}
 .bx-menu{
  display: none;
}
@media (max-width:920px) {
  /* nav {
    max-width: 100%;
    padding: 0 25px;
  }

  nav  .logo a{
    font-size: 27px;
  } */
  .links li{
    padding: 0 10px;
    white-space: nowrap;
  }
  .links li a{
    font-size: 15px;
  }
}
@media (max-width:800px){
   .bx-menu{
    display: block;
  }
    .nav-links{
    position: fixed;
    top: 0;
    left: -100%;
    display: block;
    max-width: 270px;
    width: 100%;
    background:  #3E8DA8;
    line-height: 40px;
    padding: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
    z-index: 1000;
  }
   .nav-links .sidebar-logo{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sidebar-logo .logo-name{
    font-size: 25px;
    /* color: #fff; */
  }
    .sidebar-logo  i,
     .bx-menu{
      font-size: 25px;
      /* color: #fff; */
    }
    .links{
    display: block;
    margin-top: 20px;
  }
    .links li .arrow{
    line-height: 40px;
  }
  .links li{
    display: block;
  }
  .links li .sub-menu{
  position: relative;
  top: 0;
  box-shadow: none;
  display: none;
}
  .links li .sub-menu li{
  border-bottom: none;

}
 .links li .sub-menu .more-sub-menu{
  display: none;
  position: relative;
  left: 0;
}
 .links li .sub-menu .more-sub-menu li{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.links li:hover .htmlcss-arrow,
.links li:hover .js-arrow{
  transform: rotate(0deg);
  }
   .links li .sub-menu .more-sub-menu{
    display: none;
  }
   .links li .sub-menu .more span{
    /* background: red; */
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
  }

  .links li .sub-menu .more:hover .more-sub-menu{
    display: none;
  }
    .links li:hover .htmlCss-sub-menu,
    .links li:hover .js-sub-menu{
    display: none;
  }
 .nav-links.show1 .links .htmlCss-sub-menu,
   .nav-links.show3 .links .js-sub-menu,
   .nav-links.show2 .links .more .more-sub-menu{
      display: block;
    }
     .nav-links.show1 .links .htmlcss-arrow,
     .nav-links.show3 .links .js-arrow{
        transform: rotate(180deg);
}
     .nav-links.show2 .links .more-arrow{
      transform: rotate(90deg);
    }
}
.logo {
  fill: white !important;
}
@media (max-width:370px){
    .nav-links{
  max-width: 100%;
} 
}

</style>
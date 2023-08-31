<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <!-- <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="github" />
                Github
              </button>
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" /> -->
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <!-- <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div> -->
            <form @submit.prevent="onSubmit">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  v-model = "form.email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
                {{ email }}
                <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
                    <div class="text-red-500 text-xs italic">{{ error.$message }}</div>
                </div>
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  v-model = "form.password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
                {{ password }}
                <div class="input-errors" v-for="(error, index) of v$.form.password.$errors" :key="index">
                    <div class="text-red-500 text-xs italic">{{ error.$message }}</div>
                </div>
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    v-model="rememberMe"
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    Remember me
                  </span>
                </label>
                {{ rememberMe }}
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="login()"
                >
                <a href="javascript:void(0)">
                  Sign In
                </a>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <!-- <div class="w-1/2">
            <a href="javascript:void(0)" class="text-blueGray-200">
              <small>Forgot password?</small>
            </a>
          </div> -->
          <!-- <div class="w-1/2 text-right">
            <router-link to="/auth/register" class="text-blueGray-200">
              <small>Create new account</small>
            </router-link>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import github from "@/assets/img/github.svg";
// import google from "@/assets/img/google.svg";
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useAuthStore } from '@/stores';
import { createToast } from 'mosha-vue-toastify';
import API from '@/api'

export default {
  data() {
    return {
        //   github,
        //   google,
        form: {
            email: 'account@voilamed.com',
            password: '123456',
            rememberMe: false,
        }
    };
  },
  setup() {
    const authStore = useAuthStore();
    return { 
        authStore,
        v$: useVuelidate()
    };
  },
  validations() {
        return {
            form: {
                email: {
                    required,
                    email
                },
                password: {
                    required,
                },
            },
        }
    },
  methods: {
    async login() {
        const result = await this.v$.$validate()
            if (result) {

        const data = {
            email: this.form.email,
            password: this.form.password,
            rememberMe: this.form.rememberMe
        }
        API.login(
            data,
            data => {
                console.log(data)
                    if (data.id) {
                        this.authStore.user = JSON.stringify(data)
                        this.$router.push("/admin/dashboard");
                        createToast({
                                title: 'Logged in Successfully',
                        },
                        {
                            type: 'success',
                        })
                    } else {
                        this.authStore.user = ''
                        this.$swal({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Invalid Credentials!',
                        })
                    }
                },
                err => {
                    this.authStore.user = ''
                    this.$swal({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Invalid Credentials!',    
                    })
                    console.log('err :', err);
            }
        )
    }
    }
  }
};
</script>

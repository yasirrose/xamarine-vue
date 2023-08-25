<template>
    <div class="flex flex-wrap h-screen">
        <div class="w-full lg:w-12/12 px-4">
            <v-card>
                <template v-slot:title>
                    <div class="w-full clearfix">
                        <div class="float-left">Patient Pin</div>
                        <div class="float-right">
                            <v-btn
                                class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-1"
                                size="small"
                                @click="$router.go(-1)">
                                Go Back
                            </v-btn>
                        </div>
                    </div>
                </template>

                <template v-slot:text>
                    <form class="w-full max-w-lg" @submit.prevent="onSubmit">
                        <div class="flex flex-wrap -mx-3 mb-6 float-center" style="height:400px;vertically-align:middle">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-center">
                                <div class="text-center">Send this pin to your patient and press continue</div>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white text-center mb-3" v-model="form.pin" id="grid-first-name" type="text" placeholder="Enter Event Name" :disabled="true">
                                <span v-if="timer > 0">{{ timer }}</span>
                            </div>
                        </div>
                        <div class="float-right">
                            <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-6" size="small" :disabled="timer > 0" @click="goToEnterPin">
                                Submit
                            </v-btn>
                        </div>
                    </form>
                </template>
            </v-card>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, sameAs } from '@vuelidate/validators'
import API from '@/api'

export default {
    components: {
    },
    setup() {
        return { v$: useVuelidate() }
    },
    computed: {},
    data() {
        return {
            users: [],
            options: ['list', 'of', 'options'],
            timer: 10,
            form: {
                pin:  Math.floor(Math.random()*900) + 1000,
            },
        }
    },
    validations() {
        return {
            form: {
                pin: {
                    required,
                },
            },
            timer: {
                checked: sameAs(0)
            }
        }
    },
    mounted() {
        setInterval(() => {
            if(this.timer > 0) {
                this.counterHandler();
            }
        }, 1000)
        this.getUsers()
    },
    methods: {
        getUsers() {
            API.getUsers(
                data => {
                    console.log(data)
                    if (data.length > 0) {
                        this.users = data;
                    }
                },
                err => {
                    console.log('err :', err);
                }
            )
        },
        saveAppointment() {
            API.saveAppointment(
                this.form,
                data => {
                    this.users = data;
                },
                err => {
                    console.log('err :', err);
                }
            )
        },
        async goToEnterPin() {
            const result = await this.v$.$validate()
            if (result) {
                this.$router.push({ path: `/patient/enter-pin`})
            } else return
        },
        counterHandler() {
            this.timer--;
        }   
    }
};
</script>

<style>
.shadule-list .shadule-title {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.shadule-list .shadule-title h2 {
    font-size: 20px;
    color: #000;
    font-weight: 600;
    margin: 0 auto;
}

.shadule-list .shadule-title .arrow-link a {
    color: blue;
    font-size: 16px;
}

.shadule-list .shadule-title .arrow-link a i {
    font-size: 20px;
    font-weight: 600;
}

.shadule-list .shadule-title .arrow-link a span {
    margin-left: 5px;
}

tr.highlighted {
    background: #ddd;
}

table td {
    border: 0;
}

.search-patients input {
    width: 100%;
    border: 1px solid #ddd;
    outline: none;
    height: 37px;
    padding: 0 10px;
    box-shadow: none;
    background: #fff;
}

.search-patients .input-field {
    margin-bottom: 15px;
}

.survey-time {
    display: flex;
    flex-wrap: wrap;
}

.survey-time .date-field {
    margin-right: 10px;
    width: 20%;
}
</style>

<style src="@vueform/multiselect/themes/default.css"></style>
<style src="@vueform/toggle/themes/default.css"></style>
<template>
    <div class="flex flex-wrap h-screen">
        <div class="w-full lg:w-12/12 px-4">
            <v-card>
                <template v-slot:title>
                    <div class="w-full clearfix">
                        <div class="float-left">Add New Survey</div>
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
                        <div class="flex flex-wrap -mx-3 mb-3">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-survey-title">
                                    Survey Title
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" v-model="form.surveyTitle" id="grid-survey-title" type="text" placeholder="Enter Survey Title">
                                <div class="input-errors" v-for="(error, index) of v$.form.surveyTitle.$errors" :key="index">
                                    <div class="text-red-500 text-xs italic">{{ error.$message }}</div>
                                </div>
                            </div>
                            <!-- <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Event Slug
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="form.eventSlug" id="grid-last-name" type="text" placeholder="Enter Event Slug">
                                <div class="input-errors" v-for="(error, index) of v$.form.eventSlug.$errors" :key="index">
                                    <div class="text-red-500 text-xs italic">{{ error.$message }}</div>
                                </div>
                            </div> -->
                        </div>
                        <!-- <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Event Description
                                </label>
                                <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="form.eventDesc" id="grid-password" type="password" placeholder="Enter Your Description"></textarea>
                                <div class="input-errors" v-for="(error, index) of v$.form.eventDesc.$errors" :key="index">
                                    <div class="text-red-500 text-xs italic">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Start Time
                                </label>
                                <div class="date-field">
                                    <Datepicker v-model="form.startDate" time-picker />
                                </div>
                                <div class="input-errors" v-for="(error, index) of v$.form.startDate.$errors" :key="index">
                                    <div class="text-red-500 text-xs italic">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    End Time
                                </label>
                                <div class="date-field">
                                    <Datepicker v-model="form.endDate" time-picker />
                                </div>
                                <div class="input-errors" v-for="(error, index) of v$.form.endDate.$errors" :key="index">
                                    <div class="text-red-500 text-xs italic">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div> -->
                        <div class="flex flex-wrap -mx-3 mb-2 px-3 toggle-sec items-center items-end">
                            <p>Body Part: Any Body Part</p>
                            <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs ml-2" size="small" @click="changeBodyType">
                                Change
                            </v-btn>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2 px-3 toggle-sec">
                            <p>Status</p>
                            <Toggle v-model="form.isSurveyEvent" />
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <QuestionAnswerComponent />
                            </div>
                        </div>
                        <div class="float-right">
                            <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-6" size="small" :disabled="v$.form.$invalid" @click="submit">
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
// import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
// import Multiselect from '@vueform/multiselect'
import useVuelidate from '@vuelidate/core'
import Toggle from '@vueform/toggle'
import { required, minLength } from '@vuelidate/validators'
import QuestionAnswerComponent from "@/components/QuestionAnswerComponent.vue";
import API from '@/api'

export default {
    components: {
        // Datepicker,
        // Multiselect,
        Toggle,
        QuestionAnswerComponent
    },
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            users: [],
            options: ['list', 'of', 'options'],
            form: {
                surveyTitle: null,
                eventSlug: null,
                eventDesc: null,
                startDate: null,
                endDate: null,
                isSurveyEvent: false,
                participantUserIds: [],
            }
        }
    },
    validations() {
        return {
            form: {
                surveyTitle: {
                    required,
                },
                eventSlug: {
                    required,
                    min: minLength(6)
                },
                eventDesc: {
                    required,
                    min: minLength(6)
                },
                startDate: {
                    required,
                },
                endDate: {
                    required,
                },
                participantUserIds: {
                    required
                }
            },
        }
    },
    mounted() {
        // this.getUsers()
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
                    // console.log(data)
                    // if (data.length > 0) {
                        this.users = data;
                    // }
                },
                err => {
                    console.log('err :', err);
                }
            )
        },
        async submit() {
            const result = await this.v$.$validate()
            if (result) {
                this.saveAppointment()
            } else return
        },
        changeBodyType() {
            console.log('changeBodyType');
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
.toggle-sec {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
}
</style>

<style src="@vueform/multiselect/themes/default.css"></style>
<style src="@vueform/toggle/themes/default.css"></style>
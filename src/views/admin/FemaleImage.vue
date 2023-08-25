<template>
    <div class="flex flex-wrap h-screen">
        <div class="w-full lg:w-12/12 px-4">
            <v-card>
                <form class="w-full max-w-lg mt-4" @submit.prevent="onSubmit">
                    <div class="flex flex-wrap -mx-3 mb-6 float-center text-center">
                        <div class="md:w-1/2 px-3 mb-12 md:mb-0 text-center float-center">
                            <!-- <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white text-center mb-3" v-model="form.pin" id="grid-first-name" type="text"> -->
                            <PinchScrollZoom
                                ref="zoomer"
                                :width="600"
                                :height="850"
                                within
                                :min-scale="0.3"
                                :max-scale="6"
                                @scaling="e => onEvent('scaling', e)"
                                @startDrag="e => onEvent('startDrag', e)"
                                @stopDrag="e => onEvent('stopDrag', e)"
                                @dragging="e => onEvent('dragging', e)"
                                style="border: 1px solid black; background:#000"
                                :content-width="1000"
                                :content-height="1000"
                            >
                                <img src="../../../public/Resources/wholeFemale.png" alt="Female" width="500" height="400">
                            </PinchScrollZoom>
                        </div>
                        <div class="md:w-1/2 px-3 mb-12 md:mb-0 text-center float-center">
                            <SurveyMenu />
                        </div>
                    </div>
                    <div class="float-right">
                        <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-6" size="small" @click="submit">
                            Continue
                        </v-btn>
                    </div>
                </form>
            </v-card>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import SurveyMenu  from './SurveyMenu'
import { required } from '@vuelidate/validators'
import API from '@/api'

export default {
    components: {
        SurveyMenu
    },
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            users: [],
            options: ['list', 'of', 'options'],
            form: {
                pin: null,
            }
        }
    },
    validations() {
        return {
            form: {
                pin: {
                    required,
                },
            },
        }
    },
    mounted() {
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
                // notify user form is invalid
                this.saveAppointment()
            } else return
            // perform async actions
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
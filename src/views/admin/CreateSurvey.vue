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
                    <v-divider class="border-opacity-100" color="info"></v-divider>
                    <form class="w-full max-w-lg mt-4" @submit.prevent="onSubmit">
                        <div class="flex flex-wrap -mx-3 mb-3">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-survey-title">
                                    Survey Title
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" v-model="form.surveyTitle" id="grid-survey-title" type="text" placeholder="Enter Survey Title">
                                {{ form.surveyTitle }}
                                <div class="input-errors" v-for="(error, index) of v$.form.surveyTitle.$errors" :key="index">
                                    <div class="text-red-500 text-xs italic">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2 px-3 toggle-sec items-center items-end">
                            <p>Body Part: Any Body Part</p>
                            <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs ml-2" size="small" @click="changeBodyType">
                                Change
                            </v-btn>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2 px-3 toggle-sec">
                            <p>Status</p>
                            <Toggle v-model="form.status" />
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <div>
                                    <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-6" size="small" @click="addQuestion">
                                    <i class="fas fa-plus"></i> Add Question
                                    </v-btn>
                                    <!-- <button @click="addQuestion"><i class="fas fa-plus"></i> Add Question</button> -->
                                    <div class="que-field mx-auto mt-5 space-y-5" v-for="(question, index) in form.questions" :key="index">
                                    <div class="flex justify-between img-wrap">
                                        <strong class="text-xl align-center cursor-pointer alert-del close" @click="spliceQuestion(index)">&times;</strong>
                                        <div class="container border-solid border-2 border-indigo-600 border-radius-5 mt-2 text-center custom" style="">
                                        <h2>Question {{ index+1 }}:</h2>
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white mb-3 mt-2" id="question.id" type="text"  v-model="question.text" placeholder="Enter question">
                                        <div class="ans-field flex" v-for="(answer, aIndex) in question.answers" :key="aIndex">
                                            <span class="m-3"><h1>{{ aIndex+1 }}.</h1></span>
                                            <input class="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white mb-3 mr-3" id="answer" type="text" v-model="answer.text" placeholder="Enter answer">
                                            <v-btn class="bg-red text-none text-white font-bold font-bold uppercase text-xs mr-1 mt-3" size="small" @click="removeAnswer(index, aIndex)">
                                                <i class="fas fa-minus"></i>
                                            </v-btn>
                                        </div>
                                        <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-6" size="small" @click="addAnswer(index)">
                                            <i class="fas fa-plus"></i> Add Answer
                                        </v-btn>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="float-right">
                            <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-6" size="small" @click="submit">
                                <!-- :disabled="v$.form.$invalid"  -->
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
import '@vuepic/vue-datepicker/dist/main.css';
import useVuelidate from '@vuelidate/core'
import Toggle from '@vueform/toggle'
import { required, minLength, sameAs } from '@vuelidate/validators'
import API from '@/api'

export default {
    components: {
        Toggle,
    },
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            form: {
                surveyTitle: '',
                status: false,
                questions: []
            }
        }
    },
    validations() {
        return {
            form: {
                surveyTitle: {
                    required,
                    min: minLength(6)
                },
                status: sameAs(true)
            },
        }
    },
    mounted() {
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
            console.log('this.form :', this.form);
            const result = await this.v$.$validate()
            console.log('this.v$.$validate() :', result);
            if (result) {
                // this.saveAppointment()
            } else return
        },
        changeBodyType() {
            console.log('changeBodyType');
        },
        addQuestion() {
            this.form.questions.push({ text: "", answers: [] });
        },
        spliceQuestion(i) {
            this.form.questions.splice(i, 1);
        },
        addAnswer(questionIndex) {
            this.form.questions[questionIndex].answers.push({ text: "" });
        },
        removeAnswer(q, a) {
            this.form.questions[q].answers.splice(a, 1);
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
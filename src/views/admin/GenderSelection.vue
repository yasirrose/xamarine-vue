<template>
    <div class="flex flex-wrap h-screen">
        <div class="w-full lg:w-12/12 px-4">
            <v-card>
                <template v-slot:title>
                    <div class="w-full clearfix">
                        <div class="">Survey Selection</div>
                    </div>
                </template>

                <template v-slot:text>
                    <form class="w-full max-w-lg mt-4" @submit.prevent="onSubmit">                            
                        <v-tabs
                            v-model="tab"
                            color="deep-purple-accent-4"
                            align-tabs="center"
                            >
                            <v-tab v-for="tab in tabs" v-bind:key="tab">{{ tab }}</v-tab>
                        </v-tabs>
                        <!-- <component v-bind:is="currentTabComponent" class="tab"></component> -->
                        <v-row class="mt-4">
                            <v-col cols="12" md="7">
                                <v-window v-model="tab">
                                    <v-window-item>
                                        <v-container fluid>
                                            <v-row>
                                                <MaleImage v-bind:is="tab"/>
                                            </v-row>
                                        </v-container>
                                    </v-window-item>
                                    <v-window-item>
                                        <v-container fluid>
                                            <v-row>
                                                <FemaleImage v-bind:is="tab"/>
                                            </v-row>
                                        </v-container>
                                    </v-window-item>
                                </v-window>
                            </v-col>
                            <v-col cols="4" md="4">
                                <SurveyMenu />
                                <!-- <SelectedSurveys class="mt-4" v-if="attemptedSurveys"/> -->
                                <SelectedSurveys class="mt-4" />
                            </v-col>
                        </v-row>
                    </form>
                </template>
            </v-card>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import MaleImage from './MaleImage'
import FemaleImage  from './FemaleImage'
import SurveyMenu  from './SurveyMenu'
import SelectedSurveys  from './SelectedSurveys'
import API from '@/api'

export default {
    components: {
        SurveyMenu,
        MaleImage,
        FemaleImage,
        SelectedSurveys
    },
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            tab: 0,
            tabs: ["Male", "Female"],
            options: ['list', 'of', 'options'],
            questionsVerified: true,
            form: {
                pin: null,
            },
            // attemptedSurveys: false
        }
    },
    validations() {
        return {
            form: {
                pin: {
                    required,
                },
            }
        }
    },
    mounted() {
        // this.getUsers()
        if(this.$route.query) {
            // this.attemptedSurveys = this.$route.query.completed;
        }
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
        async submit() {
            const result = await this.v$.$validate()
            if (result) {
                this.saveAppointment()
            } else return
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
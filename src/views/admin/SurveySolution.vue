<template>
    <div class="flex flex-wrap h-screen">
        <div class="w-full lg:w-12/12 px-4">
            <v-card>
                <template v-slot:title>
                    <div class="container w-full clearfix flex justify-between">
                        <div class="">Survey Solution</div>
                        <div class="float-right">
                            <v-btn
                                class="bg-red text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-1"
                                size="small"
                                @click="$router.push('/admin/view-appointments')">
                                Abort
                            </v-btn>
                        </div>
                    </div>
                </template>
                
                <template v-slot:text>
                    <v-divider class="border-opacity-100" color="info"></v-divider>
                    <form class="w-full max-w-lg mt-4" @submit.prevent="onSubmit">
                        <v-divider></v-divider>
                        <section id="app" class="hero is-warning is-fullheight">
                            <!--heroBody-->
                            <div class="hero-body">
                            <div class="container is-fluid">
                                <div class="columns is-centered is-marginless is-paddingless box">
                                    <!-- <div class="column is-5 sidebar">
                                        <div class="sidebarContainer">
                                        <div class="tags is-marginless">
                                            <span class="tag is-medium is-rounded">#vuejs</span>
                                            <span class="tag is-medium is-rounded">#js</span>
                                        </div>
                                        <h1 class="title is-2">vueQuiz</h1>
                                        <h2 class="subtitle is-5">A simple VueJS based quiz page.</h2>
                                        <p class="subtitle is-6 has-text-justified">Created using <em>VueJs</em>, <em>Bulma</em>, <em>animate.css</em>, and <em>Font Awesome 4</em>.</p>
                                        </div>
                                        <div class="sidebarFooter">
                                        <p>Photo by <a href="https://unsplash.com/@debidiemski">Deborah Diem</a></p>
                                        </div>
                                    </div> -->
                                    <div class="column is-7 questionBox is-paddingless is-marginless">
                                        <!-- <transition enter-active-class="animated jackInTheBox" leave-active-class="animated zoomOut" mode="out-in">
                                            <div v-if="!quizStarted" v-bind:key="quizStarted" class="quizForm">
                                                <div class="titleContainer">
                                                    <h2 class="title is-4">Getting Started</h2>
                                                </div>
    
                                                <div class="quizFormContainer">
                                                    <div class="field">
                                                        <div class="field-label is-normal is-size-5">
                                                        <label class="label">Name</label>
                                                        </div>
                                                        <div class="control">
                                                        <input class="input is-rounded" type="text" v-model="quiz.user" placeholder="Enter your name" required>
                                                        </div>
                                                    </div>
                                                    <div class="field">
                                                        <div class="field-label is-normal is-size-5">
                                                        <label class="label">Difficulty</label>
                                                        </div>
                                                    
                                                    <div class="control">
                                                    <label class="radio">
                                                        <input type="radio" name="0" checked>
                                                        Easy
                                                    </label>
                                                    <label class="radio">
                                                        <input type="radio" name="1">
                                                        Medium
                                                    </label>
                                                        <label class="radio">
                                                        <input type="radio" name="2">
                                                        Hard
                                                    </label>
                                                    </div>
                                                    </div>
                                                    <a class="pagination-previous button is-medium is-info is-rounded is-outlined is-pulled-right" @click="quizStarted=!quizStarted" style="margin-bottom:12px">
                                                        Start
                                                    </a>
                                                </div>
                                            </div>
                                        </transition> -->
                                        <transition enter-active-class="animated jackInTheBox" leave-active-class="animated zoomOut" mode="out-in">
                                            <div class="questionContainer" v-if="questionIndex<quiz.questions.length && quizStarted" v-bind:key="questionIndex">
                                                <div class="titleContainer">
                                                    <h2 class="title is-5">{{questionIndex+1}}. {{ quiz.questions[questionIndex].Text }}</h2>
                                                </div>
    
                                                <div class="optionContainer">
                                                    <div class="option" v-for="(response, index) in quiz.questions[questionIndex].Answers" @click="selectOption(index)" :class="{ 'is-selected': userResponses[questionIndex] == index}" :key="index">
                                                        {{ index+1 }}. {{ response.Text }}
                                                    </div>
                                                </div>
    
                                                <div class="questionFooter">
                                                    <nav class="pagination is-centered justify-space-between flex" role="navigation" aria-label="pagination">
                                                        <!-- <a class="pagination-previous button is-info is-rounded is-outlined" v-on:click="prev();" :disabled="questionIndex < 1">
                                                            Previous Question
                                                        </a> -->
                                                            <v-btn
                                                                class="text-none pagination-previous"
                                                                color="#3298dc"
                                                                theme="dark"
                                                                variant="flat"
                                                                rounded
                                                                v-on:click="prev();" :disabled="questionIndex < 1"
                                                            >
                                                                Previous Question
                                                            </v-btn>
                                                            <v-btn
                                                                class="text-none pagination-previous"
                                                                color="#3298dc"
                                                                theme="dark"
                                                                variant="flat"
                                                                rounded
                                                                v-on:click="next();" :disabled="questionIndex>=quiz.questions.length"
                                                            >
                                                                {{ (userResponses[questionIndex]==null)?'Skip':'Next' }} Question
                                                            </v-btn>
                                                        <!-- <a class="pagination-next button is-info is-rounded" v-on:click="next();" :disabled="questionIndex>=quiz.questions.length">
                                                            {{ (userResponses[questionIndex]==null)?'Skip':'Next' }} Question
                                                        </a> -->
                                                    </nav>
                                                    <div class="progressContainer">
                                                        <v-progress-linear :height="12" :model-value="(questionIndex/quiz.questions.length)*100" :buffer-value="(questionIndex/quiz.questions.length)*100" color="green"></v-progress-linear>
                                                        <!-- <Progress size="md" :progress="(questionIndex/quiz.questions.length)*100" max="100">{{(questionIndex/quiz.questions.length)*100}}%</Progress> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </transition>
                                        <transition enter-active-class="animated jackInTheBox" leave-active-class="animated zoomOut" mode="out-in">

                                            <div v-if="questionIndex >= quiz.questions.length && quizStarted" v-bind:key="questionIndex" class="quizCompleted has-text-centered">
                                                <span class="icon is-large has-text-success">
                                                    <i class="fa fa-check-circle-o fa-3x"></i>
                                                </span>
                                                <h2 class="title">
                                                    Survey Completed. Please submit 
                                                </h2>
                                                <!-- <p class="subtitle">
                                                    Total score: {{ score() }} / {{ quiz.questions.length }}
                                                </p> -->
                                            </div>
                                        </transition>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </section>
                    </form>
                    <div class="float-right">
                        <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-6" size="small" @click="submit">
                            Submit
                        </v-btn>
                    </div>
                </template>
            </v-card>
        </div>
    </div>
</template>

<script>
var quiz = {
      user: "Dave",
      questions: []
   },
   userResponseSkelaton = Array(quiz.questions.length).fill(null);


import useVuelidate from '@vuelidate/core'
// import { useAuthStore } from '../../stores/auth.store';
// import { Progress } from 'flowbite-vue'
import { useSurveyStore } from "@/stores";
import API from '@/api'
import { required } from '@vuelidate/validators';

export default {
    components: {
        // Progress
    },
    setup() {
        const surveyStore = useSurveyStore();
        return {
            surveyStore,
            v$: useVuelidate()
        }
    },
    data() {
        return {
            quiz: quiz,
            questionIndex: 0,
            userResponses: userResponseSkelaton,
            quizStarted: true,
            isActive: false,
            form: {
                id: this.$route.params.id
            },
            selectedSurvey: ''
        }
    },
    filters: {
      charIndex: function(i) {
        return String.fromCharCode(97 + i);
      }
   },
    validations() {
        return {
            form: {
                id: required,
            },
        }
    },
    mounted() {
        this.getQuestions();
    },
    methods: {
        selectOption: function(index) {
            // this.$set(this.userResponses, this.questionIndex, index);
            this.userResponses[this.questionIndex] = index
        },
        next: function() {
            if (this.questionIndex < this.quiz.questions.length)
            this.questionIndex++;
        },

        prev: function() {
            if (this.quiz.questions.length > 0) this.questionIndex--;
        },
        score: function() {
            var score = 0;
            for (let i = 0; i < this.userResponses.length; i++) {
                if (
                typeof this.quiz.questions[i].Answers[
                    this.userResponses[i]
                ] !== "undefined" &&
                this.quiz.questions[i].Answers[this.userResponses[i]].correct
                ) {
                score = score + 1;
                }
            }
            return score;
            //return this.userResponses.filter(function(val) { return val }).length;
        },
        async submit() {
            const result = await this.v$.$validate()
            if (result) {
                this.surveyStore.addNewSurvey(this.selectedSurvey);
                this.$router.push({ path: '/admin/signature'})
            } else return
        },
        getQuestions() {
            API.getSurvey(
                this.form.id,
                data => {
                    if(data.questions.length) {
                        this.selectedSurvey = data;
                        this.quiz.questions = JSON.parse(data.questions);
                    }
                },
                err => {
                    console.log('err :', err);
                }
            )
        },
    }
};
</script>

<style lang="scss">
$trans_duration: 0.3s;
$titleBg: #29c5dc;

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

body {
   font-family: "Open Sans", sans-serif;
   font-size: 14px;

   /* mocking native UI */
   cursor: default !important; /* remove Text selection cursor */
   user-select: none; /* remove Text selection */
   user-drag: none; /* disbale element dragging */
}

.button {
   transition: $trans_duration;
}
.title,
.subtitle {
   font-family: Montserrat, sans-serif;
   font-weight: normal;
}
.animated {
   transition-duration: $trans_duration/2;
}

.sidebar {
   background: url("https://source.unsplash.com/RVF0ngUujks");
   background-size: cover;

   border-radius: 6px 0px 0px 6px;
   z-index: 10;
	
   .sidebarContainer {
      padding: 10px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);

      .tag {
         background: rgba(255, 255, 255, 0.25);
         color: rgba(255, 255, 255, 0.8);
      }

      .title {
         color: white !important;
      }
      .subtitle {
         color: rgba(255, 255, 255, 0.8) !important;
      }
   }
   .sidebarFooter {
      display: none;
      color: red;
   }
}

.questionBox {
   height: 100%;
   position: relative;
   display: flex;

   .titleContainer {
      background: #4a148c;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 12px;

      h2 {
         color: white;
         padding: 18px;
      }
   }

   .quizForm {
      display: block;
      white-space: normal;

      height: 100%;
      width: 100%;

      .quizFormContainer {
         height: 100%;
         margin: 15px 18px;

         .field-label {
            text-align: left;
            margin-bottom: 0.5rem;
         }
      }
   }
   .quizCompleted {
      width: 100%;
      padding: 25px;
   }
   .questionContainer {
      white-space: normal;

      height: 100%;
      width: 100%;

      .optionContainer {
         margin-top: 12px;
         flex-grow: 1;
         .option {
            border-radius: 290486px;
            padding: 9px 18px;
            margin: 0 18px;
            margin-bottom: 12px;
            transition: $trans_duration;
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.05);
            border: transparent 1px solid;

            &.is-selected {
               border-color: #209cee;
               background-color: white;
            }
            &:hover {
               background-color: rgba(0, 0, 0, 0.1);
            }
            &:active {
               transform: scaleX(0.9);
            }
         }
      }

      .questionFooter {
         width: 100%;
         align-self: flex-end;

         .pagination {
            //padding: 10px 15px;
            margin: 15px 25px;
         }
         .progressContainer {
            margin: 15px 25px;
         }
      }
   }
}
@media screen and (min-width: 769px) {
   .container {
      height: 100%;

      .columns {
         height: 100%;

         .column {
            height: 100%;
         }
      }
   }

   .sidebar {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }
   .questionBox {
      align-items: center;
      justify-content: center;

      .questionContainer {
         display: flex;
         flex-direction: column;
      }
   }
}

.pagination-previous {
    background-color: #3298dc;
    border-color: transparent;
    color: #fff;
}

@media screen and (max-width: 768px) {
   .sidebar {
      height: auto !important;
      border-radius: 6px 6px 0px 0px;
   }
}

</style>

<style src="@vueform/multiselect/themes/default.css"></style>
<style src="@vueform/toggle/themes/default.css"></style>
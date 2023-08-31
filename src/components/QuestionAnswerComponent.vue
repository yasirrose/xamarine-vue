<!-- QuestionAnswerComponent.vue -->
<template>
  <div>
    <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-6" size="small" @click="addQuestion">
      <i class="fas fa-plus"></i> Add Question
    </v-btn>
    <!-- <button @click="addQuestion"><i class="fas fa-plus"></i> Add Question</button> -->
    <div class="que-field mx-auto mt-5 space-y-5" v-for="(question, index) in questions" :key="index">
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
</template>

<script>
// import useVuelidate from '@vuelidate/core'
// import { required } from '@vuelidate/validators'

export default {
    data() {
        return {
        questions: []
        };
    },
    // setup() {
    //     return { v2$: useVuelidate() }
    // },
  methods: {
    addQuestion() {
      this.questions.push({ text: "", answers: [] });
    },
    spliceQuestion(i) {
      this.questions.splice(i, 1);
    },
    addAnswer(questionIndex) {
      this.questions[questionIndex].answers.push({ text: "" });
    },
    removeAnswer(q, a) {
      this.questions[q].answers.splice(a, 1);
    }
  },
//   validations() {
//         return {
//             questions: {
//                 required
//             },
//         }
//     },
};
</script>
<style scoped>
.img-wrap {
    position: relative;
}
.img-wrap .close {
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 10em;
  padding: 3px 6px 1px;
  text-decoration: none;
  font: 700 21px/20px sans-serif;
  background: #555;
  border: 3px solid #fff;
  color: #FFF;
  box-shadow: 0 2px 6px rgba(0,0,0,0.5), inset 0 2px 4px rgba(0,0,0,0.3);
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  -webkit-transition: background 0.5s;
  transition: background 0.5s;
}
</style>
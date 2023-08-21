<!-- QuestionAnswerComponent.vue -->
<template>
  <div>
    <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-6" size="small" @click="addQuestion">
      <i class="fas fa-plus"></i> Add Question
    </v-btn>
    <!-- <button @click="addQuestion"><i class="fas fa-plus"></i> Add Question</button> -->
    <div class="que-field" v-for="(question, index) in questions" :key="index">
      <div class="out">
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white mb-3" id="question.id" type="text"  v-model="question.text" placeholder="Enter question">
        <!-- <button @click="addAnswer(index)"><i class="fas fa-plus"></i> Add Answer</button> -->
        <div class="ans-field" v-for="(answer, aIndex) in question.answers" :key="aIndex">
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white mb-3" id="answer" type="text" v-model="answer.text" placeholder="Enter answer">
        </div>
        <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-6" size="small" @click="addAnswer(index)">
          <i class="fas fa-plus"></i> Add Answer
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: []
    };
  },
  methods: {
    addQuestion() {
      this.questions.push({ text: "", answers: [] });
    },
    addAnswer(questionIndex) {
      this.questions[questionIndex].answers.push({ text: "" });
    }
  }
};
</script>

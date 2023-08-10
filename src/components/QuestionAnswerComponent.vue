<!-- QuestionAnswerComponent.vue -->
<template>
  <div>
    <button @click="addQuestion"><i class="fas fa-plus"></i> Add Question</button>
    <div class="que-field" v-for="(question, index) in questions" :key="index">
      <input v-model="question.text" placeholder="Enter question">
      <button @click="addAnswer(index)"><i class="fas fa-plus"></i> Add Answer</button>
      <div class="ans-field" v-for="(answer, aIndex) in question.answers" :key="aIndex">
        <input v-model="answer.text" placeholder="Enter answer">
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

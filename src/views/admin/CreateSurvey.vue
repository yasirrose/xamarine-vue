<template>
  <div class="flex flex-wrap">
    <div class="w-full lg:w-12/12 px-4">
      <div class="shadule-list">
          <div class="shadule-title">
            <div class="arrow-link">
                <a href="#"><i class="fas fa-angle-left"></i> <span>Surveys</span></a>
            </div>
            <h2>Survey Editor</h2>
          </div>
          <div class="survey-content">
              <div class="toggle-sec">
                <p>Enabled</p>
                <!-- <ToggleSlider /> -->
              </div>
              <ul>
                  <li><p>Body parts: Any Body Part <a href="#">Change</a></p></li>
                  <li><p>Timestamp: Thursday, August 3, 2023 8:35 PM</p></li>
              </ul>
              <div class="que-ans-listing">
                  <QuestionAnswerComponent />
              </div>
          </div>
      </div>
    </div>
    <div class="w-full lg:w-4/12 px-4">
      <!-- <CardProfile /> -->
    </div>
  </div>
</template>
<script>

// import ToggleSlider from "@/components/ToggleSlider.vue";
import QuestionAnswerComponent from "@/components/QuestionAnswerComponent.vue";


export default {
  components: {
    // ToggleSlider,
    QuestionAnswerComponent
  },
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
.list-items ul li {
    display: flex;
    justify-content: space-between;
    padding: 3px 0;
}
.list-items ul li.hightlited {
  background: #ddd;
  padding: 3px 5px;
}
.toggle-sec {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
}
.toggle-sec p {
    margin-right: 5px;
}
.survey-content {
    text-align: right;
}
.survey-content ul li p {
    margin-bottom: 5px;
}
.que-ans-listing button {
    outline: none;
    color: blue;
    margin-bottom: 10px;
}
.que-field input {
    display: block;
    width: 100%;
    outline: none;
    height: 37px;
    padding: 0 10px;
    color: #000;
    margin-bottom: 10px;
    background: #fff;
}
</style>
import { defineStore } from 'pinia';

export const useSurveyStore = defineStore({
    id: 'survey',
    state: () => ({
        attemptedSurveys: [],
    }),
    getters: {
        getAttemptedSurveys: (state) => {
            return state.attemptedSurveys
        },
    },
    persist: true,
    actions: {
        addNewSurvey(data) {
            // var check = this.attemptedSurveys.filter(function(elem) {
            //     if(elem.Name == "Power") return elem.Value;
            // });
            // if(check.length > 0) {
                this.attemptedSurveys.push(data);
            // }
        }
    }
});
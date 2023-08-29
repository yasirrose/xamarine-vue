<template>
    <div class="flex flex-wrap h-screen">
        <div class="w-full lg:w-12/12 px-4">
            <v-card>
                <template v-slot:title>
                    <div class="w-full clearfix">
                        <div class="text-center">HIPPA DDisclaimer</div>
                        <!-- <div class="float-right">
                            <v-btn
                                class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-1"
                                size="small"
                                @click="$router.go(-1)">
                                Go Back
                            </v-btn>
                        </div> -->
                    </div>
                </template>

                <template v-slot:text>
                    <form class="w-full max-w-lg" @submit.prevent="onSubmit">
                        <div class="flex flex-wrap -mx-3 mb-6 float-center" style="height:400px;vertically-align:middle">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-center">
                                <!-- <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white text-center mb-3" v-model="form.pin" id="grid-first-name" type="text"> -->
                                <div class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2 px-3 toggle-sec">
                            <p>I have read the disclaimer above</p>
                            <Toggle v-model="form.readDisclaimer" />
                        </div>
                        <div class="float-right">
                            <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-6" size="small" :disabled="v$.form.$invalid" @click="submit">
                                Continue
                            </v-btn>
                        </div>
                    </form>
                </template>
            </v-card>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, sameAs } from '@vuelidate/validators'
// import API from '@/api'

export default {
    components: {
    },
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            form: {
                readDisclaimer: false
            }
        }
    },
    validations() {
        return {
            form: {
                readDisclaimer: {
                    required,
                    checked: sameAs(true),
                },
            },
        }
    },
    mounted() {},
    methods: {
        async submit() {
            const result = await this.v$.$validate()
            if (result) {
                this.$router.push({ path: '/admin/gender-selection'})
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
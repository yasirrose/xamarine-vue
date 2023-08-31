<template>
    <div class="flex flex-wrap h-screen">
        <div class="w-full lg:w-12/12 px-4">
            <v-card>
                <template v-slot:title>
                    <div class="w-full clearfix">
                        <div class="text-center">Sign</div>
                    </div>
                </template>

                <template v-slot:text>
                    <form class="w-full max-w-lg" @submit.prevent="onSubmit">
                        <div class="flex flex-wrap -mx-3 mb-6 float-center text-center">
                            <div class="w-full md:w-1/2 px-3 mb-12 md:mb-0 text-center float-center">
                                <!-- <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white text-center mb-3" v-model="form.pin" id="grid-first-name" type="text"> -->
                                <div class="container">
                                    <div class="container">
                                    <VueSignaturePad
                                        id="signature"
                                        width="100%"
                                        height="500px"
                                        ref="signaturePad"
                                        :options="options"
                                    />
                                    </div>
                                    <div class="buttons">
                                        <v-btn class="bg-purple-darken-4 text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-1" color="#5865f2" size="small" variant="flat" @click="undo()">Undo</v-btn>
                                        <v-btn class="bg-purple-darken-4 text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-1" color="#5865f2" size="small" variant="flat" @click="save()">Finalize</v-btn>
                                        <v-btn class="bg-purple-darken-4 text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-1" color="#5865f2" size="small" variant="flat" @click="change()">Blue Pointer</v-btn>
                                        <v-btn class="bg-purple-darken-4 text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-1" color="#5865f2" size="small" variant="flat" @click="resume()">Black Pointer</v-btn>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2 px-3 toggle-sec">
                            <p>I assert the information I have provided is whole and correct.</p>
                            <Toggle v-model="form.isVerified" />
                        </div>
                        <div class="float-right">
                            <v-btn class="bg-green text-none text-white font-bold font-bold uppercase text-xs mr-1 mb-6" :disabled="v$.form.$invalid" size="small" @click="submit">
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
            users: [],
            options: ['list', 'of', 'options'],
            form: {
                signature: null,
                isVerified: false,
            }
        }
    },
    validations() {
        return {
            form: {
                signature: {
                    required,
                },
                isVerified: {
                    checked: sameAs(true)
                },
            },
        }
    },
    mounted() {
    },
    methods: {
        async submit() {
            const result = await this.v$.$validate()
            if (result) {
                this.$router.push({name: 'GenderSelection', query: { completed: true }})
                // this.saveAppointment()
            } else return
        },
        undo() {
            this.form.isVerified = false;
            this.$refs.signaturePad.undoSignature();
        },
        save() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
            if(!isEmpty) {
                console.log('this.form.signature :', this.form.signature);
                this.form.signature = data;
            } else {
                console.log('No data found in signature')
            }
        },
        change() {
            this.options = {
                penColor: "#00f",
            };
        },
        resume() {
            this.options = {
                penColor: "#000",
            };
        },
    }
};
</script>

<style>
#signature {
  border: double 3px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.container {
  width: "100%";
  padding: 8px 16px;
}

.buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
}
</style>

<style src="@vueform/multiselect/themes/default.css"></style>
<style src="@vueform/toggle/themes/default.css"></style>
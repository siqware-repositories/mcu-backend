<template>
    <vx-card no-shadow>
        <div class="vx-row">
            <div class="vx-col lg:w-3/4 w-full">
                <div class="vx-row">
                    <div class="vx-col w-full">
                        <vs-input class="w-full" label-placeholder="ចំណងជើង" name="title" v-model="news.title"
                                  v-validate="'required'"/>
                        <span class="text-danger text-sm"
                              v-show="errors.has('title')">{{ errors.first('title') }}</span>
                    </div>
                    <div class="vx-col w-full">
                        <vs-select
                                @input-change=""
                                autocomplete
                                class="w-full"
                                label="ប្រភេទ"
                                v-model="news.category"
                        >
                            <vs-select-item :key="index" :text="category.category" :value="category.category"
                                            v-for="(category,index) in categories"/>
                        </vs-select>
                    </div>
                </div>
            </div>
            <div class="vx-col lg:w-1/4 w-full">
                <image-upload
                        :image-src="news.thumb?news.thumb:placeholder"
                        :upload-url="'file.upload.thumb'"
                        @get-image-path="setThumb"/>
            </div>

        </div>
        <div class="vx-row">
            <div class="vx-col w-full my-2">
                <tinymce :other_options="options" id="news-content" v-model="news.content"></tinymce>
            </div>
        </div>
        <vs-divider/>
        <!-- Save & Reset Button -->
        <div class="flex justify-end btn-group">
            <vs-button @click="storeNews" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
            <vs-button @click="resetField" color="warning" icon="icon-delete" icon-pack="feather" type="relief">សម្អាត</vs-button>
        </div>
    </vx-card>
</template>

<script>
    import ImageUpload from "../../components/ImageUpload";
    export default {
        name: "addNews",
        components: {ImageUpload},
        data() {
            return {
                /*user data*/
                news: {
                    title: 'ចំណងជើង',
                    category: 'ICT',
                    thumb: null,
                    content:'អត្ថបទ'
                },
                categories: [
                    {id: 1, category: 'ICT'},
                    {id: 2, category: 'Administrator'},
                    {id: 3, category: 'Faculty of Science and Technology'},
                ],
                options: {
                    height: 500,
                    plugins: 'link image imagetools table contextmenu lists',
                }
            }
        },
        computed: {
            placeholder() {
                return this.$store.getters.getAppUrl + 'images/placeholder/placeholder.png'
            },
        },
        methods: {
            /*set thumbnail*/
            setThumb(thumb) {
                this.news.thumb = thumb
            },
            //store
            storeNews(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result && self.news.category && self.news.thumb && self.news.content) {
                        self.$vs.loading();
                        this.$store.dispatch('storeNews',this.news).then(function (data) {
                            if (data) {
                                self.$vs.notify({
                                    time: 4000,
                                    title: 'ប្រតិបត្តិការជោគជ័យ',
                                    text: 'ទិន្នន័យបានបន្ថែម',
                                    color: 'success',
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    position: 'top-center'
                                });
                                self.resetField();
                            } else {
                                self.$vs.notify({
                                    title: 'ប្រតិបត្តិការបរាជ័យ',
                                    text: 'ទិន្នន័យមិនបានបន្ថែម',
                                    color: 'danger',
                                    iconPack: 'feather',
                                    icon: 'icon-message-square',
                                    position: 'top-center'
                                });
                            }
                            self.$vs.loading.close();
                        });
                    }else {
                        self.$vs.notify({
                            title: 'ប្រតិបត្តិការបរាជ័យ',
                            text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
                            color: 'danger',
                            iconPack: 'feather',
                            icon: 'icon-message-square',
                            position: 'top-center'
                        })
                    }
                });
            },
            //reset field
            resetField(){
                this.news = {
                        title: 'ចំណងជើង',
                        category: 'ICT',
                        thumb: null,
                        content:'អត្ថបទ'
                }
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <vx-card no-shadow>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-select
                        @input="editNews"
                        autocomplete
                        class="w-full"
                        label="ជ្រើរើសពត៌មាន"
                        v-model="selected_news"
                >
                    <vs-select-item :key="index" :text="news.title" :value="news.id"
                                    v-for="(news,index) in all_news"/>
                </vs-select>
            </div>
        </div>
        <vs-divider/>
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
                            <vs-select-item :key="index" :text="aoc.name" :value="aoc.name"
                                            v-for="(aoc,index) in all_aoc_names"/>
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
                <tinymce :other_options="options" id="news-content-edit" v-model="news.content"></tinymce>
            </div>
        </div>
        <vs-divider/>
        <!-- Save & Reset Button -->
        <div class="flex justify-end btn-group">
            <vs-button v-if="selected_news" @click="updateNews" icon="icon-edit" icon-pack="feather" type="relief">កែប្រែ</vs-button>
            <vs-button @click="resetField" color="warning" icon="icon-delete" icon-pack="feather" type="relief">សម្អាត</vs-button>
        </div>
    </vx-card>
</template>

<script>
    import ImageUpload from "../../components/ImageUpload";
    export default {
        name: "editNews",
        components: {ImageUpload},
        data() {
            return {
                /*news data*/
                selected_news:null,
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
                    automatic_uploads: true,
                    images_upload_url: route('file.upload.tinymce'),
                    images_reuse_filename: true,
                    relative_urls : false,
                    remove_script_host : false,
                    convert_urls : true,
                }
            }
        },
        computed: {
            placeholder() {
                return this.$store.getters.getAppUrl + 'images/placeholder/placeholder.png'
            },
            all_news() {
                return this.$store.getters.all_news
            },
            all_aoc_names() {
                return this.$store.getters.all_aoc_names
            },
        },
        methods: {
            /*set thumbnail*/
            setThumb(thumb) {
                this.news.thumb = thumb
            },
            //store
            updateNews(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result && self.news.category && self.news.thumb && self.news.content) {
                        self.$vs.loading();
                        this.$store.dispatch('updateNews',{id:self.selected_news,data:self.news}).then(function (data) {
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
                                self.news = data
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
            },
            //edit
            editNews(){
                let self = this;
                self.$store.dispatch('editNews',self.selected_news).then(function (data) {
                    self.news = data
                })
            },
            //destroy
            destroyNews(){
                let self = this;
                self.$store.dispatch('editNews',self.selected_news).then(function (data) {
                    self.news = data
                })
            }
        }
    }
</script>

<style scoped>

</style>
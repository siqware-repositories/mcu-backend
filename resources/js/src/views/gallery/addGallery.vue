<template>
    <vs-popup title="បន្ថែម" :active.sync="popupSync">
        <div class="vx-row mb-2">
            <div class="vx-col w-full">
                <vs-input class="w-full" v-validate="'required'" name="title" label-placeholder="ចំណងជើង"
                          v-model="gallery.title"/>
                <span class="text-danger text-sm"
                      v-show="errors.has('title')">{{ errors.first('title') }}</span>
            </div>
            <div class="vx-col w-full mt-2">
                <vue-dropzone class="max-content p-1" ref="thumb" @vdropzone-removed-file="removeThumb" :duplicateCheck="true" @vdropzone-success="successUploadThumb" id="thumbnail" :options="thumbnailOptions"></vue-dropzone>
            </div>
            <vs-divider/>
            <div class="vx-col w-full">
                <vue-dropzone class="p-1" ref="gallery" :duplicateCheck="true" @vdropzone-removed-file="removeGallery" @vdropzone-success="successUploadGallery" id="gallery" :options="galleryOptions"></vue-dropzone>
            </div>
        </div>
        <vs-divider/>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-button @click.prevent="storeGallery" type="relief" class="mr-3 mb-2">
                    រក្សាទុក
                </vs-button>
            </div>
        </div>
    </vs-popup>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    export default {
        name: "addGallery",
        components: {vueDropzone: vue2Dropzone},
        props: ['is_popup'],
        data() {
            return {
                /*user data*/
                gallery: {
                    thumb: [],
                    title: '',
                    images:[]
                },
                upload_url:route('file.upload.thumb'),
                galleryOptions: {
                    url: route('file.upload.thumb'),
                    thumbnailWidth: 150,
                    thumbnailHeight: 150,
                    addRemoveLinks: true,
                    dictDefaultMessage: "ដាក់អាល់ប៊ុមរូបភាព",
                },
                thumbnailOptions: {
                    url: route('file.upload.thumb'),
                    maxFiles:1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "សូមដាក់រូប Thumbnail",
                    thumbnailWidth: 150,
                    thumbnailHeight: 150
                }
            }
        },
        computed: {
            placeholder() {
                return this.$store.getters.getAppUrl + 'images/placeholder/placeholder.png'
            },
            popupSync: {
                get() {
                    return this.is_popup
                },
                set(val) {
                    this.$emit('update-is_popup', val)
                }
            }
        },
        methods:{
            /*set thumbnail*/
            setThumb(thumb) {
                this.gallery.thumb = thumb
            },
            //image upload
            successUploadGallery(file,res){
                this.gallery.images.unshift(res)
            },
            //image upload
            successUploadThumb(file,res){
                this.gallery.thumb.unshift(res)
            },
            removeGallery(file){
                const index = this.gallery.images.findIndex(x=>x.path===JSON.parse(file.xhr.response).path);
                this.gallery.images.splice(index,1)
            },
            removeThumb(file){
                const index = this.gallery.thumb.findIndex(x=>x.path===JSON.parse(file.xhr.response).path);
                this.gallery.thumb.splice(index,1)
            },
            //store
            storeGallery(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result && self.gallery.thumb.length && self.gallery.images.length) {
                        self.$vs.loading();
                        this.$store.dispatch('storeGallery',self.gallery).then(function (data) {
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
                                self.$refs.thumb.removeAllFiles(true);
                                self.$refs.gallery.removeAllFiles(true);
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
            resetField(){
                this.gallery = {
                    thumb: [],
                    title: '',
                    images:[]
                }
            },
            removeGallert(){

            }
        }
    }
</script>

<style scoped>

</style>
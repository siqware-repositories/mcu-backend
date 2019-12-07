<template>
    <modal height="auto" :scrollable="true" :pivotY="0.07" :clickToClose="false" name="add">
        <div class="flex justify-end">
            <i @click="$modal.hide('add')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-input v-validate="'required'" label-placeholder="Title" name="title" v-model="data.title" class="w-full" />
                    <span class="text-danger text-sm" v-show="errors.has('title')">{{ errors.first('title') }}</span>
                </div>
                <div class="vx-col w-full mt-2">
                    <label>Banner</label>
                    <vue-dropzone ref="banner" :duplicateCheck="true" @vdropzone-success="successUploadBanner" id="thumbnail" :options="bannerOptions"></vue-dropzone>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="storeBanner" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    export default {
        name: "AddBanner",
        components: {vueDropzone: vue2Dropzone},
        data(){
            return{
                data:{
                    banner:'images/placeholder/placeholder.png',
                    title:'',
                },
                bannerOptions: {
                    url: route('file.upload.original'),
                    maxFiles:1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "Insert Banner",
                }
            }
        },
        methods:{
            show(){
                this.$modal.show('add')
            },
            //image upload
            successUploadBanner(file,res){
                this.data.banner = res.path
            },
            //store
            storeBanner(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        this.$store.dispatch('storeBanner',self.data).then(function (data) {
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
                                self.$refs.banner.removeAllFiles(true);
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
            //reset
            resetField(){
                this.data = {
                    logo:'images/placeholder/placeholder.png',
                    project_name:'',
                    project_from:'',
                    project_status:'ongoing',
                    description:'',
                }
            },
        }
    }
</script>

<style scoped>

</style>
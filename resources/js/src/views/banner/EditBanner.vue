<template>
    <modal height="auto" :scrollable="true" :pivotY="0.07" :clickToClose="false" name="edit">
        <div class="flex justify-end">
            <i @click="$modal.hide('edit')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-input v-validate="'required'" label-placeholder="Title" name="title" v-model="data.title" class="w-full" />
                    <span class="text-danger text-sm" v-show="errors.has('title')">{{ errors.first('title') }}</span>
                </div>
                <div class="vx-col w-full mt-2">
                    <label>Banner</label>
                    <vue-dropzone ref="banner" @vdropzone-mounted="loadBanner" :duplicateCheck="true" @vdropzone-success="successUploadBanner" id="thumbnail" :options="bannerOptions"></vue-dropzone>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="updateBanner" icon="icon-edit" icon-pack="feather" type="relief">កែប្រែ</vs-button>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    export default {
        name: "EditBanner",
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
            //fetch project
            async fetchBanner(){
                await this.$store.dispatch('fetchBanner')
            },
            show(data){
                this.$modal.show('edit');
                this.data = data
            },
            //edit thumb
            loadBanner(){
                this.$refs.banner.manuallyAddFile({size:123}, this.data.banner);
            },
            //image upload
            successUploadBanner(file,res){
                this.data.banner = res.path
            },
            //store
            updateBanner(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        this.$store.dispatch('updateBanner',self.data).then(function (data) {
                            if (data) {
                                self.$vs.notify({
                                    time: 4000,
                                    title: 'ប្រតិបត្តិការជោគជ័យ',
                                    text: 'ទិន្នន័យបានកែប្រែ',
                                    color: 'success',
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    position: 'top-center'
                                });
                                self.fetchBanner();
                                self.$emit('finished')
                            } else {
                                self.$vs.notify({
                                    title: 'ប្រតិបត្តិការបរាជ័យ',
                                    text: 'ទិន្នន័យមិនបានកែប្រែ',
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
                    project_name:null,
                    project_from:null,
                    project_status:'ongoing',
                    description:'description',
                }
            },
        }
    }
</script>

<style scoped>

</style>
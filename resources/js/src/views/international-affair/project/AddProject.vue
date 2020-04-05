<template>
    <modal height="auto" :scrollable="true" :pivotY="0.07" :clickToClose="false" name="add">
        <div class="flex justify-end">
            <i @click="$modal.hide('add')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col w-full">
                    <vue-dropzone class="max-content p-1" ref="logo" :duplicateCheck="true" @vdropzone-success="successUploadLogo" id="thumbnail" :options="logoOptions"></vue-dropzone>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-input v-validate="'required'" label-placeholder="Project Name" name="project_name" v-model="data.project_name" class="w-full" />
                    <span class="text-danger text-sm" v-show="errors.has('project_name')">{{ errors.first('project_name') }}</span>
                </div>
                <div class="vx-col w-full">
                    <vs-input v-validate="'required'" label-placeholder="Project From" name="project_from" v-model="data.project_from" class="w-full" />
                    <span class="text-danger text-sm" v-show="errors.has('project_from')">{{ errors.first('project_from') }}</span>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col w-full">
                    <label>Project Status</label>
                    <v-select v-validate="'required'" name="project_status" v-model="data.project_status" :options="['ongoing','finished']"/>
                    <span class="text-danger text-sm" v-show="errors.has('project_status')">{{ errors.first('project_status') }}</span>
                </div>
                <div class="vx-col w-full">
                    <vs-input v-validate="'required'" label-placeholder="Project Url" name="url" v-model="data.url" class="w-full" />
                    <span class="text-danger text-sm" v-show="errors.has('url')">{{ errors.first('url') }}</span>
                </div>
                <div class="vx-col w-full">
                    <label>Description</label>
                    <vs-textarea v-validate="'required'" name="description" label="Description" v-model="data.description" />
                    <span class="text-danger text-sm" v-show="errors.has('description')">{{ errors.first('description') }}</span>
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="storeProject" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    import vSelect from 'vue-select'
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    export default {
        name: "AddProject",
        components: {'v-select': vSelect,vueDropzone: vue2Dropzone},
        data(){
            return{
                data:{
                    logo:'images/placeholder/placeholder.png',
                    project_name:'',
                    project_from:'',
                    project_status:'ongoing',
                    description:'',
                    url:'http://mcu.edu.kh/',
                },
                logoOptions: {
                    url: route('file.upload.logo'),
                    maxFiles:1,
                    addRemoveLinks: true,
                    dictDefaultMessage: "Insert Project Logo",
                    thumbnailWidth: 150,
                    thumbnailHeight: 130
                }
            }
        },
        methods:{
            show(){
                this.$modal.show('add')
            },
            //image upload
            successUploadLogo(file,res){
                this.data.logo = res.path
            },
            //store
            storeProject(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        this.$store.dispatch('storeProject',self.data).then(function (data) {
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
                                self.$refs.logo.removeAllFiles(true);
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

<template>
    <modal height="auto" :scrollable="true" :pivotY="0.07" :clickToClose="false" name="edit">
        <div class="flex justify-end">
            <i @click="$modal.hide('edit')" class="vs-icon vs-popup--close material-icons text-warning" style="background: rgb(255, 255, 255);">close</i>
        </div>
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col w-full">
                    <vue-dropzone class="max-content p-1" ref="logo" @vdropzone-mounted="loadLogo" :duplicateCheck="true" @vdropzone-success="successUploadLogo" id="thumbnail" :options="logoOptions"></vue-dropzone>
                </div>
            </div>
            <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-input v-validate="'required'" label-placeholder="Project Name" name="name" v-model="data.project_name" class="w-full" />
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
                    <v-select v-validate="'required'" name="project_from" v-model="data.project_status" :options="['ongoing','finished']"/>
                </div>
                <div class="vx-col w-full">
                    <vs-input v-validate="'required'" label-placeholder="Project Url" name="url" v-model="data.url" class="w-full" />
                    <span class="text-danger text-sm" v-show="errors.has('url')">{{ errors.first('url') }}</span>
                </div>
                <div class="vx-col w-full">
                    <label>Description</label>
                    <vs-textarea label="Description" v-model="data.description" />
                </div>
            </div>
            <vs-divider/>
            <!-- Save & Reset Button -->
            <div class="flex justify-end btn-group">
                <vs-button @click="updateProject" icon="icon-edit" icon-pack="feather" type="relief">កែប្រែ</vs-button>
            </div>
        </vx-card>
    </modal>
</template>

<script>
    import vSelect from 'vue-select'
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    export default {
        name: "EditProject",
        components: {'v-select': vSelect,vueDropzone: vue2Dropzone},
        data(){
            return{
                data:{
                    logo:'images/placeholder/placeholder.png',
                    project_name:null,
                    project_from:null,
                    project_status:'ongoing',
                    description:'description',
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
            //fetch project
            async fetchProject(){
                await this.$store.dispatch('fetchProject')
            },
            show(data){
                this.$modal.show('edit');
                this.data = data
            },
            //edit thumb
            loadLogo(){
                this.$refs.logo.manuallyAddFile({size:123}, this.data.logo);
            },
            //image upload
            successUploadLogo(file,res){
                this.data.logo = res.path
            },
            //store
            updateProject(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        this.$store.dispatch('updateProject',self.data).then(function (data) {
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
                                self.fetchProject();
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

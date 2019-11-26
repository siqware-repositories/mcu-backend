<template>
    <vx-card no-shadow>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-select
                        @input="editAoc"
                        autocomplete
                        class="w-full"
                        label="ជ្រើរើសបញ្ជី"
                        v-model="selected_aoc"
                >
                    <vs-select-item :key="index" :text="aoc.name" :value="aoc.id"
                                    v-for="(aoc,index) in all_aocs"/>
                </vs-select>
            </div>
        </div>
        <vs-divider/>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-select
                        autocomplete
                        class="w-full"
                        label="ឈ្មោះ"
                        v-model="aoc.name"
                        name="name"
                >
                    <vs-select-item :key="index" :text="aoc.name" :value="aoc.name"
                                    v-for="(aoc,index) in all_aoc_names"/>
                </vs-select>
                <span class="text-danger text-sm"
                      v-show="errors.has('name')">{{ errors.first('name') }}</span>
            </div>
            <div class="vx-col w-full my-2">
                <tinymce :other_options="options" id="aoc-content" v-model="aoc.content"></tinymce>
            </div>
            <div class="vx-col w-full" v-if="aoc.id">
                <label>បន្ថែមជំនាញ</label>
                <vx-input-group class="mb-2">
                    <vs-input v-model="major" @keyup.enter="editAddMajorAoc"/>
                    <template slot="append">
                        <div class="append-text btn-addon">
                            <vs-button @click="editAddMajorAoc" type="relief"
                                       icon-pack="feather"
                                       icon="icon-plus-square"></vs-button>
                        </div>
                    </template>
                </vx-input-group>
            </div>
        </div>
        <vs-tabs v-if="aoc.majors.length">
            <!-- GENERAL -->
            <vs-tab v-for="(major,index) in aoc.majors" :key="index" :label="major.major">
                <vs-tabs :position="isSmallerScreen ? 'top' : 'left'">
                    <!-- GENERAL -->
                    <vs-tab label="Home">
                        <div class="flex btn-group my-2">
                            <vs-button @click="editUpdateMajorAoc(major.content,major.id,'content')" radius icon="icon-save" icon-pack="feather" type="relief"></vs-button>
                        </div>
                        <tinymce :other_options="options" :id="'content-'+index" v-model="major.content"></tinymce>
                    </vs-tab>
                    <vs-tab label="Curriculum">
                        <div class="flex btn-group my-2">
                            <vs-button @click="editUpdateMajorAoc(major.curriculum,major.id,'curriculum')" radius icon="icon-save" icon-pack="feather" type="relief"></vs-button>
                        </div>
                        <tinymce :other_options="options" :id="'curriculum-'+index" v-model="major.curriculum"></tinymce>
                    </vs-tab>
                    <vs-tab label="Schedule">
                        <div class="flex btn-group my-2">
                            <vs-button @click="editUpdateMajorAoc(major.schedule,major.id,'schedule')" radius icon="icon-save" icon-pack="feather" type="relief"></vs-button>
                        </div>
                        <tinymce :other_options="options" :id="'schedule-'+index" v-model="major.schedule"></tinymce>
                    </vs-tab>
                </vs-tabs>
            </vs-tab>
        </vs-tabs>
        <vs-divider/>
        <!-- Save & Reset Button -->
        <div class="flex justify-end btn-group" v-if="selected_aoc">
            <vs-button @click="updateAoc" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
        </div>
    </vx-card>
</template>

<script>
    import ImageUpload from "../../components/ImageUpload";
    export default {
        name: "editAoc",
        components: {ImageUpload},
        data() {
            return {
                /*user data*/
                selected_aoc:false,
                is_major: false,
                major:null,
                majors: [{name: 'ឈ្មោះជំនាញ'}],
                aoc: {
                    id:false,
                    name: 'ICT',
                    content: 'អត្ថបទ',
                    majors:[]
                },
                options: {
                    height: 300,
                    plugins: 'link image imagetools table contextmenu lists',
                }
            }
        },
        computed: {
            placeholder() {
                return this.$store.getters.getAppUrl + 'images/placeholder/placeholder.png'
            },
            all_aocs() {
                return this.$store.getters.all_aocs
            },
            all_aoc_names() {
                return this.$store.getters.all_aoc_names
            },
            isSmallerScreen() {
                return this.$store.state.windowWidth < 768
            },
        },
        methods: {
            //fetch aoc
            async fetchAoc() {
                await this.$store.dispatch('fetchAoc');
            },
            //add major
            addMajor(index) {
                this.majors.push({name: index})
            },
            removeMajor(index) {
                this.majors.splice(index, 1)
            },
            /*set thumbnail*/
            setThumb(thumb) {
                this.news.thumb = thumb
            },
            //store
            updateAoc() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result && self.aoc.name && self.aoc.content && self.selected_aoc) {
                        self.$vs.loading();
                        this.$store.dispatch('updateAoc', {id:self.selected_aoc,aoc:self.aoc}).then(function (data) {
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
                                self.fetchAoc();
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
                    } else {
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
            //edit
            editAoc(){
                let self = this;
                self.aoc.majors = [];
                self.$store.dispatch('editAoc',self.selected_aoc).then(function (data) {
                    self.aoc = data
                })
            },
            //editAddMajorAoc
            editAddMajorAoc(){
                let self = this;
                if (self.major){
                    self.$vs.loading();
                    self.$store.dispatch('editAddMajorAoc',{id:self.selected_aoc,major:self.major}).then(function (data) {
                        self.aoc.majors.push(data);
                        self.$vs.notify({
                            time: 4000,
                            title: 'ប្រតិបត្តិការជោគជ័យ',
                            text: 'ទិន្នន័យបានបន្ថែម',
                            color: 'success',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            position: 'top-center'
                        });
                        self.$vs.loading.close();
                        self.major = null
                    })
                } else {
                    self.$vs.notify({
                        title: 'ប្រតិបត្តិការបរាជ័យ',
                        text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
                        color: 'danger',
                        iconPack: 'feather',
                        icon: 'icon-message-square',
                        position: 'top-center'
                    })
                }
            },
            //editUpdateMajorAoc
            editUpdateMajorAoc(content,id,key){
                let self = this;
                if (content){
                    self.$vs.loading();
                    self.$store.dispatch('editUpdateMajorAoc',{id:id,content:content,key:key}).then(function () {
                        self.$vs.notify({
                            time: 4000,
                            title: 'ប្រតិបត្តិការជោគជ័យ',
                            text: 'ទិន្នន័យបានបន្ថែម',
                            color: 'success',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            position: 'top-center'
                        });
                        self.$vs.loading.close();
                    })
                } else {
                    self.$vs.notify({
                        title: 'ប្រតិបត្តិការបរាជ័យ',
                        text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
                        color: 'danger',
                        iconPack: 'feather',
                        icon: 'icon-message-square',
                        position: 'top-center'
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
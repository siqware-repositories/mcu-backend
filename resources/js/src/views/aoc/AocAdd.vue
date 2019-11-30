<template>
    <vx-card no-shadow>
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
                <tinymce :other_options="options" id="news-content" v-model="aoc.content"></tinymce>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-full my-4">
                <vs-checkbox v-model="is_major">តើមានជំនាញដែរឬទេ?</vs-checkbox>
            </div>
            <div class="vx-col w-full">
                <!-- Append Two Buttons -->
                <div v-if="is_major" :key="index" v-for="(major,index) in majors">
                    <vx-input-group class="mb-2">
                        <vs-input v-model="major.name" :name="'name'+index" v-validate="'required'"/>
                        <template slot="append">
                            <div class="append-text btn-addon">
                                <vs-button @click="removeMajor(index)" radius color="warning" v-if="majors.length>1"
                                           type="border" icon-pack="feather" icon="icon-minus"></vs-button>
                                <vs-button @click="addMajor(index)" radius type="border"
                                           v-if="index === majors.length-1" icon-pack="feather"
                                           icon="icon-plus-square"></vs-button>
                            </div>
                        </template>
                    </vx-input-group>
                    <span class="text-danger text-sm"
                          v-show="errors.has('name'+index)">{{ errors.first('name'+index) }}</span>
                    <!-- /Append Two Buttons -->
                </div>
            </div>
        </div>
        <vs-divider/>
        <!-- Save & Reset Button -->
        <div class="flex justify-end btn-group">
            <vs-button @click="storeAoc" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
        </div>
    </vx-card>
</template>

<script>
    import ImageUpload from "../../components/ImageUpload";
    export default {
        name: "AocAdd",
        components: {ImageUpload},
        data() {
            return {
                /*user data*/
                is_major: false,
                majors: [{name: 'ឈ្មោះជំនាញ'}],
                aoc: {
                    name: 'ICT',
                    content: 'អត្ថបទ'
                },
                options: {
                    height: 300,
                    plugins: 'link image imagetools table contextmenu lists',
                    automatic_uploads: true,
                    images_upload_url: route('file.upload.tinymce'),
                    images_reuse_filename: true
                }
            }
        },
        computed: {
            placeholder() {
                return this.$store.getters.getAppUrl + 'images/placeholder/placeholder.png'
            },
            all_aoc_names() {
                return this.$store.getters.all_aoc_names
            },
        },
        methods: {
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
            storeAoc() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result && self.aoc.name && self.aoc.content) {
                        self.$vs.loading();
                        this.$store.dispatch('storeAoc', {is_major:self.is_major,aoc:self.aoc,majors:self.majors}).then(function (data) {
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
        }
    }
</script>

<style scoped>

</style>
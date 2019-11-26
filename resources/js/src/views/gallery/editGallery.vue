<template>
    <vs-popup title="កែប្រែ" :active.sync="popupSync">
        <div class="vx-row mb-2">
            <div class="vx-col w-full">
                <vs-input class="w-full" v-validate="'required'" name="title" label-placeholder="ចំណងជើង"
                          v-model="gallery.title"/>
                <span class="text-danger text-sm"
                      v-show="errors.has('title')">{{ errors.first('title') }}</span>
            </div>
        </div>
        <vs-divider/>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vs-button @click.prevent="updateGallery" type="relief" class="mr-3 mb-2">
                    កែប្រែ
                </vs-button>
            </div>
        </div>
    </vs-popup>
</template>

<script>
    export default {
        name: "editGallery",
        props: ['is_popup'],
        data() {
            return {
                /*user data*/
                gallery: {
                    id:null,
                    title: ''
                },
            }
        },
        computed: {
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
            //store
            editGallery(id){
                let self = this;
                self.$store.dispatch('editGallery',id).then(function (data) {
                    self.gallery = data
                });
            },
            updateGallery(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        this.$store.dispatch('updateGallery',self.gallery).then(function (data) {
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
                                self.fetchGallery();
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
                    title: ''
                }
            },
            async fetchGallery(){
                await this.$store.dispatch('fetchGallery');
            }
        }
    }
</script>

<style scoped>

</style>
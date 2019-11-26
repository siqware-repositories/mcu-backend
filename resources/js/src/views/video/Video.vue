<template>
    <vx-card no-shadow>
        <div class="vx-row">
            <div class="vx-col lg:w-1/3 w-full">
                <vs-input class="w-full" label-placeholder="ចំណងជើង" name="title" v-model="video.title"
                          v-validate="'required'"/>
                <span class="text-danger text-sm"
                      v-show="errors.has('title')">{{ errors.first('title') }}</span>
            </div>
            <div class="vx-col lg:w-1/3 w-full">
                <vs-input class="w-full" label-placeholder="តំណរ" v-model="video.url" @keyup.enter="" name="url"
                          v-validate="'required'"/>
                <span class="text-danger text-sm"
                      v-show="errors.has('url')">{{ errors.first('url') }}</span>
            </div>
        </div>
        <!-- Save & Reset Button -->
        <div class="flex btn-group my-2">
            <vs-button v-if="!is_edit" @click="storeVideo" icon="icon-save" icon-pack="feather" type="relief">រក្សាទុក</vs-button>
            <vs-button v-if="is_edit" @click="updateVideo" icon="icon-save" icon-pack="feather" type="relief">កែប្រែ</vs-button>
        </div>
        <vs-divider/>
        <div class="btn-group flex">
            <vs-button v-if="selected.length" @click="destroyVideo" color="danger" icon="icon-trash-2" icon-pack="feather"
                       type="relief">លុប
            </vs-button>
            <vs-button v-if="selected.length===1" @click="editVideo" icon="icon-edit" icon-pack="feather" type="relief">កែប្រែ
            </vs-button>
        </div>
        <vs-table multiple v-model="selected" pagination max-items="10" search :data="all_videos">
            <template slot="thead">
                <vs-th sort-key="id">ល.រ</vs-th>
                <vs-th sort-key="url">តំណរ</vs-th>
                <vs-th sort-key="title">ចំណងជើង</vs-th>
                <vs-th sort-key="created_at">កាលបរិច្ឆេទ</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].id">
                        {{ data[indextr].id }}
                    </vs-td>
                    <vs-td :data="data[indextr].url">
                        <iframe width="200" height="50" :src="'https://www.youtube.com/embed/'+data[indextr].url" frameborder="0"></iframe>
                    </vs-td>
                    <vs-td :data="data[indextr].title">
                        {{ data[indextr].title }}
                    </vs-td>
                    <vs-td :data="data[indextr].created_at">
                        {{ data[indextr].created_at }}
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>
    </vx-card>
</template>

<script>
    export default {
        name: 'Video',
        data() {
            return {
                is_edit:false,
                selected: [],
                'tableList': [
                    'vs-th: Component',
                    'vs-tr: Component',
                    'vs-td: Component',
                    'thread: Slot',
                    'tbody: Slot',
                    'header: Slot'
                ],
                video: {
                    title: '',
                    url: ''
                },
            }
        },
        computed: {
            all_videos() {
                return this.$store.getters.all_videos
            },
        },
        async created() {
            await this.fetchVideo()
        },
        methods: {
            async fetchVideo() {
                await this.$store.dispatch('fetchVideo');
            },
            async storeVideo() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        this.$store.dispatch('storeVideo', self.video).then(function (data) {
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
            resetField() {
                this.video = {
                    title: '',
                    url: ''
                };
            },
            editVideo() {
                let self = this;
                self.$store.dispatch('editVideo',self.selected[0].id).then(function (data) {
                    self.video = data;
                    self.is_edit = true
                });
            },
            async updateVideo() {
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        this.$store.dispatch('updateVideo', self.video).then(function (data) {
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
                                self.is_edit = false;
                                self.selected = [];
                                self.fetchVideo()
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
            async destroyVideo(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('destroyVideo',data.id);
                });
                await Promise.all(promises).then(function () {
                    self.$vs.notify({
                        time: 4000,
                        title: 'ប្រតិបត្តិការជោគជ័យ',
                        text: 'ទិន្នន័យបានបន្ថែម',
                        color: 'success',
                        iconPack: 'feather',
                        icon: 'icon-check',
                        position: 'top-center'
                    });
                    self.selected = [];
                    self.$vs.loading.close();
                })
            }
        }
    }
</script>

<style lang="scss">

</style>

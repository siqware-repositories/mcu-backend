<template>
    <vs-tabs :position="isSmallerScreen ? 'top' : 'left'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">
        <!-- GENERAL -->
        <vs-tab icon-pack="feather" icon="icon-list" :label="!isSmallerScreen ? 'ពត៌មាន' : ''">
            <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
                <vx-card no-shadow>
                    <div class="btn-group flex">
                        <vs-button v-if="selected.length" @click="toggleNewsPublish" color="warning" icon="icon-circle" icon-pack="feather" type="relief">toggle publish</vs-button>
                        <vs-button v-if="selected.length" @click="toggleNewsActive" color="danger" icon="icon-circle" icon-pack="feather" type="relief">toggle active</vs-button>
                    </div>
                    <vs-table multiple v-model="selected" pagination max-items="10" search :data="all_news">
                        <template slot="thead">
                            <vs-th sort-key="id">ល.រ</vs-th>
                            <vs-th sort-key="thumb">រូប</vs-th>
                            <vs-th sort-key="title">ចំណងជើង</vs-th>
                            <vs-th sort-key="category">ប្រភេទ</vs-th>
                            <vs-th sort-key="is_active">Is Active</vs-th>
                            <vs-th sort-key="is_publish">Is Published</vs-th>
                            <vs-th sort-key="created_at">កាលបរិច្ឆេទ</vs-th>
                        </template>
                        <template slot-scope="{data}">
                            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                                <vs-td :data="data[indextr].id">
                                    {{ data[indextr].id }}
                                </vs-td>
                                <vs-td :data="data[indextr].thumb">
                                    <img :src="data[indextr].thumb" class="rounded" width="50" :alt="data[indextr].thumb">
                                </vs-td>
                                <vs-td :data="data[indextr].title">
                                    {{ data[indextr].title }}
                                </vs-td>
                                <vs-td :data="data[indextr].category">
                                    {{ data[indextr].category }}
                                </vs-td>
                                <vs-td :data="data[indextr].is_active">
                                    {{ data[indextr].is_active }}
                                </vs-td>
                                <vs-td :data="data[indextr].is_publish">
                                    {{ data[indextr].is_publish }}
                                </vs-td>
                                <vs-td :data="data[indextr].created_at">
                                    {{ data[indextr].created_at }}
                                </vs-td>

                            </vs-tr>
                        </template>
                    </vs-table>
                </vx-card>
            </div>
        </vs-tab>
        <vs-tab icon-pack="feather" icon="icon-plus-square" :label="!isSmallerScreen ? 'បន្ថែម' : ''">
            <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
                <add-news></add-news>
            </div>
        </vs-tab>
        <vs-tab icon-pack="feather" icon="icon-edit" :label="!isSmallerScreen ? 'កែប្រែ' : ''">
            <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
                <edit-news></edit-news>
            </div>
        </vs-tab>
    </vs-tabs>
</template>
<script>
    import AddNews from "./addNews";
    import EditNews from "./editNews";
    export default {
        name:'News',
        components: {EditNews, AddNews},
        data() {
            return {
                selected: [],
                'tableList': [
                    'vs-th: Component',
                    'vs-tr: Component',
                    'vs-td: Component',
                    'thread: Slot',
                    'tbody: Slot',
                    'header: Slot'
                ],
            }
        },
        computed: {
            isSmallerScreen() {
                return this.$store.state.windowWidth < 768
            },
            all_news() {
                return this.$store.getters.all_news
            },
        },
        async created(){
            if (this.all_news.length===0) {
                await this.fetchNews();
            }
        },
        methods:{
            async fetchNews(){
                await this.$store.dispatch('fetchNews');
            },
            async toggleNewsActive(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('toggleNewsActive',data.id);
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
                    self.fetchNews();
                    self.selected = [];
                    self.$vs.loading.close();
                })
            },
            async toggleNewsPublish(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('toggleNewsPublish',data.id);
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
                    self.fetchNews();
                    self.selected = [];
                    self.$vs.loading.close();
                })
            },
        }
    }
</script>

<style lang="scss">
    #profile-tabs {
        .vs-tabs--content {
            padding: 0;
        }
    }
</style>

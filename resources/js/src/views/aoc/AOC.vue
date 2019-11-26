<template>
    <vs-tabs :key="isSmallerScreen">
        <!-- GENERAL -->
        <vs-tab icon-pack="feather" icon="icon-list" label="បញ្ជី">
            <vx-card no-shadow>
                <div class="btn-group flex">
                    <vs-button v-if="selected.length" @click="destroyAoc" color="danger" icon="icon-trash-2" icon-pack="feather" type="relief">លុប</vs-button>
                </div>
                <vs-table multiple v-model="selected" pagination max-items="10" search :data="all_aocs">
                    <template slot="thead">
                        <vs-th sort-key="id">ល.រ</vs-th>
                        <vs-th sort-key="name">ឈ្មោះ</vs-th>
                        <vs-th sort-key="created_at">កាលបរិច្ឆេទ</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                            <vs-td :data="data[indextr].id">
                                {{ data[indextr].id }}
                            </vs-td>
                            <vs-td :data="data[indextr].name">
                                {{ data[indextr].name }}
                            </vs-td>
                            <vs-td :data="data[indextr].created_at">
                                {{ data[indextr].created_at }}
                            </vs-td>

                        </vs-tr>
                    </template>
                </vs-table>
            </vx-card>
        </vs-tab>
        <vs-tab icon-pack="feather" icon="icon-plus-square" label="បន្ថែម">
            <aoc-add></aoc-add>
        </vs-tab>
        <vs-tab icon-pack="feather" icon="icon-edit" label="កែប្រែ">
            <edit-aoc></edit-aoc>
        </vs-tab>
    </vs-tabs>
</template>
<script>
    import AocAdd from "./AocAdd";
    import EditAoc from "./editAoc";
    export default {
        name:'AOC',
        components: {EditAoc, AocAdd},
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
            all_aocs() {
                return this.$store.getters.all_aocs
            },
        },
        async created(){
            await this.fetchAocName();
            await this.fetchAoc();
        },
        methods:{
            async fetchNews(){
                await this.$store.dispatch('fetchNews');
            },
            async fetchAocName() {
                await this.$store.dispatch('fetchAocName');
            },
            async fetchAoc() {
                await this.$store.dispatch('fetchAoc');
            },
            async destroyAoc(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('destroyAoc',data.id);
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

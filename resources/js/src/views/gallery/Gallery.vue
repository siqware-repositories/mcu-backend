<template>
    <div>
        <vx-card no-shadow>
            <div class="flex btn-group">
                <vs-button @click="is_popup=true" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
                <vs-button v-if="selected.length===1" @click="is_popup_edit=true;$refs.editPopup.editGallery(selected[0].id)" color="warning" type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ</vs-button>
                <vs-button v-if="selected.length" @click="destroyGallery" color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">លុប</vs-button>
                <add-gallery :is_popup="is_popup" @update-is_popup="syncPopup"></add-gallery>
                <edit-gallery :is_popup="is_popup_edit" ref="editPopup" @update-is_popup="syncPopupEdit"></edit-gallery>
            </div>
            <vs-table multiple v-model="selected" pagination max-items="10" search :data="all_galleries">
                <template slot="thead">
                    <vs-th sort-key="id">ល.រ</vs-th>
                    <vs-th sort-key="thumb">រូប</vs-th>
                    <vs-th sort-key="title">ចំណងជើង</vs-th>
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
                        <vs-td :data="data[indextr].created_at">
                            {{ data[indextr].created_at }}
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>
<script>
    import AddGallery from "./addGallery";
    import EditGallery from "./editGallery";
    export default {
        name:'Gallery',
        components: {EditGallery, AddGallery},
        data() {
            return {
                is_popup:false,
                is_popup_edit:false,
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
            all_galleries() {
                return this.$store.getters.all_galleries
            }
        },
        async created(){
            await this.fetchGallery();
        },
        methods:{
            syncPopup(val) {
                this.is_popup = val
            },
            syncPopupEdit(val) {
                this.is_popup_edit = val;
                this.selected = []
            },
            async fetchGallery(){
                await this.$store.dispatch('fetchGallery');
            },
            async destroyGallery(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('destroyGallery',data.id);
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
    #profile-tabs {
        .vs-tabs--content {
            padding: 0;
        }
    }
</style>

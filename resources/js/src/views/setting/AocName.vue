<template>
    <vx-card no-shadow>
        <vx-input-group class="mb-2">
            <vs-input v-model="name" @keyup.enter="storeAocName" name="name" v-validate="'required'"/>
            <template slot="append">
                <div class="append-text btn-addon">
                    <vs-button @click="storeAocName" type="relief"
                               icon-pack="feather"
                               icon="icon-plus-square"></vs-button>
                </div>
            </template>
        </vx-input-group>
        <span class="text-danger text-sm"
              v-show="errors.has('name')">{{ errors.first('name') }}</span>
        <div class="btn-group flex">
            <vs-button v-if="selected.length" @click="destroyAocName" color="danger" icon="icon-trash-2" icon-pack="feather" type="relief">លុប</vs-button>
        </div>
        <vs-table multiple v-model="selected" pagination max-items="10" search :data="all_aoc_names">
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
</template>

<script>
    export default {
        name: "AocName",
        data() {
            return {
                name:null,
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
            all_aoc_names() {
                return this.$store.getters.all_aoc_names
            },
        },
        methods:{
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
            //store
            storeAocName(){
                let self = this;
                this.$validator.validateAll().then(result => {
                    if (result) {
                        self.$vs.loading();
                        this.$store.dispatch('storeAocName',{name:self.name}).then(function (data) {
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
            //destroy
            async destroyAocName(){
                let self = this;
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('destroyAocName',data.id)
                });
                await Promise.all(promises).then(function () {
                    self.$vs.notify({
                        time: 4000,
                        title: 'ប្រតិបត្តិការជោគជ័យ',
                        text: 'ទិន្នន័យបានលុប',
                        color: 'success',
                        iconPack: 'feather',
                        icon: 'icon-check',
                        position: 'top-center'
                    });
                    self.selected = []
                });
            },
            resetField(){
                this.name = null
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
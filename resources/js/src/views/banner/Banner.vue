<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button @click="$refs.addBanner.show()" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
            <vs-button v-if="selected.length===1" @click="$refs.editBanner.show(selected[0])" color="warning" type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ</vs-button>
            <vs-button v-if="selected.length===1" @click="toggleBannerStatus" color="dark" type="relief" icon-pack="feather" icon="icon-check">Active</vs-button>
            <vs-button v-if="selected.length" @click="destroyBanner" color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">លុប</vs-button>
        </div>
        <add-banner ref="addBanner"></add-banner>
        <edit-banner ref="editBanner" @finished="selected=[]"></edit-banner>
        <vs-table multiple v-model="selected" pagination max-items="10" search :data="all_banners">

            <template slot="thead">
                <vs-th sort-key="id">ID</vs-th>
                <vs-th sort-key="banner">Banner</vs-th>
                <vs-th sort-key="title">Title</vs-th>
                <vs-th sort-key="status">Status</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].id">
                        {{ data[indextr].id }}
                    </vs-td>
                    <vs-td :data="data[indextr].banner">
                        <img :src="tr.banner" :alt="tr.banner" height="150">
                    </vs-td>
                    <vs-td :data="data[indextr].title">
                        {{ data[indextr].title }}
                    </vs-td>
                    <vs-td :data="data[indextr].status">
                        <vs-chip v-if="tr.status" color="primary">Active</vs-chip>
                        <vs-chip v-if="!tr.status" color="danger">Inactive</vs-chip>
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </vx-card>
</template>

<script>
    import AddBanner from "./AddBanner";
    import EditBanner from "./EditBanner";
    export default {
        name: "Banner",
        components: {EditBanner, AddBanner},
        data(){
            return{
                selected:[],
                users: [{
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                },
                    {
                        "id": 2,
                        "name": "Ervin Howell",
                        "username": "Antonette",
                        "email": "Shanna@melissa.tv",
                        "website": "anastasia.net",
                    }]
            }
        },
        computed:{
            all_banners(){
                return this.$store.getters.all_banner
            }
        },
        async created(){
            await this.fetchBanner()
        },
        methods:{
            //fetch banner
            async fetchBanner(){
                await this.$store.dispatch('fetchBanner')
            },
            //destroy
            destroyBanner(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (x) {
                    await self.$store.dispatch('destroyBanner',x.id)
                });
                Promise.all(promises).then(function () {
                    self.$vs.notify({
                        time: 4000,
                        title: 'ប្រតិបត្តិការជោគជ័យ',
                        text: 'ទិន្នន័យបានកែប្រែ',
                        color: 'success',
                        iconPack: 'feather',
                        icon: 'icon-check',
                        position: 'top-center'
                    });
                    self.$vs.loading.close();
                    self.selected=[]
                })
            },
            //toggle status
            toggleBannerStatus(){
                let self = this;
                self.$store.dispatch('toggleBannerStatus',self.selected[0].id).then(function (data) {
                    if (data){
                        self.$vs.notify({
                            time: 4000,
                            title: 'ប្រតិបត្តិការជោគជ័យ',
                            text: 'ទិន្នន័យបានកែប្រែ',
                            color: 'success',
                            iconPack: 'feather',
                            icon: 'icon-check',
                            position: 'top-center'
                        });
                        self.$vs.loading.close();
                        self.fetchBanner();
                        self.selected=[]
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
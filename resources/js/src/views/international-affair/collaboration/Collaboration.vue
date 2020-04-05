<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button @click="$refs.addCollaboration.show()" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
            <vs-button v-if="selected.length===1" @click="$refs.editCollaboration.show(selected[0])" color="warning" type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ</vs-button>
            <vs-button v-if="selected.length" @click="destroyCollaboration" color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">លុប</vs-button>
            <add-collaboration ref="addCollaboration"></add-collaboration>
            <edit-collaboration @finished="selected=[]" ref="editCollaboration"></edit-collaboration>
        </div>
        <vs-table multiple v-model="selected" pagination max-items="10" search :data="all_collaborations">

            <template slot="thead">
                <vs-th sort-key="id">ID</vs-th>
                <vs-th sort-key="logo"></vs-th>
                <vs-th sort-key="org_name">Organization's Name</vs-th>
                <vs-th sort-key="url">Url</vs-th>
                <vs-th sort-key="description">Description</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].id">
                        {{ data[indextr].id }}
                    </vs-td>
                    <vs-td :data="data[indextr].logo">
                        <img height="50" :src="data[indextr].logo" :alt="data[indextr].logo">
                    </vs-td>
                    <vs-td :data="data[indextr].org_name">
                        {{ data[indextr].org_name }}
                    </vs-td>
                    <vs-td :data="data[indextr].url">
                        {{ data[indextr].url }}
                    </vs-td>
                    <vs-td :data="data[indextr].description">
                        {{ data[indextr].description }}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </vx-card>
</template>

<script>
    import AddCollaboration from "./AddCollaboration";
    import EditCollaboration from "./EditCollaboration";
    export default {
        name: "Collaboration",
        components: {EditCollaboration, AddCollaboration},
        data(){
            return{
                selected:[],
            }
        },
        computed:{
            all_collaborations(){
                return this.$store.getters.all_collaboration
            }
        },
        methods:{
            //destroy
            destroyCollaboration(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (x) {
                    await self.$store.dispatch('destroyCollaboration',x.id)
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
            }
        }
    }
</script>

<style scoped>

</style>

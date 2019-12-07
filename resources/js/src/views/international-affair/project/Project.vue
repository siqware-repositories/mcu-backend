<template>
    <vx-card no-shadow>
        <div class="flex btn-group">
            <vs-button @click="$refs.addProject.show()" type="relief" icon-pack="feather" icon="icon-plus-square">បន្ថែម</vs-button>
            <vs-button v-if="selected.length===1" @click="$refs.editProject.show(selected[0])" color="warning" type="relief" icon-pack="feather" icon="icon-edit">កែប្រែ</vs-button>
            <vs-button v-if="selected.length" @click="destroyProject" color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">លុប</vs-button>
            <add-project ref="addProject"></add-project>
            <edit-project @finished="selected=[]" ref="editProject"></edit-project>
        </div>
        <vs-table multiple v-model="selected" pagination max-items="10" search :data="all_projects">

            <template slot="thead">
                <vs-th sort-key="id">ID</vs-th>
                <vs-th sort-key="logo"></vs-th>
                <vs-th sort-key="project_from">Project From</vs-th>
                <vs-th sort-key="project_name">Name</vs-th>
                <vs-th sort-key="description">Description</vs-th>
                <vs-th sort-key="project_status">Project Status</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].id">
                        {{ data[indextr].id }}
                    </vs-td>
                    <vs-td :data="data[indextr].logo">
                        <img height="50" :src="data[indextr].logo" :alt="data[indextr].logo">
                    </vs-td>
                    <vs-td :data="data[indextr].project_from">
                        {{ data[indextr].project_from }}
                    </vs-td>
                    <vs-td :data="data[indextr].project_name">
                        {{ data[indextr].project_name }}
                    </vs-td>
                    <vs-td :data="data[indextr].description">
                        {{ data[indextr].description }}
                    </vs-td>
                    <vs-td :data="data[indextr].project_status">
                        {{ data[indextr].project_status }}
                    </vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </vx-card>
</template>

<script>
    import AddProject from "./AddProject";
    import EditProject from "./EditProject";
    export default {
        name: "Project",
        components: {EditProject, AddProject},
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
            all_projects(){
                return this.$store.getters.all_project
            }
        },
        methods:{
            //destroy
            destroyProject(){
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (x) {
                    await self.$store.dispatch('destroyProject',x.id)
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
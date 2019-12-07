<template>
    <vs-tabs>
        <vs-tab icon-pack="feather" icon="icon-list" label="Project">
            <project></project>
        </vs-tab>
        <vs-tab icon-pack="feather" icon="icon-list" label="Collaboration Agreement">
            <collaboration></collaboration>
        </vs-tab>
    </vs-tabs>
</template>

<script>
    import Project from "./project/Project";
    import Collaboration from "./collaboration/Collaboration";
    export default {
        name: "InternationalAffair",
        components: {Collaboration, Project},
        async created(){
            await this.fetchProject();
            await this.fetchCollaboration();
        },
        methods:{
            async fetchProject(){
                await this.$store.dispatch('fetchProject')
            },
            async fetchCollaboration(){
                await this.$store.dispatch('fetchCollaboration')
            }
        }
    }
</script>

<style scoped>

</style>
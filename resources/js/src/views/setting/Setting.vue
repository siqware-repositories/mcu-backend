<template>
    <vs-tabs :position="isSmallerScreen ? 'top' : 'left'" class="tabs-shadow-none" id="profile-tabs"
             :key="isSmallerScreen">
        <!-- GENERAL -->
        <vs-tab icon-pack="feather" icon="icon-grid" :label="!isSmallerScreen ? 'ប្រភេទ' : ''">
            <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
                <aoc-name></aoc-name>
            </div>
        </vs-tab>
        <vs-tab icon-pack="feather" icon="icon-plus-square" :label="!isSmallerScreen ? 'អំពី MCU' : ''">
            <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
                <about></about>
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
    import EditNews from "../news/editNews";
    import AocAdd from "../aoc/AocAdd";
    import AocName from "./AocName";
    import About from "./about/About";

    export default {
        name: 'Setting',
        components: {About, AocName, AocAdd, EditNews},
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
        async created() {
            await this.fetchNews();
            await this.fetchAocName();
            await this.fetchAbout();
        },
        methods: {
            async fetchAbout() {
                await this.$store.dispatch('fetchAbout');
            },
            async fetchNews() {
                await this.$store.dispatch('fetchNews');
            },
            async fetchAocName() {
                await this.$store.dispatch('fetchAocName');
            },
            async toggleNewsActive() {
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('toggleNewsActive', data.id);
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
            async toggleNewsPublish() {
                let self = this;
                self.$vs.loading();
                const promises = self.selected.map(async function (data) {
                    await self.$store.dispatch('toggleNewsPublish', data.id);
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

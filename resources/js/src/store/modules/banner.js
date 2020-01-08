
const state = {
    banner:[]
};
const getters = {
    all_banner:function (state) {
        return state.banner
    }
};
const actions = {
    async fetchBanner({commit}){
        try {
            const res = await axios.get(route('banner.index'));
            commit('SET_BANNER',res.data)
        }catch (e) {
            return false
        }
    },
    async storeBanner({commit},data){
        try {
            const res = await axios.post(route('banner.store'),data);
            commit('STORE_BANNER',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editBanner({commit},id){
        try {
            const res = await axios.get(route('banner.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyBanner({commit},id){
        try {
            await axios.delete(route('banner.destroy',id));
            commit('DESTROY_BANNER',id);
            return true
        }catch (e) {
            return false
        }
    },
    async toggleBannerStatus({},id){
        try {
            await axios.post(route('banner.toggle.status',id));
            return true
        }catch (e) {
            return false
        }
    },
    async updateBanner({commit},data){
        try {
            await axios.put(route('banner.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_BANNER:function (state,data) {
        state.banner.unshift(data)
    },
    SET_BANNER:function (state,data) {
        state.banner = data
    },
    DESTROY_BANNER:function (state,id) {
        return state.banner = state.banner.filter(function (banner,index) {
            return banner.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}
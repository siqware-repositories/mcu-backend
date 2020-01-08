
const state = {
    galleries:[]
};
const getters = {
    all_galleries:function (state) {
        return state.galleries
    }
};
const actions = {
    async fetchGallery({commit}){
        try {
            const res = await axios.get(route('gallery.index'));
            commit('SET_GALLERY',res.data)
        }catch (e) {
            return false
        }
    },
    async storeGallery({commit},data){
        try {
            const res = await axios.post(route('gallery.store'),data);
            commit('STORE_GALLERY',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editGallery({commit},id){
        try {
            const res = await axios.get(route('gallery.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyGallery({commit},id){
        try {
            await axios.delete(route('gallery.destroy',id));
            commit('DESTROY_GALLERY',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateGallery({commit},data){
        try {
            await axios.put(route('gallery.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_GALLERY:function (state,data) {
        state.galleries.unshift(data)
    },
    SET_GALLERY:function (state,data) {
        state.galleries = data
    },
    DESTROY_GALLERY:function (state,id) {
        return state.galleries = state.galleries.filter(function (galleries,index) {
            return galleries.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}
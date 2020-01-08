
const state = {
    videos:[]
};
const getters = {
    all_videos:function (state) {
        return state.videos
    }
};
const actions = {
    async fetchVideo({commit}){
        try {
            const res = await axios.get(route('video.index'));
            commit('SET_VIDEO',res.data)
        }catch (e) {
            return false
        }
    },
    async storeVideo({commit},data){
        try {
            const res = await axios.post(route('video.store'),data);
            commit('STORE_VIDEO',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editVideo({commit},id){
        try {
            const res = await axios.get(route('video.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyVideo({commit},id){
        try {
            await axios.delete(route('video.destroy',id));
            commit('DESTROY_VIDEO',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateVideo({commit},data){
        try {
            await axios.put(route('video.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_VIDEO:function (state,data) {
        state.videos.unshift(data)
    },
    SET_VIDEO:function (state,data) {
        state.videos = data
    },
    DESTROY_VIDEO:function (state,id) {
        return state.videos = state.videos.filter(function (videos,index) {
            return videos.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}
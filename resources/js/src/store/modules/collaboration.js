import axios from  'axios'
const state = {
    collaboration:[]
};
const getters = {
    all_collaboration:function (state) {
        return state.collaboration
    }
};
const actions = {
    async fetchCollaboration({commit}){
        try {
            const res = await axios.get(route('collaboration.index'));
            commit('SET_COLLABORATION',res.data)
        }catch (e) {
            return false
        }
    },
    async storeCollaboration({commit},data){
        try {
            const res = await axios.post(route('collaboration.store'),data);
            commit('STORE_COLLABORATION',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editCollaboration({commit},id){
        try {
            const res = await axios.get(route('collaboration.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyCollaboration({commit},id){
        try {
            await axios.delete(route('collaboration.destroy',id));
            commit('DESTROY_COLLABORATION',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateCollaboration({commit},data){
        try {
            await axios.put(route('collaboration.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_COLLABORATION:function (state,data) {
        state.collaboration.unshift(data)
    },
    SET_COLLABORATION:function (state,data) {
        state.collaboration = data
    },
    DESTROY_COLLABORATION:function (state,id) {
        return state.collaboration = state.collaboration.filter(function (collaboration,index) {
            return collaboration.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}
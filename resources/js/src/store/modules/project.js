import axios from  'axios'
const state = {
    project:[]
};
const getters = {
    all_project:function (state) {
        return state.project
    }
};
const actions = {
    async fetchProject({commit}){
        try {
            const res = await axios.get(route('project.index'));
            commit('SET_PROJECT',res.data)
        }catch (e) {
            return false
        }
    },
    async storeProject({commit},data){
        try {
            const res = await axios.post(route('project.store'),data);
            commit('STORE_PROJECT',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editProject({commit},id){
        try {
            const res = await axios.get(route('project.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async destroyProject({commit},id){
        try {
            await axios.delete(route('project.destroy',id));
            commit('DESTROY_PROJECT',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateProject({commit},data){
        try {
            await axios.put(route('project.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_PROJECT:function (state,data) {
        state.project.unshift(data)
    },
    SET_PROJECT:function (state,data) {
        state.project = data
    },
    DESTROY_PROJECT:function (state,id) {
        return state.project = state.project.filter(function (project,index) {
            return project.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}
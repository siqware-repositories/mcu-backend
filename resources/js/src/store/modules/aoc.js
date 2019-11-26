import axios from  'axios'
const state = {
    aocs:[]
};
const getters = {
    all_aocs:function (state) {
        return state.aocs
    }
};
const actions = {
    async fetchAoc({commit}){
        try {
            const res = await axios.get(route('aoc.index'));
            commit('SET_AOC',res.data)
        }catch (e) {
            return false
        }
    },
    async storeAoc({commit},data){
        try {
            const res = await axios.post(route('aoc.store'),data);
            commit('STORE_AOC',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async editAoc({commit},id){
        try {
            const res = await axios.get(route('aoc.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async editMajorAoc({commit},id){
        try {
            const res = await axios.get(route('aoc.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async editAddMajorAoc({commit},data){
        try {
            const res = await axios.post(route('aoc.add.major',data.id),data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async editUpdateMajorAoc({commit},data){
        try {
            const res = await axios.post(route('aoc.update.major',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
    async destroyAoc({commit},id){
        try {
            await axios.delete(route('aoc.destroy',id));
            commit('DESTROY_AOC',id);
            return true
        }catch (e) {
            return false
        }
    },
    async updateAoc({commit},data){
        try {
            await axios.put(route('aoc.update',data.id),data);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_AOC:function (state,data) {
        state.aocs.unshift(data)
    },
    SET_AOC:function (state,data) {
        state.aocs = data
    },
    DESTROY_AOC:function (state,id) {
        return state.aocs = state.aocs.filter(function (aocs,index) {
            return aocs.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}
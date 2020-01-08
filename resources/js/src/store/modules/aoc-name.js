
const state = {
    aoc_names:[]
};
const getters = {
    all_aoc_names:function (state) {
        return state.aoc_names
    }
};
const actions = {
    async fetchAocName({commit}){
        try {
            const res = await axios.get(route('settings-aoc-name.index'));
            commit('SET_AOC_NAME',res.data)
        }catch (e) {
            return false
        }
    },
    async storeAocName({commit},data){
        try {
            const res = await axios.post(route('settings-aoc-name.store'),data);
            commit('STORE_AOC_NAME',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async destroyAocName({commit},id){
        try {
            await axios.delete(route('settings-aoc-name.destroy',id));
            commit('DESTROY_AOC_NAME',id);
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_AOC_NAME:function (state,data) {
        state.aoc_names.unshift(data)
    },
    SET_AOC_NAME:function (state,data) {
        state.aoc_names = data
    },
    DESTROY_AOC_NAME:function (state,id) {
        return state.aoc_names = state.aoc_names.filter(function (aoc_name,index) {
            return aoc_name.id !== id
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}
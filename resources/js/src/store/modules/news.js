import axios from  'axios'
const state = {
    news:[]
};
const getters = {
    all_news:function (state) {
        return state.news
    }
};
const actions = {
    async fetchNews({commit}){
        try {
            const res = await axios.get(route('news.index'));
            commit('SET_NEWS',res.data)
        }catch (e) {
            return false
        }
    },
    async storeNews({commit},data){
        try {
            const res = await axios.post(route('news.store'),data);
            commit('STORE_NEWS',res.data);
            return true
        }catch (e) {
            return false
        }
    },
    async updateNews({commit},data){
        try {
            const res = await axios.put(route('news.update',data.id),data.data);
            return res.data
        }catch (e) {
            return false
        }
    },
    async editNews({commit},id){
        try {
            const res = await axios.get(route('news.edit',id));
            return res.data
        }catch (e) {
            return false
        }
    },
    async toggleNewsActive({commit},id){
        try {
            await axios.post(route('news.toggle.active',id));
            return true
        }catch (e) {
            return false
        }
    },
    async toggleNewsPublish({commit},id){
        try {
            await axios.post(route('news.toggle.publish',id));
            return true
        }catch (e) {
            return false
        }
    },
};
const mutations = {
    STORE_NEWS:function (state,data) {
        state.news.unshift(data)
    },
    SET_NEWS:function (state,data) {
        return state.news = data
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
}
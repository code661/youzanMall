import Vue from "vue";
import Vuex from "vuex";
import Address from "modules/js/addressService.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    list: null
  },
  mutations: {
    init(state, payload) {
      state.list = payload.data.lists;
    },
    add(state, payload) {
      state.list.push(payload);
    },
    update(state, payload) {
      let addressList = JSON.parse(JSON.stringify(state.list));
      let index = addressList.findIndex(item => {
        return item.id === payload.id;
      });
      addressList[index] = payload;
      state.list = addressList;
    },
    remove(state, payload) {
      let addressList = state.list;
      let index = addressList.findIndex(item => {
        return item.id === payload.id;
      });
      state.list.splice(index, 1);
    },
    setDefault(state, payload) {
      state.list.map((item)=>{
        if (item.id === payload.id){
          item.isDefault = true
        }else{
          item.isDefault = false
        }
      })
    }
  },
  actions: {
    initAction({ commit }) {
      Address.list().then(res => {
        commit("init", res);
      });
    },
    addAction({ commit }, payload) {
      Address.add(payload).then(res => {
        payload.id = res.data.id;
        commit("add", payload);
      });
    },
    updateAction({ commit }, payload) {
      Address.update(payload.id).then(() => {
        commit("update", payload);
      });
    },
    removeAction({ commit }, payload) {
      Address.remove(payload.id).then(() => {
        commit("remove", payload);
      });
    },
    setDefaultAction({ commit }, payload) {
      Address.setDefault(payload.id).then(() => {
        commit("setDefault", payload);
      });
    }
  }
});
export default store;

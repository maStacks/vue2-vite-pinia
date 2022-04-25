import { defineStore } from 'pinia'

const state = {
  namespaced: true,
  showSettings: false,
  fixedHeader: false,
  sidebarLogo: false
}

export const settings = defineStore({
  id: 'settings',
  state () {
    return {
      ...state
    }
  },
  getters: {},
  actions: {
    CHANGE_SETTING(key, value){
      if (this.hasOwnProperty(key)) {
        this[key] = value
      }
    }
  }
});

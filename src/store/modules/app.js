import Cookies from "js-cookie";
import { defineStore } from "pinia";

const state = {
  sidebar: {
    opened: Cookies.get("sidebarStatus")
      ? !!+Cookies.get("sidebarStatus")
      : true,
    withoutAnimation: false,
  },
  device: "desktop",
};

export const app = defineStore({
  id: "app",
  state() {
    return {
      ...state,
    };
  },
  getters: {},
  actions: {
    toggleSideBar(value) {
      this.sidebar.opened = !this.sidebar.opened;
      this.sidebar.withoutAnimation = false;
      if (this.sidebar.opened) {
        Cookies.set("sidebarStatus", 1);
      } else {
        Cookies.set("sidebarStatus", 0);
      }
    },
    closeSideBar(value) {
      Cookies.set("sidebarStatus", 0);
      this.sidebar.opened = false;
      this.sidebar.withoutAnimation = value;
    },
    toggleDevice(value) {
      this.device = value;
    },
  },
});

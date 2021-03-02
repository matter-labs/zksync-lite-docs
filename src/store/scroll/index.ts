import { GetterTree, MutationTree } from "vuex";
import { RootState } from "@/store";

export const state = () => {
  return {
    lastScroll: false as false | Number,
    lastPath: "" as String,
  };
};

export type ScrollModuleState = ReturnType<typeof state>;

export const mutations: MutationTree<ScrollModuleState> = {
  setLastScroll(state: { lastScroll: boolean | Number }, lastScroll: Number) {
    if (!lastScroll) {
      state.lastScroll = false;
    } else {
      state.lastScroll = lastScroll;
    }
  },
  setLastPath(state: { lastPath: String }, lastPath: String) {
    state.lastPath = lastPath;
  },
};

export const getters: GetterTree<ScrollModuleState, RootState> = {
  getLastScroll(state: { lastScroll: boolean | Number }): boolean | Number {
    return state.lastScroll;
  },
  getLastPath(state: { lastPath: String }): String {
    return state.lastPath;
  },
};

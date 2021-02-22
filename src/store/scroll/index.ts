import { GetterTree, MutationTree } from "vuex";
import { RootState } from "~/store";

export const state = () => ({
  lastScroll: false as false | Number,
  lastPath: "" as String,
});

export type ScrollModuleState = ReturnType<typeof state>;

export const mutations: MutationTree<ScrollModuleState> = {
  setLastScroll(state, lastScroll: Number) {
    state.lastScroll = lastScroll ?? false;
  },
  setLastPath(state, lastPath: String) {
    state.lastPath = lastPath;
  },
};

export const getters: GetterTree<ScrollModuleState, RootState> = {
  getLastScroll(state): false | Number {
    return state.lastScroll;
  },
  getLastPath(state): String {
    return state.lastPath;
  },
};

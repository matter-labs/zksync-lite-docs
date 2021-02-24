import { ActionTree, GetterTree } from "vuex";

export const state = () => {
  return {};
};
export type RootState = ReturnType<typeof state>;
export const getters: GetterTree<RootState, RootState> = {};
export const actions: ActionTree<RootState, RootState> = {};

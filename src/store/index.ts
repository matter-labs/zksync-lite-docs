import { ActionTree, GetterTree, MutationTree } from "vuex";

export const state = () => ({});
export type RootState = ReturnType<typeof state>;
export const getters: GetterTree<RootState, RootState> = {};
export const mutations: MutationTree<RootState> = {};
export const actions: ActionTree<RootState, RootState> = {};

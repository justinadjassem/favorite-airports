import { Module } from "vuex";
import { getters } from "./airport-getters";
import { actions } from "./airport-actions";
import { mutations } from "./airport-mutations";

import { AirportState } from "./types";
import { RootState } from "@/store/types";

export const state: AirportState = {
    favorites : undefined
};

export const airport : Module<AirportState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
import { GetterTree } from "vuex";
import { AirportState } from "./types";
import { RootState } from "@/store/types";
import { airport } from "@/models/airports";

export const getters: GetterTree<AirportState, RootState> = {
    getFavorite(state) : airport[] | undefined {
        return state.favorites;
    }
}
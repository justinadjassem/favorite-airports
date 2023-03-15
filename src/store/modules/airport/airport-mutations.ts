import { MutationTree } from "vuex";
import { AirportState } from "./types";
import { airport } from "@/models/airports";

export const mutations : MutationTree<AirportState> = {
    setFavorite(state, payload : airport | undefined){
        console.log(payload)
        state.favorites? state.favorites.push(payload!) : state.favorites = [payload!]
        // state.favorites?.push(payload!)
    }
}
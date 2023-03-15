import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { AirportState } from "./types";


export const actions : ActionTree<AirportState, RootState> = {
    setFavorite(context, payload){
        console.log(payload)
        context.commit("setFavorite", payload)
    }
}
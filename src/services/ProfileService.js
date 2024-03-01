import { AppState } from "../AppState.js";
import { Profile } from "../models/Profile.js";
import { api } from "./AxiosService.js"


class ProfileService {
    async getProfileById(id) {
        const response = await api.get(`api/profiles/${id}`)
        console.log('GOT PROFILE', response.data);
        const activeProfile = new Profile(response.data)
        AppState.activeProfile = activeProfile
    }
}

export const profileService = new ProfileService()
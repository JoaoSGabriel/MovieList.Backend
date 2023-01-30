import httpStatus from "http-status";
import { requestError } from "../errors/request-error";
import profileRepository from "../repositories/profile.repository";

async function getProfile(username: string) {
  const profile = await profileRepository.findByUsername(username);

  if (!profile) {
    throw requestError(httpStatus.NOT_FOUND, "Perfil não encontrado");
  }

  return profile;
}

const profileService = {
  getProfile,
};

export default profileService;

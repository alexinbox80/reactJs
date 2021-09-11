
const getProfile = (state) => state.profile.profile || [];

export const profileSelectors = {
    getProfile
};

export const getProfileLoading = (state) => state.profile.isLoading;


// const getProfile = (state) => {
//     console.log('state ', state);
//     return state.profile.checkBox || [];
// };

const getProfile = (state) => state.profile.checkBox || [];

export const profileSelectors = {
    getProfile
};

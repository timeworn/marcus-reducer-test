import * as ACTION_TYPES from "./action_type"

export const login = (data: userInfo) => {
    return {
        type: ACTION_TYPES.LOGIN,
        email: data.email,
        token: data.token,
    };
};

export const logout = () => {
    return {
        type: ACTION_TYPES.LOGOUT,
    };
};
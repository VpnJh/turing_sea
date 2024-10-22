import { createAction } from "@reduxjs/toolkit";

export const setUserInfo = createAction("SET_USERINFO");
export const clearUserInfo = createAction("CLEAR_USERINFO");
const initialState = {
  // 你的初始状态
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case setUserInfo.type:
      return {
        ...state,
        ...action.payload
      };
    case clearUserInfo.type:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;

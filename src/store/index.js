import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reduces/user/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// 定义持久化配置
const persistConfig = {
  key: import.meta.env.VITE_APP_STORAGE_KEY,
  storage,
  // 设置白名单 reducer 会被缓存
  whitelist: [],
  // 设置黑名单的 reducer 不会被缓存
  blacklist: []
};
// 持续开发往下 添加reducer
const reducer = combineReducers({ userReducer });
// 创建持久化reducer
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
});
const persistor = persistStore(store);

export { store, persistor };

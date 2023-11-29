import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// 새로고침 시 state 초기화 방지 (localstorage 방식)
const { persistAtom } = recoilPersist();

export const menuId = atom({
  key: "menuId",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const searchText = atom({
  key: "searchText",
  default: "",
});

export const patch = atom({
  key: "patch",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const champion = atom({
  key: "champion",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

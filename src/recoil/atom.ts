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

export const searchChampion = atom({
  key: "searchChampion",
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

export const filteredChampion = atom({
  key: "filteredChampion",
  default: champion,
});

export const position = atom({
  key: "position",
  default: [
  // { name: "전체", image: "", id: 0 },
    { name: "탑", image: "/images/Position_Top.png", id: 1 },
    { name: "정글", image: "/images/Position_Jungle.png", id: 2 },
    { name: "미드", image: "/images/Position_Mid.png", id: 3 },
    { name: "바텀", image: "/images/Position_Bot.png", id: 4 },
    { name: "서폿", image: "/images/Position_Support.png", id: 5 },]
});

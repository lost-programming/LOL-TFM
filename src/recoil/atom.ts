import { atom } from "recoil";

export const menuId = atom({
  key: "menuId",
  default: 0,
});

export const searchText = atom({
  key: "searchText",
  default: "",
});

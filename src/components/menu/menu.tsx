"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { menuId } from "@/recoil/atom";
import { styled, Box, Tab, Tabs } from "@mui/material";

interface menuItemsType {
  name: string;
  path: string;
  id: number;
}

const InternalBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CustomTab = styled(Tab)({
  fontSize: 18,
});

const Menu = () => {
  const router = useRouter();

  const [id, setId] = useRecoilState(menuId);
  const menuItems: menuItemsType[] = [
    { name: "LOL-TFM", path: "/", id: 0 },
    { name: "챔피언 분석", path: "/champion", id: 1 },
    { name: "팀 조합", path: "/team", id: 2 },
    { name: "챌린저 랭킹", path: "/ranking", id: 3 },
    { name: "프로 경기 분석", path: "/progame", id: 4 },
    { name: "격전 도우미", path: "/clash", id: 5 },
  ];

  const menuClick = (item: menuItemsType) => {
    setId(item.id);
    router.push(item.path);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <InternalBox sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={id}>
          {menuItems.map((item: menuItemsType, index: number) => {
            return (
              <CustomTab
                label={item.name}
                key={index}
                onClick={() => menuClick(item)}
              />
            );
          })}
        </Tabs>
      </InternalBox>
    </Box>
  );
};

export default Menu;

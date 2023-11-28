import React from "react";
import { menuItemsType } from "@/types/types";
import { styled, Tab } from "@mui/material";

interface MenuTabProps {
  item: menuItemsType;
  label: string;
  onClick: (item: menuItemsType) => void;
}

const CustomTab = styled(Tab)({
  fontSize: 18,
});

const MenuTab = ({ item, label, onClick }: MenuTabProps) => {
  return <CustomTab label={label} onClick={() => onClick(item)} />;
};

export default MenuTab;

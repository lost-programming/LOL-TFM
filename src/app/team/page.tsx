import React from "react";

const latestPatchVersion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
  );
  return Array(res.json())[0];
};

const getChampData = async () => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestPatchVersion()}/data/ko_KR/champion.json`,
  );

  if (!res.ok) {
    throw new Error("챔피언 데이터를 찾을 수 없습니다.");
  }
  return res.json();
};

const Team = async () => {
  const champData = await getChampData();
  console.log(champData);
  return <div></div>;
};

export default Team;

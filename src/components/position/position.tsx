import Image from "next/image";

interface PositionProps {
  width: number;
  height: number;
}

interface PositionType {
  name: string;
  image: string;
  id: number;
}

const Position = ({ width, height }: PositionProps) => {
  const positionList: PositionType[] = [
    { name: "전체", image: "", id: 0, },
    { name: "탑", image: "/Position_Top.png", id: 1, },
    { name: "정글", image: "/Position_Jungle.png", id: 2, },
    { name: "미드", image: "/Position_Mid.png", id: 3, },
    { name: "바텀", image: "/Position_Bot.png", id: 4, },
    { name: "서폿", image: "/Position_Support.png", id: 5, },
  ];

  return (
    <div>
      {positionList.map((position: PositionType, index: number) => {
        return (
          <Image
            key={index}
            src={position.image}
            alt={position.name}
            width={width}
            height={height}
            loading="lazy"
          />
        );
      })}
    </div>
  );
};

export default Position;
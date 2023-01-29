import { FC, memo } from "react";

type GenrePillProps = {
  name:String;
}

const GenrePill:FC<GenrePillProps> = ({name}) => {
  return <p className="font-semibold">{name}</p>;
};

export default memo(GenrePill);

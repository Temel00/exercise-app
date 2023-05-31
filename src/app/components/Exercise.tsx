import {FunctionComponent, PropsWithChildren} from "react";

interface ExerProps {
  name: string;
  type: string;
  muscle: string;
  equip: string;
  diff: string;
  inst: string;
}

const Exercise: FunctionComponent<ExerProps> = ({
  name,
  type,
  muscle,
  equip,
  diff,
  inst,
}) => {
  return (
    <div className="exerContent flex items-center flex-col">
      <h1 className="exerName">{name}</h1>
      <div className="exerDetails flex items-start flex-col">
        {diff == "beginner" && (
          <div className="bg-green-300 w-full">Beginner</div>
        )}
        {diff == "intermediate" && (
          <div className="bg-yellow-300 w-full">Intermediate</div>
        )}
        {diff == "expert" && <div className="bg-red-300 w-full">Expert</div>}
        <p>type = {type}</p>
        <p>muscle = {muscle}</p>
        <p>equipment = {equip}</p>
        <p>instructions = {inst.substring(0, 25) + "..."}</p>
      </div>
    </div>
  );
};

export default Exercise;

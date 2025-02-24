import React from "react";

const Skill = ({ skill }: { skill: string }) => {
  return (
    <div className="bg-yellow-200 rounded-2xl px-2 py-1 flex justify-center items-center text-amber-500">{skill}</div>
  );
};

export default Skill;

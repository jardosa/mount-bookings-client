import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import LeaderInfoBlock from "../components/LeaderInfoBlock";
import { FormValues } from "../interfaces";

const LeaderTab = ({
  register,
  index,
}: {
  register: UseFormRegister<FormValues>;
  index: number;
}) => {
  return <LeaderInfoBlock index={index} register={register} />;
};

export default LeaderTab;

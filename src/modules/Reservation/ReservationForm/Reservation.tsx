import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  useCreateReservationMutation,
  CreateReservationInput,
} from "../../../generated/graphql";

import { FormValues, MemberInterface } from "./interfaces";
import LeaderInfoBlock from "./components/LeaderInfoBlock";
import MemberInfoBlock from "./components/MemberInfoBlock";

const Reservation = () => {
  const [leader, setLeader] = useState<MemberInterface>();
  const [members, setMembers] = useState<MemberInterface[]>();
  const [memberCount, setMemberCount] = useState(1);
  const [createReservation, { data, loading, error }] =
    useCreateReservationMutation();

  const { register, handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      leader: {
        firstName: "John Christian",
        lastName: "Ardosa",
        birthday: new Date("01/31/1990"),
        phoneNumber: "9176475551",
        email: "jardosa@live.com",
        emergencyContactEmailAddress: "mercy.m633@gmail.com",
        emergencyContactName: "Mercy Caba",
        emergencyContactNumber: "09178307388",
      },
      members: [
        {
          firstName: "Mercy",
          lastName: "Caba",
          birthday: new Date("10/10/1988"),
          phoneNumber: "9178307388",
          email: "mercy.m633@gmail.com",
          emergencyContactEmailAddress: "jardosa@live.com",
          emergencyContactName: "John Christian Ardosa",
          emergencyContactNumber: "09176475551",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "members",
    control,
  });

  const addMemberForm = () => {
    append({});
  };

  const onSubmit = (data: FormValues) => {
    const input: CreateReservationInput = {
      leader: data.leader,
      members: data.members,
    };
    // createReservation({
    //   variables: {
    //     createReservationInput: data,
    //   },
    // });
    console.log(data);
  };
  return (
    <div className="w-full">
      <div className="w-1/2 mx-auto flex justify-center  p-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full grid place-items-center"
        >
          <div className="text-2xl my-5 font-bold">General Details</div>
          <div className="flex gap-5 text-lg justify-between w-full">
            <div className="flex flex-col">
              <div>
                <label className="font-medium" htmlFor="">
                  Date Start
                </label>
              </div>
              <input
                type="date"
                {...register("dateStart")}
                className="rounded-sm border-2"
              />
            </div>
            <div className="flex flex-col">
              <div>
                <label className="font-medium" htmlFor="">
                  Date End
                </label>
              </div>
              <input
                type="date"
                {...register("dateEnd")}
                className="rounded-sm border-2"
              />
            </div>
          </div>

          <div className="text-2xl my-5 font-bold ">Leader</div>
          <LeaderInfoBlock register={register} index={0} />

          <div className="text-2xl my-5 font-bold">Members</div>

          {fields.map((field, index) => (
            <MemberInfoBlock
              remove={remove}
              key={field.id}
              register={register}
              index={index}
            />
          ))}
          <button
            className="hover:text-green-600 duration-100 transition flex justify-center items-center gap-2"
            type="button"
            onClick={addMemberForm}
          >
            <AiOutlinePlusCircle className="w-[30px] h-[30px] " />
            <span className="font-bold">Add Member</span>
          </button>

          <div className="flex justify-between">
            <input
              type="submit"
              className="m-5 p-2 text-lg max-w-[96px] w-full h-[42px] rounded-md bg-green-400 cursor-pointer hover:scale-105 transition hover:bg-green-300 text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;

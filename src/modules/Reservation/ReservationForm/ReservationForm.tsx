import { Tab } from "@headlessui/react";
import React, { useContext, useState } from "react";
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
  CreateReservationInput,
  useCreateReservationMutation,
} from "../../../generated/graphql";
import { Context } from "../../../utils/context/context";
import MemberInfoBlock from "./components/MemberInfoBlock";
import { FormValues, MemberInterface } from "./interfaces";
import DisclaimerTab from "./ReservationFormTabs/DisclaimerTab";
import GeneralDetailsTab from "./ReservationFormTabs/GeneralDetailsTab";
import LeaderTab from "./ReservationFormTabs/LeaderTab";
import MembersTab from "./ReservationFormTabs/MembersTab";

const ReservationForm = () => {
  const [leader, setLeader] = useState<MemberInterface>();
  const [members, setMembers] = useState<MemberInterface[]>();
  const [memberCount, setMemberCount] = useState(1);
  const [createReservation, { data, loading, error }] =
    useCreateReservationMutation();

  const context = useContext(Context);
  console.log(context);

  const formMethods = useForm<FormValues>({
    criteriaMode: "all",
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

    if (Object.keys(formMethods.formState.errors).length) {
      context.setSnackbarData({ msg: "Hello", err: true });
    }
  };
  const { fields, append, remove } = useFieldArray({
    name: "members",
    control: formMethods.control,
  });

  const tabs = [
    // { name: "Disclaimer", node: <DisclaimerTab /> },
    { name: "General", node: <GeneralDetailsTab /> },
    {
      name: "Leader",
      node: <LeaderTab register={formMethods.register} index={0} />,
    },
    {
      name: "Members",
      node: (
        <div className="space-y-5">
          {fields.map((field, index) => (
            <MemberInfoBlock key={field.id} remove={remove} index={index} />
          ))}
          <button
            className="hover:text-green-600 duration-100 transition flex justify-center items-center gap-2"
            type="button"
            onClick={() => append({})}
          >
            <AiOutlinePlusCircle className="w-[30px] h-[30px] " />
            <span className="font-bold">Add Member</span>
          </button>
          <div className="flex justify-between">
            <input
              type="submit"
              className="p-2 text-lg max-w-[96px] w-full h-[42px] rounded-md bg-green-400 cursor-pointer hover:scale-105 transition hover:bg-green-300 text-white"
            />
          </div>
        </div>
      ),
    },
  ];

  const addMemberForm = () => {
    append({});
  };

  return (
    <>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className="mx-auto max-w-[768px] my-5 w-full"
        >
          <Tab.Group>
            <Tab.List className="border bg-gray-400 rounded-md bg-opacity-30 flex justify-evenly">
              {tabs.map(({ name }) => (
                <Tab
                  className={({ selected }) =>
                    `rounded-md flex-1 py-2 hover:bg-white text-stone-600 hover:bg-opacity-80 transition ${
                      selected && "bg-white"
                    }`
                  }
                  key={name}
                >
                  {name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="bg-gray-200 rounded-md bg-opacity-30 my-5 p-5">
              {tabs.map(({ name, node }, index) => (
                <Tab.Panel key={name}>
                  <div>{node}</div>
                  {/* <div className="flex justify-center gap-5 my-5">
                {index === 0 && (
                  <button type="button" onClick={} className="bg-red-600 text-white rounded-md w-[90px] px-5 py-2">
                    Back
                  </button>
                )}

                <button type="button" onClick={} className="bg-green-600 text-white rounded-md w-[90px] px-5 py-2">
                  Green
                </button>
              </div> */}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </form>
      </FormProvider>
    </>
  );
};

export default ReservationForm;

import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { FormValues } from "../interfaces";

function LeaderInfoBlock({
  register,
  index,
}: {
  register: UseFormRegister<FormValues>;
  index: number;
}) {
  return (
    <div className="text-lg flex flex-col gap-5 ">
      <div className="flex gap-5">
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            className="rounded-sm border-2 p-1"
            {...register(`leader.firstName`, { required: true, maxLength: 50 })}
            type="text"
            id="firstName"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="rounded-sm border-2 p-1"
            {...register(`leader.lastName`, { required: true, maxLength: 50 })}
            type="text"
            id="lastName"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            className="rounded-sm border-2 p-1"
            {...register(`leader.phoneNumber`, {
              required: true,
              maxLength: 20,
            })}
            type="tel"
            id="phoneNumber"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col">
          <label htmlFor="emailAddress">Email Address</label>
          <input
            className="rounded-sm border-2 p-1"
            {...register(`leader.email`, { required: true, maxLength: 50 })}
            type="email"
            id="emailAddress"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="birthday">Date of Birth</label>
          <input
            className="rounded-sm border-2 p-1"
            {...register(`leader.birthday`, { required: true })}
            type="date"
            id="birthday"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col">
          <label htmlFor="emergencyContactName">Emergency Contact Name</label>
          <input
            className="rounded-sm border-2 p-1"
            {...register(`leader.emergencyContactName`, {
              required: true,
              maxLength: 50,
            })}
            type="text"
            id="emergencyContactName"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="emergencyContactNumber">
            Emergency Contact Number
          </label>
          <input
            className="rounded-sm border-2 p-1"
            {...register(`leader.emergencyContactNumber`, { required: true })}
            type="tel"
            id="emergencyContactNumber"
          />
        </div>
      </div>
      <div className="flex gap-5 items-end">
        <div className="flex flex-col">
          <label htmlFor="emergencyContactEmailAddress">
            Emergency Contact Email Address
          </label>
          <input
            className="rounded-sm border-2 p-1"
            {...register(`leader.emergencyContactEmailAddress`, {
              required: true,
              maxLength: 50,
            })}
            type="email"
            id="emergencyContactEmailAddress"
          />
        </div>
      </div>
    </div>
  );
}

export default LeaderInfoBlock;

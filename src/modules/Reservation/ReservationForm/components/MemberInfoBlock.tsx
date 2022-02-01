import {
  FieldValues,
  useForm,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";
import { FormValues } from "../interfaces";

function MemberInfoBlock({
  index,
  remove,
}: {
  remove: (index?: number | number[]) => void;
  index: number;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  console.log(errors.members?.[index].firstName);
  return (
    <div className="text-base flex flex-wrap relative gap-7  ">
      <div className="flex flex-col flex-1 relative">
        <label htmlFor="firstName">First Name</label>
        <input
          className="rounded-sm border-2 p-1"
          {...register(`members.${index}.firstName`, {
            required: "This field is required",
          })}
          type="text"
          id="firstName"
        />
        {errors.members?.[index].firstName && (
          <span className="text-red-500 text-sm absolute -bottom-5">
            {errors.members?.[index].firstName?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 relative">
        <label htmlFor="lastName">Last Name</label>
        <input
          className="rounded-sm border-2 p-1"
          {...register(`members.${index}.lastName`, {
            required: "This field is required",
          })}
          type="text"
          id="lastName"
        />
        {errors.members?.[index].lastName && (
          <span className="text-red-500 text-sm absolute -bottom-5">
            {errors.members?.[index].lastName?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 relative">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          className="rounded-sm border-2 p-1"
          {...register(`members.${index}.phoneNumber`, {
            required: "This field is required",
          })}
          type="tel"
          id="phoneNumber"
        />
        {errors.members?.[index].phoneNumber && (
          <span className="text-red-500 text-sm absolute -bottom-5">
            {errors.members?.[index].phoneNumber?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 relative">
        <label htmlFor="emailAddress">Email Address</label>
        <input
          className="rounded-sm border-2 p-1"
          {...register(`members.${index}.email`, {
            required: "This field is required",
          })}
          type="email"
          id="emailAddress"
        />
        {errors.members?.[index].email && (
          <span className="text-red-500 text-sm absolute -bottom-5">
            {errors.members?.[index].email?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 relative">
        <label htmlFor="birthday">Date of Birth</label>
        <input
          className="rounded-sm border-2 p-1"
          {...register(`members.${index}.birthday`, {
            required: "This field is required",
            valueAsDate: true,
            validate: {
              blankDate: (v) =>
                (v instanceof Date && !isNaN(v.valueOf())) ||
                "Must provide valid date",
              futureDated: (v) =>
                v < new Date() ||
                "Birthday should be earlier than current date",
            },
          })}
          type="date"
          id="birthday"
        />
        {errors.members?.[index].birthday && (
          <span className="text-red-500 text-sm absolute -bottom-5">
            {errors.members?.[index].birthday?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 relative">
        <label htmlFor="emergencyContactName">Emergency Contact Name</label>
        <input
          className="rounded-sm border-2 p-1"
          {...register(`members.${index}.emergencyContactName`, {
            required: "This field is required",
          })}
          type="text"
          id="emergencyContactName"
        />
        {errors.members?.[index].emergencyContactName && (
          <span className="text-red-500 text-sm absolute -bottom-5">
            {errors.members?.[index].emergencyContactName?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 relative">
        <label htmlFor="emergencyContactNumber">Emergency Contact Number</label>
        <input
          className="rounded-sm border-2 p-1"
          {...register(`members.${index}.emergencyContactNumber`, {
            required: "This field is required",
          })}
          type="tel"
          id="emergencyContactNumber"
        />
        {errors.members?.[index].emergencyContactNumber && (
          <span className="text-red-500 text-sm absolute -bottom-5">
            {errors.members?.[index].emergencyContactNumber?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 relative">
        <label htmlFor="emergencyContactEmailAddress">
          Emergency Contact Email Address
        </label>
        <input
          className="rounded-sm border-2 p-1"
          {...register(`members.${index}.emergencyContactEmailAddress`, {
            required: "This field is required",
          })}
          type="email"
          id="emergencyContactEmailAddress"
        />
        {errors.members?.[index].emergencyContactEmailAddress && (
          <span className="text-red-500 text-sm absolute -bottom-5">
            {
              errors.members?.[index].emergencyContactEmailAddress?.types
                ?.required
            }
          </span>
        )}
      </div>
      <div>
        <button
          type="button"
          onClick={() => remove(index)}
          className={`${
            index === 0 && "invisible"
          } bg-red-400 text-white rounded-md hover:scale-105 transition hover:bg-red-300 p-1`}
        >
          Delete Form
        </button>
      </div>
    </div>
  );
}

export default MemberInfoBlock;

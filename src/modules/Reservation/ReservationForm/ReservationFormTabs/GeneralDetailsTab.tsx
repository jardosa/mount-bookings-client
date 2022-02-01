import React from "react";
import { useFormContext } from "react-hook-form";
import { isDate } from "util/types";
import { FormValues } from "../interfaces";

const GeneralDetailsTab = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  console.log(errors);
  return (
    <div className="flex gap-5">
      <div className="space-y-2">
        <div>
          <label htmlFor="">Start Date</label>
        </div>
        <div>
          <input
            className="p-2 rounded-md"
            type="date"
            {...register("dateStart", {
              valueAsDate: true,
              required: "This field is required",
              validate: {
                blankDate: (v) =>
                  (v instanceof Date && isNaN(v.valueOf())) ||
                  "Must provide valid date",
              },
            })}
          />
          {errors.dateStart && (
            <span className="text-red-500 text-sm absolute -bottom-5">
              {errors.dateStart.message}
            </span>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <label htmlFor="">End Date</label>
        </div>
        <div>
          <input
            className="p-2 rounded-md"
            type="date"
            {...register("dateEnd", {
              required: "This field is required",
              valueAsDate: true,
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralDetailsTab;

import { PHONE_NUMBER_REGEX } from "@/common/constant";
import { BIRTHDAY_REGEX } from "@/common/constant/form/Birthday.constant";
import { EmployeeRole } from "@/common/enum";
import { EmployeeDto } from "@/common/type";
import Joi from "joi";

export const EmployeeValidationSchema = Joi.object<EmployeeDto>({
  name: Joi.string().required(),
  birthday: Joi.string().pattern(BIRTHDAY_REGEX).required(),
  isArchive: Joi.boolean().required(),
  role: Joi.string().valid(...Object.values(EmployeeRole)).required(),
  phone: Joi.string().regex(PHONE_NUMBER_REGEX).required()
});

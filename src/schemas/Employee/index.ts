import { PHONE_NUMBER_REGEX } from "@/common/constant";
import { BIRTHDAY_REGEX } from "@/common/constant/form/Birthday.constant";
import { EmployeeRole } from "@/common/enum";
import { EmployeeDto } from "@/common/type";
import Joi from "joi";

export const EmployeeValidationSchema = Joi.object<EmployeeDto>({
  name: Joi.string().required().messages({
    "any.required": "Это поле обязательно для заполнения",
  }),
  birthday: Joi.string().pattern(BIRTHDAY_REGEX).required().messages({
    "string.pattern.base": "Введите корректную дату рождения",
    "any.required": "Это поле обязательно для заполнения",
  }),
  isArchive: Joi.boolean().required(),
  role: Joi.string().valid(...Object.values(EmployeeRole)).required().messages({
    "any.required": "Это поле обязательно для заполнения"
  }),
  phone: Joi.string().regex(PHONE_NUMBER_REGEX).required().messages({
    "string.pattern.base": "Введите корректный номер телефона",
    "any.required": "Это поле обязательно для заполнения",
  })
});

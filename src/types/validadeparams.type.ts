import type { ZodTypeAny } from "zod";
import type { ParamsType } from "../enums/paramstype.enum";

export type ValidadeParams = {
  schema: ZodTypeAny;
  type: ParamsType;
};

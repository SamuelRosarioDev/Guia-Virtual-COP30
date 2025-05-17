import type { ZodRawShape } from "zod";
import type { ParamsType } from "../enums/paramstype.enum";

export type ValidadeParams = {
    schema: ZodRawShape;
    type: ParamsType;
};
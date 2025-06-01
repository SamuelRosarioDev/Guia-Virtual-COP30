import { z } from "zod";
import { UserType } from "../enums/users.enum";
import { CountryType } from "../enums/users.enum";

export const createUserSchema = {
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  phone: z.string().min(1, "Phone is required"),
  country: z.nativeEnum(CountryType),
  isAdmin: z.boolean().default(false),
  typeUser: z.nativeEnum(UserType),
};
const createUserObject = z.object(createUserSchema);
export type UsersDataDTO = z.infer<typeof createUserObject>;

export const idUserSchema = {
  idUser: z.string().uuid("Invalid user ID"),
};

const idUserObject = z.object(idUserSchema);

export type IdUserDTO = z.infer<typeof idUserObject>;

export const loginSchema = {
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
};

export const updateUserSchema = z.object({
  name: z.string().min(1, "Name cannot be empty").optional(),
  email: z.string().email("Invalid email").optional(),
  password: z.string().min(6, "Password must be at least 6 characters long").optional(),
  phone: z.string().min(1, "Phone cannot be empty").optional(),
  country: z.nativeEnum(CountryType).optional(),
  isAdmin: z.boolean().optional(),
  typeUser: z.nativeEnum(UserType).optional(),
});

export type UpdateUserDTO = z.infer<typeof updateUserSchema>;

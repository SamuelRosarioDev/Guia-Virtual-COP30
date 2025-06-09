import { z } from "zod";
import { UserType } from "../enums/users.enum";
import { CountryType } from "../enums/users.enum";

export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  phone: z.string().min(1, "Phone is required"),
  country: z.nativeEnum(CountryType),
  isAdmin: z.boolean().default(false),
  typeUser: z.nativeEnum(UserType),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});
export type UsersDataDTO = z.infer<typeof createUserSchema>;

export const idUserSchema = z.object({
  idUser: z.string().uuid("Invalid user ID"),
});

export type IdUserDTO = z.infer<typeof idUserSchema>;

export const loginSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});


export const updateUserSchema = z.object({
  name: z.string().min(1, "Name cannot be empty").optional(),
  email: z.string().email("Invalid email").optional(),
  password: z.string().min(6, "Password must be at least 6 characters long").optional(),
  phone: z.string().min(1, "Phone cannot be empty").optional(),
  country: z.nativeEnum(CountryType).optional(),
  isAdmin: z.boolean().optional(),
  typeUser: z.nativeEnum(UserType).optional(),
  updatedAt: z.date().default(() => new Date())
});

export type UpdateUserDTO = z.infer<typeof updateUserSchema>;

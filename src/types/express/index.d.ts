import type { AuthUser } from "../authUser.type";

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

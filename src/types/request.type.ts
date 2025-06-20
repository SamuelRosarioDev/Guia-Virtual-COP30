import type { NextFunction, Request, Response } from "express";

export type BodyRequest<T> = Request<unknown, unknown, T>;
export type BodyResponse<T> = Response<{ message: string; data?: T }>;
export type QueryRequest<T> = Request<unknown, unknown, unknown, T>;
export type ParamsRequest<T> = Request<T>;

import { Request, Response } from "express";

export const apiOverview = (req: Request, res: Response) => {
  res.status(200).json({
    status: "success", message: "Welcome to the Hublit API 🚀",
    documentation: "https://hublit.xyz/docs", // Change this to your docs URL
    available_routes: {
      authentication: "/auth", users: "/users", posts: "/posts",
    },
    timestamp: new Date().toISOString(),
  });
};
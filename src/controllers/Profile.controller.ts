import { Request, Response } from "express";
import { ProfileService } from "../services/Profile.service";

export class ProfileController {
  async get(req: Request, res: Response) {
    const userId = req.user.id;

    const data = await new ProfileService().getLogedUser(userId);

    return res.status(200).json(data);
  }
}

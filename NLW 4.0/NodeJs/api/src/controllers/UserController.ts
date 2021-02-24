import { Request, Response } from "express";
import User from "src/models/User";
import { getRepository } from "typeorm";
class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const userRepository = getRepository(User);

    const userAlredyExists = await userRepository.findOne({ email });

    if (userAlredyExists) {
      return res.status(400).json({
        error: "User alredy exists!",
      });
    }
    const user = userRepository.create({
      name,
      email,
    });
    await userRepository.save(user);
    return res.status(201).json(user);
  }
}
export { UserController };

import { AppDataSource } from "../../datasource";
import { hashPassword } from "../../services/hash.service";
import { User } from "../schema/user.schema";

const userRepository = AppDataSource.getRepository(User);
interface Iuser {
  first_name: string;
  email: string;
  password: string;
}

export const create = async (data: User): Promise<User | null | undefined> => {
  const hashedPassword = await hashPassword(data.password);
  const newData = {
    first_name: data.first_name,
    email: data.email,
    password: hashedPassword,
  };
  const saveData = userRepository.create(newData);
  return await userRepository.save(saveData);
};

export const findOne = async (
  email: string
): Promise<Iuser | null | undefined> => {
  const user = await userRepository.findOne({ where: { email: email } });
  return user;
};

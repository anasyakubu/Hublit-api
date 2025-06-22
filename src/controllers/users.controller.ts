import { Request, Response } from 'express';
const { setupKinde, protectRoute, getUser, GrantType } = require("@kinde-oss/kinde-node-express");


const listAllUsers = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  try {

    const users = getUser(); // Access the user from the request object
    console.log('Users:', users);

    // console.log(req.user);


  } catch (error) {
    console.error('Error listing users:', error);
    res.status(500).json({ status: 500, mgs: 'Internal Server Error', error: error });

  }
}


export { listAllUsers };
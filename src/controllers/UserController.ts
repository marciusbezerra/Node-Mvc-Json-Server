
import { Request, Response } from 'express';
import { IUser } from '../entities/IUser';

const Create = (request: Request, response: Response) => {
    try {
        // const { name, email } = request.body;
        // @ts-ignore
        const user = <IUser>request.body;
        console.log(`${user.name} ${user.email}`);
        response.status(200).json(
            {
                success: true,
                data: user
            }
        )
    } catch (error) {
        console.error(error);
        return response.status(400).json(
            {
                success: false,
                message: error.message || 'Unexpected Error!'
            }
        );
    }
}

export default { Create };
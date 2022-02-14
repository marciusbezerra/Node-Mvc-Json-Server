import { Request, Response } from 'express';
import { IUser } from '../entities/IUser';
const axios = require('axios').default;

const Create = async (request: Request, response: Response) => {

    const user = <IUser>request.body;
    const postResponse = await axios.post('http://localhost:3000/users', user);

    console.log(`post response: ${postResponse}`);
    response.status(postResponse.status).json(
        {
            success: true,
            data: user
        }
    )
}

const Get = async (request: Request, response: Response) => {

    const res = await axios.get('http://localhost:3000/users');

    console.log(`get response: ${res}`);
    response.status(res.status).json(
        {
            success: true,
            data: res.data
        }
    )
}

const GetById = async (request: Request, response: Response) => {

    const res = await axios.get(`http://localhost:3000/users/${request.params.id}`);

    console.log(`post response: ${res}`);
    response.status(res.status).json(
        {
            success: true,
            data: res.data
        }
    )
}

export default { Create, Get, GetById };
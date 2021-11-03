import { NextApiHandler } from 'next';
import { Users } from '@models/user';

export const userList: Users = [
	{ id: '1', name: 'Adam', color: 'red' },
	{ id: '2', name: 'Nick', color: 'green' },
	{ id: '3', name: 'Christian', color: 'blue' },
];

const users: NextApiHandler = (req, res) => {
	res.status(200).json(userList);
};

export default users;

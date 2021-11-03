import { NextApiHandler } from 'next';
import { userList } from '.';

const users: NextApiHandler = (req, res) => {
	const { id } = req.query;
	res.status(200).json(userList.find((user) => user.id === id));
};

export default users;

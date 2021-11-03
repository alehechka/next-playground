import { useRouter } from 'next/router';
import useUser from '@hooks/api/useUser';
import GoBack from '@components/goBack';

const Users = () => {
	const router = useRouter();
	const { data, error } = useUser(router.query.id as string);

	return (
		<div>
			{data && (
				<div>
					<div>{data.name}</div>
					<div>{data.color}</div>
				</div>
			)}
			{!data && <div>loading...</div>}
			{error && <div>failed to load</div>}
			<GoBack />
		</div>
	);
};

export default Users;

import Link from 'next/link';
import useUsers from '@hooks/api/useUsers';
import GoBack from '@components/goBack';

const Users = () => {
	const { data, error } = useUsers();

	return (
		<div>
			<div>users</div>
			{data && (
				<ul>
					{data.map((user) => (
						<li key={user.id}>
							<Link href={`/users/${user.id}`}>
								<a>{user.name}</a>
							</Link>
						</li>
					))}
				</ul>
			)}
			{!data && <div>loading...</div>}
			{error && <div>failed to load</div>}
			<GoBack />
		</div>
	);
};

export default Users;

import { useRouter } from 'next/router';

const GoBack = () => {
	const router = useRouter();

	return <button onClick={router.back}>Go Back</button>;
};

export default GoBack;

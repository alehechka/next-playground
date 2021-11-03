import styled from 'styled-components';
import Link from 'next/link';

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`;

const Home = () => {
	return (
		<>
			<Title>My page</Title>
			<Link href='/users'>
				<a>users</a>
			</Link>
		</>
	);
};

export default Home;

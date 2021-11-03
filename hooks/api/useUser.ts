import fetcher from '@lib/fetcher';
import User from '@models/user';
import useSWR from 'swr';

const useUser = (id: string) => useSWR<User, any>(`/api/users/${id}`, fetcher);

export default useUser;

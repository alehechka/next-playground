import fetcher from '@lib/fetcher';
import { Users } from '@models/user';
import useSWR from 'swr';

const useUsers = () => useSWR<Users, any>('/api/users', fetcher);

export default useUsers;

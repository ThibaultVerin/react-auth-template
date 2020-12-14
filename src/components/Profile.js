import { useQuery } from 'react-query';
import API from '../services/API';

export default function Profile() {
  const { data: profile } = useQuery('me', () =>
    API.get('/me').then((res) => res.data)
  );
  if (!profile) return <p>Loading profile...</p>;

  const logout = async () => {
    try {
      await API.get('/auth/logout');
      console.log('logged out successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>Profile Page</h1>
      <p>{JSON.stringify(profile)}</p>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </>
  );
}

import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log('sending credentials', data);
    // TODO
  };

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          {'Email : '}
          <input
            ref={register}
            name="email"
            id="email"
            type="email"
            autoComplete="username"
          />
        </label>
        <label htmlFor="password">
          {'Password : '}
          <input
            ref={register}
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </label>
        <label htmlFor="stayConnected">
          <input
            ref={register}
            name="stayConnected"
            id="stayConnected"
            type="checkbox"
          />
          Stay connected ?
        </label>
        <input type="submit" value="Log in" />
      </form>
    </>
  );
}

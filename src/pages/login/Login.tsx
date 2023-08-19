import LoginForm from './LoginForm';

export default function Login({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  if (!visible) return null;

  const handleOnClose = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof HTMLElement && e.target.id === 'container') onClose();
  };

  const handleSubmit = () => {
    console.log('Login successful');
    onClose();
  };
  return (
    <div
      id='container'
      onClick={handleOnClose}
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 text-black backdrop-blur-sm'>
      <div className='relative max-w-lg bg-white '>
        <button className='absolute right-0 top-0 p-4 text-right text-lg text-green-500'>x</button>
        <div className='rounded-tr-4xl mt-10 bg-white px-10 pb-8 pt-4'>
          <h1 className='text-center text-4xl font-semibold '>Sign In</h1>
          <LoginForm />
          <div className='mt-4 flex items-center justify-center'>
            <text className='text-black'>Not registered yet?</text>
            <a
              href='#'
              className='ml-2 text-center text-sm font-medium text-green-600 hover:underline focus:outline-none focus:ring-2 focus:ring-green-500'>
              Register now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

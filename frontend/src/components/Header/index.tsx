import Notice from './notice';
import Login from './login';

const Header = () => {
  return (
    <header className="flex-center h-40 flex-col  gap-2 bg-header-img bg-cover">
      <a href="/" className="font-title text-7xl text-title">
        TeJinSa
      </a>
      <div className="flex h-12 w-full max-w-[70rem] items-center justify-between rounded-lg bg-gray-50 bg-opacity-40 shadow-md">
        <Notice message="추가예정" />
        <Login />
      </div>
    </header>
  );
};
export default Header;

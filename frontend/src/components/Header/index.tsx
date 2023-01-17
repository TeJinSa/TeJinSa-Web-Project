import Notice from './notice';
import Login from './login';

const Header = () => {
  return (
    <div className="flex-center h-40 flex-col  gap-2 bg-header-img bg-cover px-8">
      <div className="font-title text-7xl text-title">TeJinSa</div>
      <div className="flex h-12 w-2/3 items-center justify-between rounded-lg bg-gray-50 bg-opacity-40 shadow-md">
        <Notice message="추가예정" />
        <Login />
      </div>
    </div>
  );
};
export default Header;

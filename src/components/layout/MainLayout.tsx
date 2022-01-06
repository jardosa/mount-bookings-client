import Navbar from "./common/Navbar";

const MainLayout: React.FunctionComponent = (props) => {
  return (
    <div className="max-w-[1440px] h-[5000px] mx-auto w-full border border-opacity-50">
      <Navbar />
      <div className="flex w-full ">{props.children}</div>
    </div>
  );
};

export default MainLayout;

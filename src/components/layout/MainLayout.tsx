import Navbar from "./common/Navbar";

const MainLayout: React.FunctionComponent = (props) => {
  return (
    <div className="max-w-[1920px] mx-auto w-full">
      <Navbar />
      <div className="flex ">{props.children}</div>
    </div>
  );
};

export default MainLayout;

import logo from "../assets/logo.png"

const Logo = () => {
  return (
    <div className="flex items-center gap-1 ">
      <img className="w-10 " src={logo} alt="" />
      <h2 className="text-xl font-bold text-shadow-xs">
        Taxi
        <span className="text-[#fcb802]"> Kitchen</span>
      </h2>
    </div>
  );
};

export default Logo;
import { type } from "@testing-library/user-event/dist/type";
import "./style.css";

type NavbarProps = {
  title: string;
};

const Navbar = ({ title }: NavbarProps) => {
  const handeChange = (e: any) => {};

  return (
    <div>
      <h1 className="title">{title}</h1>
      <input type="text" name="fede" onChange={(e) => handeChange(e)} />
    </div>
  );
};

export default Navbar;

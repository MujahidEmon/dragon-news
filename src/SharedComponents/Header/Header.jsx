import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col items-center">
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;
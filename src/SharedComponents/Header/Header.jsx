import logo from "../../assets/logo.png"
import moment from "moment";
const Header = () => {
    return (
        <div className="flex flex-col gap-y-3 mt-4 items-center">
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format('dddd, MMMM D ,YYYY')}</p>
        </div>
    );
};

export default Header;
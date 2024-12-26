import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/swimming.png"
import qZone2 from "../../../assets/class.png"
import qZone3 from "../../../assets/playground.png"

const RightSIdeBar = () => {
    return (
        <div className="lg:w-1/4">
            <div className="mb-9">
                <h1 className="font-bold mb-5">Login With</h1>
                <button className="btn w-full btn-outline btn-primary mb-3">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn w-full btn-outline btn-secondary">
                    <FaGithub></FaGithub>
                    Login With GitHub
                </button>
            </div>
            <div className="mb-9">
                <h1 className="font-bold mb-5 ">Find Us On</h1>
                    <a href="" className="p-4 gap-1 flex items-center border rounded-t-lg">
                        <FaFacebook></FaFacebook>
                        Facebook
                    </a>
                    <a href="" className="p-4 gap-1 flex items-center border-x">
                        <FaTwitter></FaTwitter>
                        Twitter
                    </a>
                    <a href="" className="p-4 gap-1 flex items-center border rounded-b-lg">
                        <FaInstagram></FaInstagram>
                        Instagram
                    </a>
            </div>
            <div className="mb-9 p-4 rounded-lg bg-base-200">
                <h1 className="font-bold">Q-Zone</h1>
                <img className="mb-3" src={qZone1} alt="" />
                <img className="mb-3" src={qZone2} alt="" />
                <img className="mb-3" src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSIdeBar;
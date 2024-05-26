import { useState } from "react";
import "../../css/navbarStyles.css";
import { icons } from "../../constants";
import { Link, useNavigate } from "react-router-dom";

const NavRuangPertemanan = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const token = localStorage.getItem("token");
  const nama = localStorage.getItem("name");
  const logout = () => {
    localStorage.clear();
    navigate("/ruang/v1/home");
    window.location.reload(false);
  };
  
  return (
    <div className="">
      <nav className="NavbarItems">
        <h1 className="navbar-logo overflow-hidden whitespace-nowrap font-bold sm:text-md">
          Ruang Pertemanan
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={nav ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={!nav ? "nav-menu" : "nav-menu active"}>
          <li>
            <Link className="nav-links" to={"/ruang/v1/home"}>
              <i className="fa-solid fa-house-user" />
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" to={"/ruang/v1/home-about"}>
              <i className="fa-solid fa-circle-info" />
              About
            </Link>
          </li>
          <li>
            <div className="nav-links dropdown">
              {/* <i className="fa-solid fa-circle-info" /> */}
              <div className="flex justify-start">
                <icons.BiCategory size={20} className="mt-1" />
                <h1 className="ms-2 text-left">Category</h1>
              </div>
              {/* <div className="dropbtn "></div> */}
              <div className="dropdown-content rounded-xl border-t-4 border-cyan-500 md:-ms-4">
                <Link to={"/ruang/v1/home-puisi"}>Puisi</Link>
                <Link to={"/ruang/v1/home-story"}>Story</Link>
                <Link to={"/ruang/v1/home-article"}>Article</Link>
              </div>
            </div>
          </li>
          {token ? (
            <>
              <li>
                <div className="nav-links dropdown w-40">
                  <div className="flex justify-start">
                    {/* <icons.PiImageSquareFill /> */}
                    {nama?nama:"Users"}
                  </div>
                  <div className="dropdown-content-profile rounded-xl border-t-4 mx-auto border-cyan-500 md:-ms-4">
                    <Link
                      className="content-link"
                      to={"/ruang/v1/profile-user"}
                    >
                      <i className="fa-solid fa-circle-user"></i> Profile
                    </Link>
                    <div className="content-link" onClick={logout}>
                      <i className="fa fa-sign-out hover:text-red-600" aria-hidden="true" />
                      Exit
                    </div>
                  </div>
                </div>
              </li>
            </>
          ) : (
            <>
              <li>
                <button className="">
                  <Link to={"/ruang/v1/auth/login"}>Login</Link>
                </button>
                <button className="nav-links-mobile">
                  <Link to={"/ruang/v1/auth/login"}>Login</Link>
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[30%] left-0 z-50">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700 rounded-md">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="https://www.youtube.com/@ruangpertemanan4194"
            >
              Youtube <icons.AiFillYoutube size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700 rounded-md">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="/"
            >
              Instagram <icons.BsInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900 rounded-md">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="https://discord.gg/jNPAHAUS"
            >
              Discord <icons.BsDiscord size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
// }
export default NavRuangPertemanan;

import { Link } from "react-router-dom";
import logo from "../../../public/logo.png"; // Adjust the path to your logo image

export default function Footer() {
  return (
    <>
      <div className="flex flex-col bg-gray-500">
        <div className="w-full draggable">
          <div className="container flex flex-col mx-auto">
            <div className="flex flex-col w-full items-center my-10">
              <span className="mb-4">
                <img src={logo} alt="" width="140" />
              </span>
              <div className="flex flex-col gap-6 items-center mb-8">
                <div className="flex flex-wrap justify-center text-dark-grey-900 gap-5 gap-y-3 items-center lg:flex-nowrap lg:gap-12">
                  <Link to="/About"
                    href="javascript:void(0)"
                    className="text-white hover:text-gray-900"
                  >
                    About
                  </Link>
                  <Link to="/Plans"
                    href="javascript:void(0)"
                    className="text-white hover:text-gray-900"
                  >
                    Plans
                  </Link>
                  <Link to="/More"
                    href="javascript:void(0)"
                    className="text-white hover:text-gray-900"
                  >
                    More
                  </Link>
                  <Link to="/Contact"
                    href="javascript:void(0)"
                    className="text-white hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </div>
                <div className="flex gap-8 items-center">
                  <a
                    href="javascript:void(0)"
                    className="text-grey-700 hover:text-grey-900"
                  >
                    <i class="text-4xl fa-brands fa-square-facebook"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-grey-700 hover:text-grey-900"
                  >
                    <i class="text-4xl fa-brands fa-square-twitter"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-grey-700 hover:text-grey-900"
                  >
                    <i class="text-4xl fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="text-grey-700 hover:text-grey-900"
                  >
                    <i class="text-4xl fa-brands fa-square-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-base text-center text-grey-700 font-normal leading-7">
                  2025 by kero-siha. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

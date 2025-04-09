import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
import petpalLogo from "../assets/img/petpalLogo.png"
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { CiShoppingBasket } from "react-icons/ci";
import { CgMenuCheese } from "react-icons/cg";
import { LuCalendar1 } from "react-icons/lu";



const Header = () => {
  return (
    <>
      {/* <header className="px-1 py-3">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center mx-2' style={{ color: "#ACB9D8" }}><IoLocationOutline style={{ width: "25px", height: "25px", marginRight: "5px", color: "white" }} />
                59 Jakc Street Brooklyn, New York</div>
              <div className='text-light'>/</div>
              <div className='mx-2 d-flex align-items-center' style={{ color: "#ACB9D8" }}><MdOutlineEmail style={{ width: "20px", height: "20px", marginRight: "5px", color: "white" }} />
                Petspostinfo@gmail.com</div>
            </div>

            <div className='d-flex justify-content-between align-items-center'>
              <div className='mx-2 d-flex align-items-center' style={{ color: "#ACB9D8" }}><TbClockHour3 style={{ width: "20px", height: "20px", marginRight: "5px", color: "white" }} />
                Opening Hour: 09.00 am- 11.00 pm</div>
              <div className='text-light'>/</div>
              <div className='mx-2 text-light d-flex justify-content-between align-items-center'>
                <FaFacebookF className='mx-2' />
                <FaTwitter className='mx-2' />
                <FaWhatsapp className='mx-2' />
                <FaInstagram className='mx-2' />

              </div>
            </div>


          </div>
        </div>

      </header>

      <div className='px-2'>
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-lg-between py-3">
            <div className="col-12 col-sm-6 col-md-3 mb-2 mb-md-0">
              <img src={petpalLogo} style={{ width: "170px", height: "50px", objectFit: "contain" }} />
            </div>
            <ul className="nav col-12 col-sm-6 col-md-5 mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2">Home</Link></li>
              <li><Link to="/about" className="nav-link px-2">About</Link></li>
              <li><Link to="/shop" className="nav-link px-2">Shop</Link></li>
              <li><Link to="/allpets" className="nav-link px-2">All Pets</Link></li>
              <li><Link to="/ourteams" className="nav-link px-2">Our teams</Link></li>
              <li><Link to="/contact" className="nav-link px-2">Contact</Link></li>
            </ul>
            <div className="col-12 col-sm-6 col-md-4 text-end">
              <button className='btn'><IoIosSearch style={{ width: "35px", height: "35px", color: "#686677" }} /></button>
              <button className='btn'><CiShoppingBasket style={{ width: "35px", height: "35px", color: "#686677" }} /></button>

              <button className='btn' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><CgMenuCheese style={{ width: "35px", height: "35px", color: "#686677" }} /></button>
              <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                <img src={petpalLogo} className='mx-2 my-5 ' style={{ width: "170px", height: "50px", objectFit: "contain" }} />
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                  ...
                </div>
              </div>
              <Link to="/contact">
              <button className='btn appointment'><LuCalendar1 style={{ marginRight: "5px" }} />Appointment</button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}


      <header>
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
                  <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
                  <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</a>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                </button>
                {/* Profile dropdown */}
                <div className="relative ml-3">
                  <div>
                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
                    </button>
                  </div>
                  {/*
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
                  <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                    {/* Active: "bg-gray-100 outline-hidden", Not Active: "" */}
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu, show/hide based on menu state. */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
              <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
            </div>
          </div>
        </nav>


      </header>

    </>
  )
}

export default Header
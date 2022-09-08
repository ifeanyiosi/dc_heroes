import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#790252] p-4">
      <span>Ifeanyi's App</span>
      <div>
        <GiHamburgerMenu />
      </div>
      <div className="gap-8 hidden sm:flex justify-center text-white pr-8">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

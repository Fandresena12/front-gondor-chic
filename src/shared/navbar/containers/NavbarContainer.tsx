import Navbar from "../components/Navbar";

interface NavbarContainerProps {
  className?: string;
}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ className }) => {
  return <Navbar className={className} />;
};

export default NavbarContainer;

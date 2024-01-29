import Category from "../components/Category";
import LandingCard from "../components/LandingCard";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden ">
      {/* <Navbar /> */}
      <LandingCard />
      <Category />
    </div>
  );
};

export default HomePage;

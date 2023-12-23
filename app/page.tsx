import CraftContent from "./components/CraftContent";
import Details from "./components/Details";
import Header from "./components/Header";
import Icons from "./components/Icons";
import Navbar from "./components/Navbar";
import Statement from "./components/Statement";

const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Icons />
			<Details />
			<Statement />
			<CraftContent />
		</>
	);
};
export default Home;

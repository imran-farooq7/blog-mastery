import CraftContent from "./components/CraftContent";
import Details from "./components/Details";
import Download from "./components/Download";
import Header from "./components/Header";
import Icons from "./components/Icons";
import Navbar from "./components/Navbar";
import Statement from "./components/Statement";
import Testimonials from "./components/Testimonials";

const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Icons />
			<Details />
			<Statement />
			<CraftContent />
			<Testimonials />
			<Download />
		</>
	);
};
export default Home;

import Footer from "../components/Footer";
import Header from "../components/Header";
import Social from "../components/Social";

const ContactPage = () => {
	return (
		<>
			<Header>
				<div className="hero pt-7 text-white">
					<div className="container-xl">
						<div className="row">
							<div className="col-12">Contact</div>
						</div>
					</div>
				</div>
			</Header>
			<Social />
			<Footer />
		</>
	);
};
export default ContactPage;

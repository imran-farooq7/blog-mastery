import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface Props {
	content: "Potential" | "Craft";
	id: string;
}
const Modal = ({ content, id }: Props) => {
	let detailcontent;
	if (content === "Potential") {
		detailcontent = (
			<div className="row">
				<div className="col-md-6">
					<div className="text-container d-flex flex-column justify-content-center h-100">
						<h2 className="display-6">Unlock Your Blogging Potential</h2>
						<p>
							Are you ready to unleash your true blogging potential? Our ebook,
							"Blog Mastery," provides you with the tools and knowledge to take
							your blog to the next level.
						</p>
						<ul className="list-group list-group-flush lh-3">
							<li className="list-group-item">
								<FontAwesomeIcon
									icon={faSquare}
									className="me-1 text-primary"
								/>
								<span>
									<strong>Unleash Your Creativity</strong>: Our ebook empowers
									you to unleash your creativity and express your unique voice
									through your blog.
								</span>
							</li>
							<li className="list-group-item">
								<FontAwesomeIcon
									icon={faSquare}
									className="me-1 text-primary"
								/>
								<span>
									<strong>Maximize Your Reach:</strong> Learn how to optimize
									your blog for search engines.
								</span>
							</li>
							<li className="list-group-item">
								<FontAwesomeIcon
									icon={faSquare}
									className="me-1 text-primary"
								/>
								<span>
									<strong>Monetization Strategies:</strong> Discover various
									monetization strategies, such as sponsored content & affiliate
									marketing.
								</span>
							</li>
						</ul>
						<div className="d-flex gap-2 py-3">
							<button className="btn btn-primary text-white rounded-5 p-3">
								Free Download
							</button>
							<button className="btn btn-light" data-bs-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="p-5">
						<Image
							src="/images/description.png"
							className="img-fluid"
							width={505}
							height={576}
							alt="get ebook copy"
						/>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className="modal fade" id={id}>
			<div className="modal-dialog modal-lg mt-5">
				<div className="modal-content p-4">{detailcontent}</div>
			</div>
		</div>
	);
};
export default Modal;

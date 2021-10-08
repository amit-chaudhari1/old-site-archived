const title = "Amit Chaudhari - Full-Stack Developer";
const description =
	"Designer, Developer, tech enthusiast and Engineer of sorts. Loves to talk about guitars and Mechanical keyboards.";

const SEO = {
	title,
	description,
	canonical: "https://amyth.dev",
	openGraph: {
		type: "website",
		locale: "en_IN",
		url: "https://amyth.dev",
		title,
		description,
		images: [
			{
				url: "https://amyth.dev/static/images/banner.jpg",
				alt: title,
				width: 2240,
				height: 1260
			}
		]
	},
	twitter: {
		handle: "@amyth_dev",
		site: "@amyth_dev",
		cardType: "summary_large_image"
	}
};

export default SEO;

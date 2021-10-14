const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/
});

module.exports = withMDX({
	pageExtensions: ["js", "jsx", "mdx"],
	images: {
		domains: ["github.com", "books.google.com"]
	}
});

 module.exports.redirects = async function () {
    return [
      {
        source: '/resume',
        destination: '/resume.pdf',
        permanent: true,
      },
      {
        source: '/cv',
        destination: '/resume.pdf',
        permanent: true,
      },
      {
        source: '/blog',
        destination: 'https://blog.amyth.dev',
        permanent: true,
      },
    ]
  };


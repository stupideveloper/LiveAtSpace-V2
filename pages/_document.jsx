import Document, { Html, Head, Main, NextScript } from "next/document";


class CustomDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
	componentDidMount() {
		console.log("Using custom document");
	}
}
export default CustomDocument;

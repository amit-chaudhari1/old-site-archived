import { Client } from "@notionhq/client";

// create a new page inside the notion with a suggestion tag. and that's that.
//TODO: This needs Error handling
export default function handler(req, res) {
	// Parse stringified json

	const body = JSON.parse(req.body);

	sendSuggestion(body)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(405).json(error);
		});

	function sendSuggestion(data) {
		const notion = new Client({ auth: process.env.NOTION_API_KEY });
		const { title, author, message } = data;
		const DATABASE_PARENT = "d32d1a0d431f4df697b14c0e44f2fdd2";

		return notion.pages.create({
			parent: {
				database_id: DATABASE_PARENT
			},
			properties: {
				Title: {
					title: [
						{
							text: {
								content: title
							}
						}
					]
				},
				Author: {
					rich_text: [
						{
							text: {
								content: author
							}
						}
					]
				},
				Message: {
					rich_text: [
						{
							text: {
								content: message
							}
						}
					]
				}
			}
		});
	}
}

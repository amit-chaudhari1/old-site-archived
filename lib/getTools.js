// get a list of the Tools from the notion page that I have on my personal workspace
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
//TODO: error handling
async function queryNotion() {
	const databaseId = "cbf7e9d6d93d4bb0bbeea6a47ccdfdef";
	const response = await notion.databases.query({
		database_id: databaseId
	});
	// console.log(JSON.stringify(response));
	return response;
}

async function maptools() {
	let booksList = [];
	await queryNotion().then((query) => {
		query.results.forEach((element) => {
			const book = {
				id: element.id,
				fields: {
					Name: element.properties.Name.title[0].plain_text,
					Description:
						element.properties.Description.rich_text[0].plain_text,
					Image: element.properties.ImageURL.url,
					Platforms: element.properties.Platforms.multi_select.map(
						(obj) => obj.name
					),
					Link: element.properties.Link.url,
					Affiliate: false
				}
			};
			booksList.push(book);
		});
	});
	return booksList;
}

export default async function getTools() {
	return await maptools();
}

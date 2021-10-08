// // get a list of  the books from the notion page that I have on my personal workspace
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
//TODO: error handling
async function queryNotion() {
	const databaseId = "46bf63a09685431199f6dafbb7bee858";
	const response = await notion.databases.query({
		database_id: databaseId,
		filter: {
			and: [
				{
					property: "DoneReading",
					checkbox: { equals: true }
				},
				{
					property: "CoverURL",
					text: { is_not_empty: true }
				}
			]
		}
	});

	return response;
}

async function mapbooks() {
	let booksList = [];
	await queryNotion().then((query) => {
		query.results.forEach((element) => {
			const book = {
				id: element.id,
				Title: element.properties.Name.title[0].plain_text,
				Author: element.properties.Author?.rich_text[0].plain_text,
				Rating: element.properties.Rating?.number,
				Favorite: element.properties.Favourite.select ? true : false,
				Cover: element.properties.CoverURL?.url,
				Status: element.properties.DoneReading?.checkbox,
				DateRead: element.last_edited_time
			};
			booksList.push(book);
		});
	});
	return booksList;
}

export default async function getBooks() {
	return await mapbooks();
}

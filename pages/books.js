import React from "react";
import {
	chakra,
	Icon,
	VStack,
	HStack,
	Text,
	Heading,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	useColorModeValue,
	SimpleGrid,
	useTab,
	useStyles,
	Link
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import BookCard from "@/components/book-card";
import getBooks from "@/lib/getBooks";
import BookSuggestion from "@/components/book-suggestion";
import { BookOpen, Heart } from "heroicons-react";
import sorter from "sort-isostring";

const Books = ({ books }) => {
	const StyledTab = chakra("button", { themeKey: "Tabs.Tab" });

	return (
		<PageTransition>
			<VStack spacing={8}>
				<Section>
					<VStack>
						<Heading as="h1">Books</Heading>
						<Text
							fontSize={["xl", "2xl"]}
							color={useColorModeValue("gray.500", "gray.200")}
							maxW="lg"
							textAlign="center"
						>
							Welcome to my book corner. Here I track my last
							books and reviews.
						</Text>
						<BookSuggestion />
					</VStack>
				</Section>
				<Section>
					<Tabs
						variant="soft-rounded"
						colorScheme="blue"
						align="center"
						w="100%"
					>
						<TabList>
							<Tab
								bg={useColorModeValue("gray.100", "gray.800")}
								color={useColorModeValue(
									"gray.500",
									"gray.500"
								)}
								_selected={{
									color: "blue.800",
									bg: "blue.100"
								}}
								mr={2}
							>
								<HStack spacing={1}>
									<Icon as={BookOpen} />
									<Text>All</Text>
								</HStack>
							</Tab>
							<Tab
								bg={useColorModeValue("gray.100", "gray.800")}
								color={useColorModeValue(
									"gray.600",
									"gray.500"
								)}
								_selected={{
									color: "red.800",
									bg: "red.100"
								}}
							>
								<HStack spacing={1}>
									<Icon as={Heart} />
									<Text>Favorites</Text>
								</HStack>
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel px={0}>
								<SimpleGrid
									columns={[1, 2]}
									spacingY={8}
									spacingX={4}
									mt={8}
								>
									{books.map((book) => (
										<BookCard
											key={book.id}
											title={book.Title}
											author={book.Author}
											rating={book.Rating}
											isFavorite={book.Favorite}
											cover={book.Cover}
											dateRead={book.DateRead}
										/>
									))}
								</SimpleGrid>
							</TabPanel>
							<TabPanel px={0}>
								<SimpleGrid
									columns={[1, 2]}
									spacingY={8}
									spacingX={4}
									mt={8}
								>
									{books
										.filter((b) => b.Favorite)
										.map((book) => (
											<BookCard
												key={book.id}
												title={book.Title}
												author={book.Author}
												rating={book.Rating}
												isFavorite={book.Favorite}
												cover={book.Cover}
												dateRead={book.DateRead}
											/>
										))}
								</SimpleGrid>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Section>
			</VStack>
		</PageTransition>
	);
};

// something seems off with the faourite/status (I want to keep the functionality where i can filter books as fav.)
export async function getStaticProps() {
	const books = await getBooks();
	console.log(books);

	return {
		props: {
			books
		},
		revalidate: 600
	};
}

export default Books;

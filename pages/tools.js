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
	Box,
	Wrap
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";

import BookSuggestion from "@/components/book-suggestion";
import { BookOpen, DesktopComputer, Heart } from "heroicons-react";
import sorter from "sort-isostring";
import {
	AndroidLogo,
	AppleLogo,
	Globe,
	Monitor,
	WindowsLogo
} from "phosphor-react";
import ToolCard from "../components/tool-card";

import getTools from "@/lib/getTools";

// return name if the platform name matches the platformArr
function perfectPlatform(platformArr, platformName) {
	let result = platformArr.filter((el) => el === platformName);
	if (result.length !== 0) {
		return result.reduce((e) => e);
	} else {
		return "";
	}
}

const Tools = ({ tools }) => {
	return (
		<PageTransition>
			<VStack spacing={8}>
				<Section>
					<VStack>
						<Heading as="h1">Tools</Heading>
						<Text
							fontSize={["xl", "2xl"]}
							color={useColorModeValue("gray.500", "gray.200")}
							maxW="lg"
							textAlign="center"
						>
							A list of my favorite tools that I use on a regular
							basis and that I would recommend to try.
						</Text>
					</VStack>
				</Section>
				<Section>
					<Tabs
						variant="soft-rounded"
						colorScheme="blue"
						align="center"
						w="100%"
					>
						<TabList display="flex" flexWrap="wrap">
							<Tab
								bg={useColorModeValue("gray.100", "gray.800")}
								color={useColorModeValue(
									"gray.500",
									"gray.500"
								)}
								_selected={{
									color: useColorModeValue(
										"gray.100",
										"gray.800"
									),
									bg: useColorModeValue(
										"gray.900",
										"gray.100"
									)
								}}
								mr={2}
								mt={2}
							>
								<HStack spacing={1}>
									<Icon as={AppleLogo} weight="fill" />
									<Text>Mac</Text>
								</HStack>
							</Tab>
							<Tab
								bg={useColorModeValue("gray.100", "gray.800")}
								color={useColorModeValue(
									"gray.600",
									"gray.500"
								)}
								_selected={{
									color: "green.800",
									bg: "green.100"
								}}
								mr={2}
								mt={2}
							>
								<HStack spacing={1}>
									<Icon as={AndroidLogo} weight="fill" />
									<Text>Android</Text>
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
								mr={2}
								mt={2}
								s
							>
								<HStack spacing={1}>
									<Icon as={WindowsLogo} weight="fill" />
									<Text>Windows</Text>
								</HStack>
							</Tab>
							<Tab
								bg={useColorModeValue("gray.100", "gray.800")}
								color={useColorModeValue(
									"gray.600",
									"gray.500"
								)}
								_selected={{
									color: "blue.800",
									bg: "blue.100"
								}}
								mr={2}
								mt={2}
							>
								<HStack spacing={1}>
									<Icon as={DesktopComputer} />
									<Text>Web</Text>
								</HStack>
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel px={0}>
								<SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
									{tools
										.filter(
											(t) =>
												perfectPlatform(
													t.fields.Platforms,
													"Mac"
												) === "Mac"
										)
										.map((tool) => (
											<ToolCard
												key={tool.id}
												name={tool.fields.Name}
												description={
													tool.fields.Description
												}
												image={tool.fields.Image}
												platform={
													tool.fields.Platforms[0]
														.name
												}
												isAffiliate={
													tool.fields.Affiliate
												}
												link={tool.fields.Link}
											/>
										))}
								</SimpleGrid>
							</TabPanel>
							<TabPanel px={0}>
								<SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
									{tools
										.filter(
											(t) =>
												perfectPlatform(
													t.fields.Platforms,
													"Android"
												) === "Android"
										)
										.map((tool) => (
											<ToolCard
												key={tool.id}
												name={tool.fields.Name}
												description={
													tool.fields.Description
												}
												image={tool.fields.Image}
												platform={
													tool.fields.Platforms[0]
														.name
												}
												isAffiliate={
													tool.fields.Affiliate
												}
												link={tool.fields.Link}
											/>
										))}
								</SimpleGrid>
							</TabPanel>
							<TabPanel px={0}>
								<SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
									{tools
										.filter(
											(t) =>
												perfectPlatform(
													t.fields.Platforms,
													"Windows"
												) === "Windows"
										)
										.map((tool) => (
											<ToolCard
												key={tool.id}
												name={tool.fields.Name}
												description={
													tool.fields.Description
												}
												image={tool.fields.Image}
												platform={
													tool.fields.Platforms[0]
														.name
												}
												isAffiliate={
													tool.fields.Affiliate
												}
												link={tool.fields.Link}
											/>
										))}
								</SimpleGrid>
							</TabPanel>
							<TabPanel px={0}>
								<SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
									{tools
										.filter(
											(t) =>
												perfectPlatform(
													t.fields.Platforms,
													"Web"
												) === "Web"
										)
										.map((tool) => (
											<ToolCard
												key={tool.id}
												name={tool.fields.Name}
												description={
													tool.fields.Description
												}
												image={tool.fields.Image}
												platform={tool.fields.Platforms}
												isAffiliate={
													tool.fields.Affiliate
												}
												link={tool.fields.Link}
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

export async function getStaticProps() {
	// const tools = [];
	const tools = await getTools();
	return {
		props: {
			tools
		},
		revalidate: 600
	};
}

export default Tools;

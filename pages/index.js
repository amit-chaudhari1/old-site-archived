import React from "react";
import Head from "next/head";
import {
	Button,
	Box,
	VStack,
	HStack,
	Text,
	IconButton,
	Link,
	Heading,
	SimpleGrid
} from "@chakra-ui/react";
import Container from "../components/container";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import { TwitterLogo } from "phosphor-react";
import ProjectCard from "@/components/project-card";
import { Projects } from "@/lib/getProjects";

const Home = ({ projects }) => (
	<Box>
		<PageTransition>
			<VStack spacing={12}>
				<Section>
					<VStack spacing={4} align="start" fontSize="2xl">
						<Heading size="xl">Hey, I'm Amyth. 👋</Heading>
						<VStack>
							<Text>
								I'm a Fullstack Engineer (backend focused). I
								build apps that scale. I'm also a Designer,
								Developer, Engineer, Tech enthusiast and
								Musician of sorts.
							</Text>
							<Box></Box>
							<Text>
								In my spare time, I develop web apps that make
								life easier for other people. I also hang out on{" "}
								<Link
									variant="text"
									href="https://twitter.com/amyth_dev"
									isExternal
								>
									Twitter
								</Link>
								, where I learn, think and work in public. Love
								to talk about guitars and Mechanical keyboards.
							</Text>
						</VStack>
						<Link href="https://twitter.com/amyth_dev" isExternal>
							<Button
								colorScheme="blue"
								rounded="xl"
								size="lg"
								leftIcon={<TwitterLogo weight="fill" />}
								mt={4}
							>
								Follow me on Twitter
							</Button>
						</Link>
					</VStack>
				</Section>
				<Section>
					<VStack align="start" spacing={8}>
						<Heading size="lg">Projects</Heading>

						<SimpleGrid columns={1} spacing={4} mt={8} w="100%">
							{projects.map((projects) => (
								<ProjectCard
									key={projects.id}
									name={projects.fields.name}
									description={projects.fields.description}
									logo={projects.fields.logo}
									link={projects.fields.link}
									types={projects.fields.types}
								/>
							))}
						</SimpleGrid>
					</VStack>
				</Section>
			</VStack>
		</PageTransition>
	</Box>
);

export async function getStaticProps() {
	// TODO: Link this to a Proper CMS
	const projects = Projects;
	return {
		props: {
			projects
		},
		revalidate: 600
	};
}

export default Home;

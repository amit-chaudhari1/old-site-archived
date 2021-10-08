import React from "react";
import Head from "next/head";
import {
	Button,
	VStack,
	HStack,
	Text,
	IconButton,
	Heading,
	Wrap,
	Link
} from "@chakra-ui/react";
import PageTransition from "../components/page-transitions";
import Section from "@/components/section";
import interests from "../data/interests.json";
import InterestTag from "@/components/interest-tag";

const About = () => (
	<PageTransition>
		<VStack spacing={8}>
			<Section>
				<VStack align="start">
					<Heading as="h1">About</Heading>
					<Text>
						After school, I studied web app security for working
						inside public and private VDP's (vulnerability
						Disclosure Programs) on some popular platforms . It was
						at that time, where I found my passion for System
						Design, Frontend Design and Backend engineering and
						being a Full Stack Developer. I've also had the chance
						to work in mobile app development (using Flutter). In my
						free time, I always like to follow my curiosity, learn
						new things and explore the far corners of the internet.
						In my evenings I like to read books and RFCs, write
						articles, code things, play tennis, play guitar and
						spend time with my favorite people in life.
					</Text>
				</VStack>
			</Section>
			<Section>
				<VStack align="stretch" spacing={4}>
					<Heading as="h3" size="lg">
						Work
					</Heading>
					<Text>
						I'm focused on developer experience, altruism, and being
						a better Engineer (I try my best). The journey of self
						learning my way from the ground up has been one of the
						most satisfying experiences in my life. Head over to my{" "}
						<a href="https://www.linkedin.com/in/amyth-dev/">
							{" "}
							LinkedIn
						</a>
						, if you want to connect with my professionally.
					</Text>
				</VStack>
			</Section>
			<Section>
				<VStack align="stretch" spacing={4}>
					<Text>
						Here's my
						<a href="https://www.amyth.dev/resume.pdf">
							{" "}
							Resume
						</a>{" "}
						if you are interested in hiring me.
					</Text>
				</VStack>
			</Section>
			<Section>
				<VStack align="stretch" spacing={4}>
					<Wrap>
						{/* TODO: Must convert all A tags to link tags. */}
						<a href="https://amyth.dev/podcasts">Podcasts</a>{" "}
						<Text> that I listen to.</Text>
					</Wrap>
					<Wrap>
						<a href="https://open.spotify.com/user/31jvqm44zn5kfj7yqxxzmvewwo2e?si=7462f04fff1e4e94">
							{" "}
							Spotify 🎼
						</a>
						<Text> ♭ᵉa𝚝s I vibe to.</Text>
					</Wrap>
				</VStack>
			</Section>
			<Section>
				<VStack align="stretch" spacing={4}>
					<Heading as="h2">😁</Heading>
					<Wrap>
						{interests.like.map((el) => (
							<InterestTag name={el} like />
						))}
					</Wrap>
				</VStack>
			</Section>
			<Section>
				<VStack align="stretch" spacing={4}>
					<Heading as="h2">😒</Heading>
					<Wrap>
						{interests.dislike.map((el) => (
							<InterestTag name={el} />
						))}
					</Wrap>
				</VStack>
			</Section>
		</VStack>
	</PageTransition>
);

export default About;

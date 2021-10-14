import React from "react";
import {
	HStack,
	VStack,
	Text,
	useColorModeValue,
	Tag,
	TagLabel,
	Avatar,
	Wrap,
	WrapItem,
	TagRightIcon,
	Box,
	AspectRatio,
	Link,
	Image as ChakraImage,
} from "@chakra-ui/react";
import Image from "./image";
import { usePalette } from "react-palette";

const ProjectCard = ({ name, description, logo, link, types }) => {
	const { data, loading, error } = usePalette(logo);


	return (
		<Link href={link} isExternal>
			<HStack
				p={4}
				bg={useColorModeValue("white", "gray.800")}
				rounded="xl"
				borderWidth="1px"
				borderColor={useColorModeValue("gray.100", "gray.700")}
				w="100%"
				h="100%"
				textAlign="left"
				align="start"
				spacing={4}
				transition="all 0.25s"
				transition-timing-function="spring(1 100 10 10)"
				_hover={{ transform: "translateY(-4px)", shadow: "sm" }}
			>
				<Wrap>
					<WrapItem>
						<Avatar name={name} src={logo}/>
					</WrapItem>
					</Wrap>

				<VStack align="start" justify="flex-start" spacing={1}>
					<VStack spacing={0} align="start">
						<HStack>
							<Text fontWeight="bold" fontSize="md" noOfLines={2}>
								{name}
							</Text>
							{/* <Tag size="sm" coolorScheme="teal"> </Tag> */}
							{types.map((type)=>( 
							<Tag size="sm" colorScheme="teal">
								{type}
							</Tag>
							))}
						</HStack>

						<Text
							fontSize="sm"
							color={useColorModeValue("gray.500", "gray.200")}
						>
							{description}
						</Text>
					</VStack>
				</VStack>
			</HStack>
		</Link>
	);
};

export default ProjectCard;

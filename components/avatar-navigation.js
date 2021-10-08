import React from "react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverFooter,
	PopoverArrow,
	PopoverCloseButton,
	Avatar,
	HStack,
	VStack,
	Text,
	useColorModeValue,
	Divider,
	Tag,
	SimpleGrid,
	Button,
	Box
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const AvatarNavigation = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const open = () => setIsOpen(!isOpen);
	const close = () => setIsOpen(false);

	return (
		<Link href="/">
			<Avatar
				name="Amit Chaudhari"
				size="sm"
				src="/avatar-small.jpg"
				cursor="pointer"
			/>
		</Link>
	);
	{
		/* <Popover
    >
      <PopoverTrigger>
        <Avatar
          name="Amit Chaudhari"
          size="sm"
          src="/avatar-small.jpg"
          cursor="pointer"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <VStack align="start" spacing={4}>
            <SimpleGrid columns={2} w="100%" spacing={2}>
              <Link href="https://twitter.com/amyth_dev">
                <Button size="sm">Twitter</Button>
              </Link>
              <Link href="https://github.com/amitchaudhari9121">
                <Button size="sm">Github</Button>
              </Link>
              <Link href="mailto:amyth.developer@gmail.com">
                <Button size="sm">Contact</Button>
              </Link>
              <Link>
                <Button size="sm" isDisabled>
                  Newsletter
                </Button>
              </Link>
            </SimpleGrid>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover> */
	}
};

export default AvatarNavigation;

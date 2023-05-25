"use client";

import { IconButton } from "@chakra-ui/button";
import { HStack, Stack } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/next-js";
import React from "react";

import { GithubIcon, LinkedInIcon } from "@/assets";

export function Navbar() {
	return (
		<Stack margin="0 !important" position="absolute" top="0" width="full">
			<HStack
				direction="row"
				height="100px"
				justify="end"
				paddingX={{ base: 2, md: 10 }}
				spacing="5"
			>
				<Link
					color="white"
					href="https://github.com/kindynosmx"
					target="_blank"
				>
					<IconButton
						aria-label="Kindynos Github"
						icon={<GithubIcon />}
						size="sm"
					/>
				</Link>
				<Link
					color="white"
					href="https://www.linkedin.com/company/35519796"
					target="_blank"
				>
					<IconButton
						aria-label="Kindynos LinkedIn"
						icon={<LinkedInIcon />}
						size="sm"
					/>
				</Link>
			</HStack>
		</Stack>
	);
}

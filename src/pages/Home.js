import React from 'react';

import { Heading, Link, Text } from "@chakra-ui/core";

export default function Home() {
    return(
        <>
            <Heading>I'm the Home Page for this Chakra UI's React Project</Heading>
            <Heading as="h2" size="xl"> It currently is setup with Hooks + Hooks Routing ( hookrouter ) </Heading>
            <Text fontSize="xl">For more information, click the link below</Text>
            <Link isExternal href="https://github.com/Paratron/hookrouter">https://github.com/Paratron/hookrouter</Link>            
        </>
    )
}
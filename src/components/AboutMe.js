import { React } from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, VStack, Image, HStack } from "@chakra-ui/react";
import { ReactComponent as AvataaarsSvg } from "../assets/avataaars.svg";
import Card from "./Card";

const me = [
    {
        title: 'Who am I',
        description: 'A Software Engineer Based out of Calgary, passionate about web development, AI, and graphics.',
        imageSrc: () => null,
        link: null,
        svg: "../assets/avataaars.svg",
        color: 'rgba(255, 102, 255, 0.5)'
    },
    {
        title: 'What do I do for fun',
        description: "I'm all around a nerd, I enjoy spending my free time either playing video games, or trying out board games." + " I also love traveling; seeing new sights, and trying new things.",
        imageSrc: () => require("../images/photo4.jpg"),
        link: null,
        svg: null,
        color: 'rgba(77, 255, 77, 0.5)'
    },
    {
        title: "What I'm learning",
        description: "Currently I'm learning the React framework to improve my understanding of modern front-end development. This website is a culmination of what I have learned so far.",
        imageSrc: () => require("../images/logo192.png"),
        link: null,
        svg: null,
        color: 'rgba(255, 102, 255, 0.5)'
    },
    {
        title: 'What does the future hold',
        description: "Next I want to learn more about data science by working on some projects exploring large datasets. Additionally I will also work on some C++ projects primarily avour graphics.",
        imageSrc: () => require("../images/p5.png"),
        link: null,
        svg: null,
        color: 'rgba(77, 255, 77, 0.5)'
    },
    {
        title: 'Am I open to relocation?',
        description: "Yes, eventhough I'm based out of Calgary, AB I would be earger to taking opportunities anywhere in the Country. I would also be open to hybrid or remote postions.",
        imageSrc: () => require("../images/p6.jpg"),
        link: null,
        svg: null,
        color: 'rgba(255, 102, 255, 0.5)'
    }
];

const AboutMe = () => {

    return (
        <FullScreenSection
            // backgroundColor="#FFEBCD"
            isDarkBackground={false}
            p={8}
            alignItems="flex-start"
            spacing={8}
            proj="yes"
            backgroundColor='rgba(54, 184, 245, 0.3)'
            backdropFilter='blur(3px)'
            color='rgba(0, 0,0, 1)'
        >
            <Heading as="h1" id="aboutme-section">
                About Me
            </Heading>
            <VStack
                maxWidth="640px"
                minHeight="50vh"
                color="black"
                spacing={2}
            >
                {me.map((m, index) => {
                    return (
                        <HStack key={m.title}>
                            {index % 2 ? <Image src={m.imageSrc()} width='200px' height='115px' ></Image> : null}
                            <Card
                                key={m.title}
                                title={m.title}
                                description={m.description}
                                imageSrc={null}
                                link={m.link}
                                color={m.color}
                            > </Card>
                            {m.svg ? <AvataaarsSvg width='200px' height='115px' /> : null}
                            {m.svg ? null : (index % 2 ? null : <Image src={m.imageSrc()} width='200px' height='115px' ></Image>)}
                        </HStack>)
                })}
            </VStack>
        </FullScreenSection >
    );
}

export default AboutMe;
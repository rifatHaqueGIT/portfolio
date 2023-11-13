import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "WorkOrderDBMS",
    description:
      "A Database Management System with SQL queries to retrive data, and a NodeJS backend to support a bootstrap frontend",
    getImageSrc: () => require("../images/photo1.jpg"),
    link: 'https://github.com/rifatHaqueGIT/WorkorderDBMS'
  },
  {
    title: "Diabetes Medication ML",
    description:
      "A ML algorithm utilizing medical data to predict whether a patient will require diabetes medication in the future",
    getImageSrc: () => require("../images/photo2.jpg"),
    link: 'https://github.com/rifatHaqueGIT/diabetes-medication'
  },
  {
    title: "Flexiform",
    description:
      "TODO",
    getImageSrc: () => require("../images/photo3.jpg"),
    link: 'https://github.com/rifatHaqueGIT/Flexiform'
  },
  {
    title: "Deadlock Detect",
    description:
      "TODO",
    getImageSrc: () => require("../images/photo4.jpg"),
    link: 'https://github.com/rifatHaqueGIT/deadlock-detect'
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#FFEBCD"
      isDarkBackground={false}
      p={8}
      alignItems="flex-start"
      spacing={8}
      proj={false}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

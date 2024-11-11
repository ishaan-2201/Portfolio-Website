import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const toggleOptions = [
    { label: "All", value: "all" },
    { label: "WEB APP'S", value: "web app" },
    { label: "ANDROID APP'S", value: "android app" },
    { label: "MACHINE LEARNING", value: "machine learning" },
  ];

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my recent
          projects.
        </Desc>
        <CardContainer>
          {projects
            .filter(
              (project) => toggle === "all" || project.category === toggle
            )
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;

import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

const Wrapper = styled.div`
  margin: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
  }
`;

const TextContent = styled.div`
  max-width: 700px;
`;

const ProjectRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0px;
  flex-wrap: wrap;
  margin-top: 0px;
  height: unset;

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-wrap: nowrap;
    margin-bottom: 70px;
    margin-top: 40px;
    height: 500px;
  }
`;

const ProjectImage1 = styled.div`
  background-image: url("./images/movie.png");
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
  border-radius: 4px;
  transition-duration: 0.3s;
`;

const ProjectImage2 = styled.div`
  background-image: url("./images/coffee.jpg");
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
  border-radius: 4px;
  transition-duration: 0.3s;
`;

const Project = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 90px;
  transition-duration: 0.3s;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 80%;
    margin-bottom: 0px;

    &:nth-child(1) {
      margin-right: 10%;
    }
  }
`;

const Projects = () => {
  return (
    <div>
      <Wrapper>
        <TextContent>
          <Title text="What I've been working on" />
          <p>
            I like to stay busy and always have a project in the works. Take a
            look at some of the projects which i have done lately!.
          </p>
        </TextContent>
      </Wrapper>

      <Wrapper>
        <ProjectRow>
          <Project>
            <a href="/">
              <ProjectImage1></ProjectImage1>
            </a>
            <a href="/">
              <Title text="Movie Library" />
            </a>
            <p className="project-desc">
              A Movie search app, done with react, which fetches info from tmdb
              api.
            </p>

            <a href="/">
              <p className="link"> View Link</p>
            </a>
          </Project>
        </ProjectRow>
        {/* Second Project */}
        <ProjectRow>
          <Project>
            <a href="/">
              <ProjectImage2></ProjectImage2>
            </a>
            <a href="/">
              <Title text="Coffee By Benjamin" />
            </a>
            <p className="project-desc">
              Coffee by Benjamin website, done with react. It's a kind of
              e-commerce app.
            </p>

            <p> Coming Soon ! </p>
          </Project>
        </ProjectRow>
      </Wrapper>
    </div>
  );
};

export default Projects;

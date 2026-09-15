// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  AboutMeArea,
} from "./style";
import { TypeWriter } from "@/components/Typewriter";
import { useI18n } from "@/utils/i18n";

export const Home = (): JSX.Element => {
  const { t } = useI18n();
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/Portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <TypeWriter text={t("greeting")} hideCursor delay={100}/>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
            {t("passion")}{" "}
              <Text as="span" type="heading1" color="brand1">
                {t("passionHighlight")}
              </Text>{" "}
              {t("passionEnd")}{" "}
              <Text as="span" type="heading1" color="brand1">
                {t("develop")}
              </Text>{" "}
              {t("projectsEnd")}
            </Text>
            <Text type="body1" color="grey2">
              {t("intro")} {t("discover")}
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                {t("viewProjects")}
              </Button>
              <Button as="a" type="outline" target="_blank" rel="noopener noreferrer" href={portfolioUrl}>
                {t("portfolioCode")}
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <AboutMeArea>
        <Container>
          <Text as="h2" type="heading2" color="grey4">
            {t("about")}
          </Text>
          <Text as="p" type="body1" color="grey2">
            {t("aboutText")}
            <br /><br />
            {t("aboutText2")}
            <br /><br />
            {t("aboutText3")}
          </Text>
        </Container>
      </AboutMeArea>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                {t("myProjects")}
              </Text>
              <Text as="p" type="body1" color="grey2">
                {t("projectsDescription")}
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};

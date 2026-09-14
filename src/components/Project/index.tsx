import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";
import { useI18n } from "@/utils/i18n";
import { featuredProjects, ProjectData } from "@/utils/projectData";

export const Project = (): JSX.Element => {
  const { t } = useI18n();
  const [repositories, setRepositories] = useState<ProjectData[]>(featuredProjects);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
        );
        if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
        const json: ProjectData[] = await response.json();
        setRepositories([...featuredProjects, ...json]);
      } catch (requestError) {
        console.error("Unable to load GitHub repositories", requestError);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <Text type="body1" color="grey2">{t("loading")}</Text>}
      {error && <Text type="body1" color="grey2">{t("githubError")}</Text>}
      {repositories &&
        repositories?.map?.((repository) => (
          <ProjectWrapper key={repository.id}>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              {repository.name}
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                {t("primaryLanguage")}
              </Text>
              {repository.language ? (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              ) : (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    {t("languageUnknown")}
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>

            <Text type="body1" color="grey2">
              {repository.description || t("languageUnknown")}
            </Text>
            <ProjectLinks>
              {repository.html_url && (
                <ProjectLink target="_blank" rel="noopener noreferrer" href={repository.html_url}>
                  <FaGithub /> {t("githubCode")}
                </ProjectLink>
              )}
              {repository.homepage && (
                <ProjectLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${repository.homepage}`}
                >
                  <FaShare /> {t("demo")}
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};

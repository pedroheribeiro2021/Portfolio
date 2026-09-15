import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";
import { useI18n } from "@/utils/i18n";

export const Contacts = () => {
  const { t } = useI18n();
  const ref = useRef(null);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <ContactSection id="contact">
      <Container>
        <ContactSectionContent ref={ref}>
          <motion.div style={{ scale }}>
            <ContactSectionText>
              <Text type="heading2" color="grey4">
                {t("letsTalk")}{" "}
                <Text as="span" type="heading2" color="brand1">
                  {t("buildSolutions")}
                </Text>
                , juntos!
              </Text>
            </ContactSectionText>
          </motion.div>
          <ContactsCards>
            <ContactCard>
              <ContactCardImage className="wpp">
                <FaWhatsapp color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  {t("whatsapp")}
                </Text>
                <Text color="grey2" type="body2">
                  {t("availableChat")}
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  {t("talk")}
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="email">
                <FaEnvelopeOpen color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  {t("email")}
                </Text>
                <Text color="grey2" type="body2">
                  {t("emailDescription")}
                </Text>

                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`mailto:${userData.emailUser}`}
                  onClick={() =>
                    (window.location.href = "mailto:pedro.heribeiro6795@gmail.com")
                  }
                >
                  {t("sendEmail")}
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className="linkedin">
                <FaLinkedin color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  {t("linkedin")}
                </Text>
                <Text color="grey2" type="body2">
                {t("linkedinDescription")}
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={linkedInUrl}
                >
                  {t("goLinkedin")}
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};

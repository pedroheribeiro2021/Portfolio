import { useState } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useI18n } from "@/utils/i18n";
import { Button } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {
  const { locale, setLocale, t } = useI18n();

  const isWide = useMedia({ maxWidth: "991px" });

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        <Flex>
          {isWide ? open && <NavLinks /> : <NavLinks />}
        </Flex>
        <select aria-label={t("language")} value={locale} onChange={(event) => setLocale(event.target.value as typeof locale)}>
          <option value="pt-BR">PT</option>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  const { t } = useI18n();
  return (
    <NavbarLinks>
      <Button type="btLink" as="a" color="grey4" href={`#home`}>
        {t("home")}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#projects`}>
        {t("projects")}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#contact`}>
        {t("contact")}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#social-media`}>
        {t("social")}
      </Button>
    </NavbarLinks>
  );
};

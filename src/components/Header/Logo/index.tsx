import { Container, LogoLink } from "./styles";
import Image from "next/image";

export const Logo = () => {
  return (
    <Container>
      <LogoLink href="/">
        <Image alt="logo" src="/img/logo.png" fill />
      </LogoLink>
    </Container>
  );
};

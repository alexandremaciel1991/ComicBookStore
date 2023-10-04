import { Container, LogoLink } from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";

export const Logo = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/`);
  };
  return (
    <Container>
      <LogoLink onClick={handleClick}>
        <Image alt="logo" src="/img/logo.png" fill />
      </LogoLink>
    </Container>
  );
};

import React from "react";
import {
  BackgroundColor,
  Center,
  Column,
  Container,
  Spacing,
  Wrapper,
} from "./Layout";
import regionSthlmLogo from "../assets/region_sthlm.svg";

export const Footer = () => (
  <Wrapper
    backgroundColor={BackgroundColor.White}
    classNames="border-razzmatazz border-t-8"
  >
    <Container spacing={Spacing.L}>
      <Center>
        <Column>
          <img
            width="300"
            className="h-auto mx-auto"
            src={regionSthlmLogo}
            alt=""
          />
          <p>
            Region Stockholm står bakom denna plattform Donec vitae sapien ut
            libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
            eget eros faucibus tincidunt. Duis leo.
          </p>
          <a
            className="text-blue-500"
            href="https://www.sll.se"
            title="Region Stockholms Webbplats"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.sll.se
          </a>
        </Column>
      </Center>
    </Container>
  </Wrapper>
);

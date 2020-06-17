import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";

import { H2, H3 } from "./components/Typography";
import { Column, Container, Spacing } from "./components/Layout";

import { useParams } from "react-router-dom";

function Category() {
  let { category } = useParams();

  return (
    <Column>
      <Container spacing={Spacing.S}>
        <H2>{category}</H2>
        <p>
          Kortare intro-text om vad psykisk hälsa är - psykoedukation - som
          också lockar användaren till att läsa mer.
        </p>
      </Container>
      <Tabs>
        <TabList style={{ justifyContent: "space-around" }}>
          <Tab style={{ border: "none" }}>
            <H3>Verktyg</H3>
          </Tab>
          <Tab style={{ border: "none" }}>
            <H3>Info</H3>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Container spacing={Spacing.S}>
              <Accordion multiple collapsible>
                <AccordionItem>
                  <h3>
                    <AccordionButton>App</AccordionButton>
                  </h3>
                  <AccordionPanel>
                    Integer ad iaculis semper aenean nibh quisque hac eget
                    volutpat, at dui sem accumsan cras congue mi varius egestas
                    interdum, molestie blandit sociosqu sodales diam metus erat
                    venenatis.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h3>
                    <AccordionButton>App two</AccordionButton>
                  </h3>
                  <AccordionPanel>
                    Hendrerit faucibus litora justo aliquet inceptos gravida
                    felis vel aenean, natoque fermentum nostra tempus ornare nam
                    diam est, neque risus aliquam sapien vestibulum sociis
                    integer eros.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Container>
          </TabPanel>
          <TabPanel>
            <p>Info</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Column>
  );
}

export default Category;

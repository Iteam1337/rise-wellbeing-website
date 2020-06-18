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
import { H2, H4 } from "./components/Typography";
import {
  Column,
  Container,
  Wrapper,
  Spacing,
  BackgroundColor,
} from "./components/Layout";
import { themeColors } from "./constants";
// import { Query } from "./api.g";
// import { CATEGORY_QUERY } from "./graphql/queries";
// import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

function TabWithSelectedHandling(props: any) {
  // `isSelected` comes from `TabList` cloning the `CoolTab`.
  const { isSelected, left, children, ...rest } = props;

  const borderRadius = left ? "rounded-tr-lg" : "rounded-tl-lg";

  // make sure to forward *all* props received from TabList
  return (
    <Tab {...rest}>
      <span
        className={`w-full inline-block p-2 ${
          isSelected ? `bg-beige ${borderRadius}` : "bg-beige-dark"
        }`}
        style={{
          height: "calc(100% - 8px)",
        }}
      >
        {children}
      </span>
    </Tab>
  );
}

function Category() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { category } = useParams();

  // const { loading, error, data } = useQuery<{
  //   categories: Query["category"];
  // }>(CATEGORY_QUERY);

  return (
    <Wrapper backgroundColor={BackgroundColor.Beige}>
      <Column>
        <Container>
          <img
            src="https://picsum.photos/640/480"
            className="w-full h-auto md:h-64"
            alt=""
          />
          <Container spacing={Spacing.S}>
            <H2>{category}</H2>
            <p>
              Kortare intro-text om vad psykisk hälsa är - psykoedukation - som
              också lockar användaren till att läsa mer.
            </p>
          </Container>
        </Container>
        <Tabs>
          <TabList
            style={{
              borderTop: `10px solid ${themeColors.darkBeige}`,
              justifyContent: "space-around",
              background: themeColors.darkBeige,
            }}
          >
            <TabWithSelectedHandling
              left={true}
              style={{
                border: "none",
                flex: "1",
                padding: 0,
                height: "calc(100% - 8px)",
              }}
            >
              <H4>
                <span className="uppercase">Verktyg</span>
              </H4>
            </TabWithSelectedHandling>
            <TabWithSelectedHandling
              left={false}
              style={{ border: "none", flex: "1", padding: 0 }}
            >
              <H4>
                <span className="uppercase">Info</span>
              </H4>
            </TabWithSelectedHandling>
          </TabList>
          <TabPanels>
            <Container>
              <TabPanel style={{ marginTop: "32px" }}>
                <Accordion multiple className="text-left">
                  <AccordionItem className="mb-4">
                    <AccordionButton className="w-full px-6 py-2 text-left bg-beige-dark">
                      <H4>App</H4>
                    </AccordionButton>
                    <AccordionPanel>
                      Integer ad iaculis semper aenean nibh quisque hac eget
                      volutpat, at dui sem accumsan cras congue mi varius
                      egestas interdum, molestie blandit sociosqu sodales diam
                      metus erat venenatis.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem className="mb-4">
                    <AccordionButton className="w-full py-2 px-6 text-left bg-beige-dark">
                      <H4>App two</H4>
                    </AccordionButton>
                    <AccordionPanel>
                      Hendrerit faucibus litora justo aliquet inceptos gravida
                      felis vel aenean, natoque fermentum nostra tempus ornare
                      nam diam est, neque risus aliquam sapien vestibulum sociis
                      integer eros.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </TabPanel>
              <TabPanel>
                <p>Info</p>
              </TabPanel>
            </Container>
          </TabPanels>
        </Tabs>
      </Column>
    </Wrapper>
  );
}

export default Category;

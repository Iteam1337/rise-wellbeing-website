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
import { H2, H4 } from "../components/Typography";
import {
  Column,
  Container,
  Wrapper,
  Spacing,
  BackgroundColor,
} from "../components/Layout";
import { themeColors } from "../constants";
import { Query } from "../api.g";
import { CATEGORY_QUERY } from "../graphql/queries";
import { useQuery } from "@apollo/client";
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

  const { loading, error, data } = useQuery<{
    categoryAndRelated: Query["categoryAndRelated"];
  }>(CATEGORY_QUERY, {
    variables: {
      id: category,
    },
  });

  let elementToRender = null;

  if (loading) {
    elementToRender = <p>Loading...</p>;
  }

  if (error) {
    elementToRender = <p>{error.message}</p>;
  }

  if (data && data.categoryAndRelated) {
    const services = data?.categoryAndRelated?.services ?? [];
    elementToRender = (
      <Column>
        <Container>
          <img
            src="https://picsum.photos/640/480"
            className="w-full h-auto md:h-64"
            alt=""
          />
          <Container spacing={Spacing.S}>
            <H2>{data.categoryAndRelated.label}</H2>
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
                  {services.map((service) => {
                    if (service) {
                      return (
                        <AccordionItem className="mb-4">
                          <AccordionButton className="w-full px-6 py-2 text-left bg-beige-dark">
                            <div className="flex">
                              <span className="inline-block pr-1 text-sm font-thin uppercase">
                                APP:
                              </span>
                              <div className="inline-block">
                                <H4>{service.name}</H4>
                              </div>
                            </div>
                          </AccordionButton>
                          <AccordionPanel>{service.link}</AccordionPanel>
                        </AccordionItem>
                      );
                    } else {
                      return <React.Fragment />;
                    }
                  })}
                </Accordion>
              </TabPanel>
              <TabPanel>
                <p>Info</p>
              </TabPanel>
            </Container>
          </TabPanels>
        </Tabs>
      </Column>
    );
  }

  if (elementToRender) {
    return (
      <Wrapper backgroundColor={BackgroundColor.Beige}>
        {elementToRender}
      </Wrapper>
    );
  } else {
    return null;
  }
}

export default Category;

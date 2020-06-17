import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./Category";
import CategoriesFeed from "./components/CategoriesFeed";
import { ArticleThumbnail } from "./components/Article";
import { Container, Column, Spacing } from "./components/Layout";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/tema/:category">
            <Category />
          </Route>
          <Route path="/">
            <Column gap={Spacing.M}>
              <ArticleThumbnail
                title="Välkommen!"
                text="Text som lockar användaren att spela filmklippet om plattformen."
              />
              <ArticleThumbnail
                title="Vad är psykiskt välmående*?"
                text="Kortare intro-text om vad psykisk hälsa är - psykoedukation - som också lockar användaren till att läsa mer. "
              />
              <CategoriesFeed />
            </Column>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

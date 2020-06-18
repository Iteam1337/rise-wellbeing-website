import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./Category";
import CategoriesFeed from "./components/CategoriesFeed";
import { ArticleThumbnail } from "./components/Article";
import { Column, Spacing } from "./components/Layout";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";

function App() {
  return (
    <>
      <Router>
        <Logo />
        <Switch>
          <Route path="/tema/:category">
            <Category />
          </Route>
          <Route path="/">
            <Column gap={Spacing.S}>
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
      <Footer />
    </>
  );
}

export default App;

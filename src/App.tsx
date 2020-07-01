import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { Column, Spacing } from "./components/Layout";

import ArticlesFeed from "./containers/ArticlesFeed";
import Article from "./containers/Article";
import CategoriesFeed from "./containers/CategoriesFeed";
import Category from "./containers/Category";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Header />
        </Route>

        <Route path="/:any_subroute">
          <Header shrink={true} />
        </Route>

        <Switch>
          <Route path="/artikel/:article">
            <Article />
          </Route>
          <Route path="/tema/:category">
            <Category />
          </Route>
          <Route path="/">
            <Column gap={Spacing.S}>
              <ArticlesFeed />
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

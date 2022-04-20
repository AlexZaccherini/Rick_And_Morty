// react
import { Route, Routes } from "react-router-dom";

// project imports
import BasePage from "../components/basePage";
import PageTitle from "../enumerations/pageTitle";
import DetailPageContent from "../pages/detailPageContent";
import HomePageContent from "../pages/homePageContent";
import ListPageContent from "../pages/listPageContent";

const createRoutes: () => JSX.Element = () => (
  <Routes>
    <Route
      path="/"
      element={
        <BasePage pageTitle={PageTitle.HOME}>
          <HomePageContent />
        </BasePage>
      }
    />
    <Route
      path="/list"
      element={
        <BasePage pageTitle={PageTitle.CHARACTER_LIST}>
          <ListPageContent />
        </BasePage>
      }
    />
    <Route
      path="/detail"
      element={
        <BasePage>
          <DetailPageContent />
        </BasePage>
      }
    />
  </Routes>
);

export default createRoutes;

import React from "react";
import { GlobalStyle } from "./style";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import advantagesList from "/src/mocks/advantagesList";
import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import products from "/src/mocks/productList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import ScrollToTop from "/src/components/ui/scroll-to-top/scroll-to-top";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage advantages={advantagesList} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

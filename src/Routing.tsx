import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

const CoinList = lazy(() => import("./components/CoinsList/CoinsList"));
const CoinDetails = lazy(() => import("./components/CoinDetails/CoinDetails"));

const Routing = () => (
  <Container>
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route path="*" element={<Navigate replace to="/crypto" />} />

        <Route path="crypto/" element={<CoinList />} />
        <Route path="/coin/:coinId" element={<CoinDetails />} />
      </Routes>
    </Suspense>
  </Container>
);

export default Routing;

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

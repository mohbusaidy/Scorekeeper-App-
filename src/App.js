import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./Pages/HomePages.js";
import styled from "styled-components";
import HistoryPage from "./Pages/HistoryPage.js";

const players = [
  {
    name: "John",
    score: 15,
    id: "1",
  },
  {
    name: "Jane",
    score: 15,
    id: "2",
  },
  {
    name: "Jim",
    score: 15,
    id: "3",
  },
];

export default function App() {
  return (
    <>
      <header>
        <h1>Scorekeeper</h1>
      </header>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage players={players} />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Main>
      <Navigation />
    </>
  );
}

const Main = styled.main`
  display: grid;
  gap: 10px;
`;

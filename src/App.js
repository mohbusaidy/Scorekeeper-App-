import { initialPreviousGames } from "./historyDB.js";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation /Navigation.js";
import History from "./components/History/History.js";
import HomePage from "./Pages/HomePages.js";
import styled from "styled-components";

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
          <Route
            path="/history"
            element={
              <>
                <h2>Previous Games</h2>
                {initialPreviousGames.map((game) => {
                  return <History key={game.id} game={game} />;
                })}
              </>
            }
          />
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

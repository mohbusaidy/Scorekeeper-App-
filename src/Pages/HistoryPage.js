import History from "../components/History/History";
import { initialPreviousGames } from "../historyDB.js";

export default function HistoryPage() {
  return (
    <>
      <h2>Previous Games</h2>
      {initialPreviousGames.map((game) => (
        <History key={game.id} game={game} />
      ))}
    </>
  );
}

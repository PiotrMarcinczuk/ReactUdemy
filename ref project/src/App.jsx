import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Challenge 1" targetTime={2} />
        <TimerChallenge title="Challenge 2" targetTime={5} />
        <TimerChallenge title="Challenge 3" targetTime={10} />
        <TimerChallenge title="Challenge 4" targetTime={20} />
      </div>
    </>
  );
}

export default App;

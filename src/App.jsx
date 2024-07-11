import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={5}></TimerChallenge>
        <TimerChallenge title="Not Easy" targetTime={5}></TimerChallenge>
        <TimerChallenge title="Getting Tough" targetTime={5}></TimerChallenge>
        <TimerChallenge title="Pros Only" targetTime={5}></TimerChallenge>
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from 'react';

function App() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 }}>
      <h1>Clicked {clicks} times</h1>
      <button
        onClick={() => setClicks(clicks + 1)}
        style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
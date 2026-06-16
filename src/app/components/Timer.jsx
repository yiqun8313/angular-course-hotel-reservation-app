const Counter = () => {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer;
    if (active) {
      timer = setInterval(() => setSeconds((t) => t + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [active, seconds]);

  const stopTimer = () => {
    setActive(false);
    setSeconds(0);
  };

  const start = () => {
    setActive(true);
  };

  const pause = () => {
    setActive(false);
  };

  return (
    <>
      <button onClick={stopTimer}> reset </button>
      <button onClick={start}> start </button>
      <button onClick={pause}> pause </button>
      <span>{seconds}</span>
    </>
  );
};

export default Counter;

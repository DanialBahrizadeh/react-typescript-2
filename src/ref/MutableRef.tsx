import { useState, useRef, useEffect } from "react";

const MutableRef: React.FunctionComponent = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (typeof interValRef.current === "number") {
      window.clearInterval(interValRef.current);
    }
  };
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div className="mx-3 my-5">
      HookTimer - {timer} -
      <button
        onClick={() => stopTimer()}
        className="bg-blue-500 px-3 py-1 rounded-lg text-white block my-1"
      >
        Stop Timer
      </button>
    </div>
  );
};

export default MutableRef;

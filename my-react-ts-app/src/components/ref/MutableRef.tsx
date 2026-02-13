import { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [time, setTime] = useState(0);
  const interValRef = useRef<number | undefined>(undefined);
  // another solution
  // const interValRef = useRef<number | null>(null);
  // Add check before cleaing interval
  // if (interValRef.current) window.clearInterval(interValRef.current);

  const stopTimer = () => {
    window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTime((pervTimeVal) => pervTimeVal + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      Hooktimer - {time}
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default MutableRef;

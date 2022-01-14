import React, { useState, useEffect } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import "./App.css";
import Timer from "./components/Timer/Timer";
import BtnGroup from "./components/BtnGroup/BtnGroup";

function App() {
  const [time, setTime] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);

  useEffect(() => {
    const subject = new Subject();
    interval(1000)
      .pipe(takeUntil(subject))
      .subscribe(() => {
        if (isTimerOn) {
          setTime((val) => val + 1);
        }
      });
    return () => {
      subject.next();
      subject.complete();
    };
  }, [isTimerOn]);

  const onStartClick = () => {
    setIsTimerOn(true);
  };

  const onStopClick = () => {
    setTime(0);
    setIsTimerOn(false);
  };

  const onResetClick = () => {
    setTime(0);
    setIsTimerOn(true);
  };

  const onWaitClick = function () {
    let clicks = 0;
    let timeout = "";
    if (isTimerOn === false) {
      return;
    }
    return function () {
      clicks++;

      if (clicks === 1) {
        timeout = setTimeout(function () {
          setIsTimerOn(true);
          clicks = 0;
        }, 300);
      } else {
        clearTimeout(timeout);
        setIsTimerOn(false);
        clicks = 0;
      }
    };
  };

  return (
    <>
      <Timer time={time} />
      <BtnGroup
        onStopClick={onStopClick}
        onStartClick={onStartClick}
        onResetClick={onResetClick}
        onWaitClick={onWaitClick()}
      />
    </>
  );
}

export default App;

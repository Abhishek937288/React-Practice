import { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer ");
    }, 2000);

    return () => {
      clearInterval(timer); // this is used to clear or remove somthing before component unmounted
      // or before effect run again
    };
  }, []);

  return <div></div>;
};

export default UseEffect;

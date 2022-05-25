import React from "react";

import Button from "./components/Button";
import Container from "./components/Container";
import Typography from "./components/Typography";

import useCounter from "./hooks/useCounter";

const Counter = ({ initialValue }) => {
  const {
    count,
    decrement,
    increment,
    aumento5,
    decremento5,
    reseteo
  } = useCounter({
    initialValue
  });

  return (
    <Container>
     <div id="caja">

       <Button variant="primary" onClick={decrement}>
         -
       </Button>

       <Typography>{count}</Typography>
       <Button variant="secondary" onClick={increment}>
         +
       </Button>
       <Button id="dec5" variant="tercero" onClick={decremento5}>
         -5
       </Button>
       <Button id="aum5" variant="cuarto" onClick={aumento5}>
         +5
       </Button>
       <Button id="res" variant="quinto" onClick={reseteo}>
         reset
       </Button>

     </div>
    </Container>
  );
};

Counter.displayName = "Counter";

export default Counter;

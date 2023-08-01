import * as React from "react";
import { makeStyles, mergeClasses } from "@griffel/react";

const useStyles = makeStyles({
  start: {
    "& ~ .c": {
      color: "red",
    },
  },
});

export default function Bad() {
  const styles = useStyles();
  const [count, setCount] = React.useState(10000);
  const [present, setPresent] = React.useState(true);
  return (
    <>
      <button onClick={() => setPresent((s) => !s)}>toggle</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <div className={mergeClasses(present && styles.start)}>a</div>
      <fieldset></fieldset>
      {new Array(count).fill(0).map((_, i) => <span key={i}>d</span>)}
      <span className="c">c</span>
    </>
  );
}

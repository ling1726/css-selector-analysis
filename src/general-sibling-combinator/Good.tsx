import * as React from "react";
import { makeStyles, mergeClasses } from "@griffel/react";

const useStyles = makeStyles({
  item: {
    color: "red",
  },
});

export default function Good() {
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
      <div>a</div>
      <fieldset></fieldset>
      {new Array(count).fill(0).map((_, i) => (
        <span key={i}>d</span>
      ))}
      <span className={mergeClasses(present && styles.item)}>c</span>
    </>
  );
}

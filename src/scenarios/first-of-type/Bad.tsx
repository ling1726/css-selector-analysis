import * as React from "react";
import { makeStyles, mergeClasses } from "@griffel/react";

const useStyles = makeStyles({
  rule: {
    "& div:first-of-type": {
      color: "red",
    },
  },
});

export default function Bad() {
  const styles = useStyles();
  const [count, setCount] = React.useState(1000);
  const [present, setPresent] = React.useState(false);

  return (
    <>
      <button onClick={() => setPresent((s) => !s)}>toggle</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <div className={mergeClasses(styles.rule)}>
        {present ? <code>code</code> : <span>span</span>}
        {new Array(count).fill(0).map((_, i) => (
          <div key={i}>
            div
          </div>
        ))}
      </div>
    </>
  );
}

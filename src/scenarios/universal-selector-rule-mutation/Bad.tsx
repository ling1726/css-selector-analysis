import * as React from "react";
import { makeStyles, mergeClasses, shorthands } from "@griffel/react";

const useStyles = makeStyles({
  rule: {
    "& *": {
      color: 'red',
    },
  },

  red: {
    color: 'red',
  }
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
      <div className={mergeClasses(present && styles.rule)}>
        {new Array(count).fill(0).map((_, i) => (
          <div className={styles.red} key={i}>Foo</div>
        ))}
      </div>
    </>
  );
}

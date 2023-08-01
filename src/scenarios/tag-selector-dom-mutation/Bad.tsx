import * as React from "react";
import { makeStyles, mergeClasses } from "@griffel/react";

const useStyles = makeStyles({
  rule: {
    "& div div": {
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
        {(
          <article>
            {present && new Array(count).fill(0).map((_, i) => (
              <div key={i}>new</div>
            ))}
          </article>
        )}
        <div>
          <div>target</div>
        </div>
        <article>
          <article>
            {new Array(10).fill(0).map((_, i) => (
              <div key={i}>div</div>
            ))}
          </article>
        </article>
      </div>
    </>
  );
}

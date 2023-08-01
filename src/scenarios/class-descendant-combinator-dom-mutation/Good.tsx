import * as React from "react";
import { makeStyles, mergeClasses } from "@griffel/react";

const useStyles = makeStyles({
  rule: {
    color: "red",
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
      <div>
        {present ? (
          <div>
            {new Array(count).fill(count).map((_, i) => (
              <div key={i}>
                new
              </div>
            ))}
          </div>
        ) : null}
        <div>
          {new Array(10).fill(0).map((_, i) => (
            <div className={styles.rule} key={i}>
              div
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

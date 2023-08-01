import * as React from "react";
import { makeStyles, mergeClasses } from "@griffel/react";

const useStyles = makeStyles({
  item: {
    color: "red",
  },
});

export function Good() {
  const styles = useStyles();
  const [count, setCount] = React.useState(5);
  const [present, setPresent] = React.useState(true);
  return (
    <>
      <button onClick={() => setPresent((s) => !s)}>toggle</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <div>
        {new Array(count).fill(0).map((_, i) => {
          return (
            <div key={i}>
              <fieldset>
                <span className={mergeClasses(present && styles.item)}>foo</span>
              </fieldset>
            </div>
          );
        })}
      </div>
    </>
  );
}

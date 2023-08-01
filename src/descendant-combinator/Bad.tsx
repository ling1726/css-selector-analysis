import * as React from "react";
import { makeStyles, mergeClasses } from "@griffel/react";

const useStyles = makeStyles({
  container: {
    "& .b .c": {
      color: "red",
    },
  },
});

export function Bad() {
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
      <div className={mergeClasses(present && styles.container)}>
        {new Array(count).fill(0).map((_, i) => {
          return (
            <div className="b" key={i}>
              <fieldset>
                <span className="c">foo</span>
              </fieldset>
            </div>
          );
        })}
      </div>
    </>
  );
}

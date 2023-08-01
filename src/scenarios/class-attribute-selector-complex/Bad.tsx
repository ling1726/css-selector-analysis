import * as React from "react";
import { makeStyles, mergeClasses, shorthands } from "@griffel/react";

const useStyles = makeStyles({
  container: {
    "& [class^='language'] .foo": {
      color: "red",
    },
  },

  update: {
    ...shorthands.border("2px", "dashed", "green"),
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
      <div className={mergeClasses(styles.container)}>
        <div className={mergeClasses('language', present && styles.update)}>
          {new Array(count).fill(0).map((_, i) => {
            return (
              <div className="foo" key={i}>
                foo
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

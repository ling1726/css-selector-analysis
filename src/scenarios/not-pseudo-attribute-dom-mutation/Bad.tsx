import * as React from "react";
import { makeStyles, mergeClasses } from "@griffel/react";

const useStyles = makeStyles({
  rule: {
    "& .foo:not([itemtype^=\"foo\"])": {
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
        {new Array(10).fill(0).map((_, i) => (
          <div itemType="bar" className="foo" tabIndex={0} key={i}>
              red
          </div>
        ))}
        {present && new Array(count).fill(0).map((_, i) => (
          <div itemType="foo" className="foo" tabIndex={0} key={i}>
              not red
          </div>
        ))}
      </div>
    </>
  );
}

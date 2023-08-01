import * as React from "react";
import { makeStyles, mergeClasses } from "@griffel/react";

const useStyles = makeStyles({
  rule: {
    "& div:nth-of-type(3)": {
      color: "red",
    },
  },
});

export default function Bad() {
  const styles = useStyles();
  const [count, setCount] = React.useState(1000);
  const [present, setPresent] = React.useState(false);
  const items = new Array(count).fill(0).map((_, i) => ({ label: 'item', key: i.toString() }));

  if (present) {
    items.unshift({ label: 'new', key: 'new' });
  }
  return (
    <>
      <button onClick={() => setPresent((s) => !s)}>toggle</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <div className={mergeClasses(styles.rule)}>
        {items.map((item) => (
          <div key={item.key}>{item.label}</div>
        ))}
      </div>
    </>
  );
}

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
  const items = new Array(count)
    .fill(0)
    .map((_, i) => ({ label: "item", key: i.toString() }));

  if (present) {
    items.unshift({ label: "new", key: "new" });
  }
  return (
    <>
      <button onClick={() => setPresent((s) => !s)}>toggle</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <div>
        {items.map((item, i) => (
          <React.Fragment key={item.key}>
            <div className={i > 1 ? styles.rule : ""}>
              {item.label}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

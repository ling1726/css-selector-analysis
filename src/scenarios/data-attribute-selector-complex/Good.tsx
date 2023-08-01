import * as React from "react";
import { makeStyles } from "@griffel/react";

const useStyles = makeStyles({
  item: {
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
        <div itemType={present ? 'language' : 'language-bar'}>
          item-type: {present ? 'language' : 'language-bar'}
          {new Array(count).fill(0).map((_, i) => {
            return (
              <div className={styles.item} key={i}>
                foo
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

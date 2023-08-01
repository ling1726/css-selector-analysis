import * as React from "react";
import { makeStyles, mergeClasses, shorthands } from "@griffel/react";

const useStyles = makeStyles({
  container: {
    "& [itemtype] .foo": {
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
      <div className={mergeClasses(styles.container)}>
        <div itemType={present ? 'language en' : 'language fr'}>
          item-type: {present ? 'language en' : 'language fr'}
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

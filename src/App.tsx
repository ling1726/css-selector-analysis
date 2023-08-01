import { Link } from "react-router-dom";

const test = import.meta.glob('./scenarios/**/*.tsx', { eager: true });
const paths = Object.entries(test).map(([path],) => {
  let webPath = path.replace('.', '');
  webPath = webPath.replace('.tsx', '');
  const tokens = webPath.split('/');
  return {
    path: webPath,
    label: `${tokens[2]}/${tokens[3]}`,
  }
});

function App() {

  return (
    <ul>{paths.map(path => (<li key={path.path}><Link to={path.path}>{path.label}</Link></li>))}</ul>
  )
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <div><Link to="/">Home</Link></div>
      {children}
    </div>
  )
}

const test = import.meta.glob('./scenarios/**/*.tsx', { eager: true });
const paths = Object.entries(test).map(([path, exported],) => {
  const Component = (exported as any).default;
  let webPath = path.replace('.', '');
  webPath = webPath.replace('.tsx', '');
  console.log(webPath);
  return {
    path: webPath,
    element: <Wrapper> <Component /></Wrapper>,
  }
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  ...paths,
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

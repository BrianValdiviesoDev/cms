import { useRoutes } from "react-router-dom";
import routes from "./router";
import BaseLayout from "./components/layout";

const App = () => {
  const router = useRoutes(routes);
  return (
    <>
      <BaseLayout children={router} />
    </>
  );
};

export default App;

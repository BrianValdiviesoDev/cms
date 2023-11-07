import { RouteObject } from "react-router-dom";
import Posts from "./pages/posts";
import Editor from "./pages/editor";

const routes: RouteObject[] = [
  {
    element: <Posts />,
    path: "/",
    children: [
      {
        path: ":postId",
        element: <Posts />,
      },
    ],
  },
  {
    element: <Editor />,
    path: "/editor",
    children: [
      {
        path: ":postId",
        element: <Editor />,
      },
    ],
  },
];

export default routes;

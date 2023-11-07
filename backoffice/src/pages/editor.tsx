import { useParams } from "react-router-dom";

const Editor = () => {
  const { postId } = useParams();
  return <>Editor {postId}</>;
};

export default Editor;

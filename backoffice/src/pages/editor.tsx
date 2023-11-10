import { Button, Grid, TextField } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  createPost,
  draftPost,
  publishPost,
  readPost,
  updatePost,
} from "../api/services";
import { PostDto } from "../api/interfaces";
import { useSnackbar } from "notistack";

const PostEditor = () => {
  const { postId } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const [post, setPost] = useState<PostDto>({
    title: "",
    slug: "",
    description: "",
    content: "",
    image: "",
    active: false,
  });
  const editorRef = useRef<any>(null);

  const save = async () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      const data: PostDto = {
        ...post,
        content,
      };
      if (postId) {
        try {
          const post = await updatePost(data, postId);
          setPost(post);
          enqueueSnackbar("Post updated", { variant: "success" });
        } catch (e: any) {
          enqueueSnackbar(e.response.data, { variant: "error" });
        }
      } else {
        try {
          const post = await createPost(data);
          setPost(post);
          enqueueSnackbar("Post created", { variant: "success" });
        } catch (e: any) {
          enqueueSnackbar(e.response.data, { variant: "error" });
        }
      }
    }
  };

  const publish = async () => {
    if (postId && !post.active) {
      try {
        const post = await publishPost(postId);
        setPost(post);
        enqueueSnackbar("Post published", { variant: "success" });
      } catch (e: any) {
        enqueueSnackbar(e.response.data, { variant: "error" });
      }
    }
  };

  const draft = async () => {
    if (postId && post.active) {
      try {
        const post = await draftPost(postId);
        setPost(post);
        enqueueSnackbar("Post moved to draft", { variant: "success" });
      } catch (e: any) {
        enqueueSnackbar(e.response.data, { variant: "error" });
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prevData) => ({ ...prevData, [name]: value } as PostDto));
  };

  useEffect(() => {
    const getData = async () => {
      if (postId) {
        const response = await readPost(postId);
        setPost(response);
      }
    };
    getData();
  }, [postId]);

  return (
    <>
      <Grid container>
        <Grid xs={8} p={1}>
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            value={post?.title}
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={4} p={1}>
          <TextField
            name="slug"
            label="Slug"
            variant="outlined"
            fullWidth
            value={post?.slug}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} p={1}>
          <TextField
            name="description"
            id="outlined-textarea"
            label="Description"
            multiline
            fullWidth
            rows={4}
            value={post?.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} p={1}>
          <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            onInit={(evt: any, editor: any) => (editorRef.current = editor)}
            initialValue={post?.content}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
                "codesample",
                "code",
                "wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help | codesample code",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              skin: "oxide-dark",
              content_css: "dark",
            }}
          />
        </Grid>
        <Grid item xs={12} p={1}>
          {post && (
            <>
              <Button variant="outlined" onClick={save}>
                Save
              </Button>
              {post.active ? (
                <>
                  <Button variant="outlined" onClick={draft}>
                    Move to draft
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="contained" onClick={publish}>
                    Publish
                  </Button>
                </>
              )}
            </>
          )}

          {!post && (
            <Button variant="contained" onClick={save}>
              Save
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default PostEditor;

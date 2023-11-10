import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostResponse } from "../api/interfaces";
import { listPosts, removePost } from "../api/services";
import {
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import { useSnackbar } from "notistack";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Posts = () => {
  const navigate = useNavigate();
  const [tableRows, setTableRows] = useState<any>([]);
  const { enqueueSnackbar } = useSnackbar();

  const getStatus = (active: boolean) => {
    if (active) {
      return <Chip label="Published" color="primary" />;
    }

    return <Chip label="Draft" />;
  };

  const edit = (uuid: string) => {
    navigate(`editor/${uuid}`);
  };

  const remove = async (uuid: string) => {
    try {
      await removePost(uuid);
      getPosts();
      enqueueSnackbar("Post deleted", { variant: "success" });
    } catch (e: any) {
      enqueueSnackbar(e.response.data, { variant: "error" });
    }
  };

  const getPosts = async () => {
    const response = await listPosts();
    const rows = response.map((post: PostResponse) => ({
      ...post,
      id: post.uuid,
    }));
    setTableRows(rows);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "uuid",
      headerName: "Actions",
      renderCell: (params) => {
        return (
          <>
            <Tooltip title="Edit">
              <IconButton onClick={() => edit(params.value)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            {!params.row.active && (
              <Tooltip title="Delete">
                <IconButton onClick={() => remove(params.value)}>
                  <DeleteForeverIcon />
                </IconButton>
              </Tooltip>
            )}
          </>
        );
      },
    },
    {
      field: "active",
      headerName: "State",
      flex: 1,
      renderCell: (params) => getStatus(params.value),
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "slug",
      headerName: "Slug",
      flex: 1,
    },
    {
      field: "author",
      headerName: "Author",
      flex: 1,
    },
    {
      field: "publishDate",
      headerName: "Published at",
      flex: 1,
      renderCell: (params) =>
        params.value ? moment(params.value).format("DD/MM/YYYY") : "--/--/----",
    },
    {
      field: "createdAt",
      headerName: "Created at",
      flex: 1,
      renderCell: (params) =>
        params.value ? moment(params.value).format("DD/MM/YYYY") : "--/--/----",
    },
    {
      field: "updatedAt",
      headerName: "Updated at",
      flex: 1,
      renderCell: (params) =>
        params.value ? moment(params.value).format("DD/MM/YYYY") : "--/--/----",
    },
  ];

  return (
    <>
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="h2">Posts</Typography>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Grid item xs="auto">
              <Button variant="contained" onClick={() => navigate("/editor")}>
                Add new
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />

      <Grid container spacing={2} p={1} pt={5}>
        <DataGrid rows={tableRows} columns={columns} />
      </Grid>
    </>
  );
};

export default Posts;

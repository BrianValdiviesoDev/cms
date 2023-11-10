import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from "@mui/icons-material/Logout";
const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <NewspaperIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={() => navigate("/posts")}>Posts</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={() => navigate("/logout")}>
            Logout
          </ListItemText>
        </MenuItem>
      </MenuList>
    </>
  );
};

export default Sidebar;

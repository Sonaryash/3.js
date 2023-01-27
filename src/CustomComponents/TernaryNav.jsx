import * as React from "react";
import "./TernaryNav.css";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link, Outlet } from "react-router-dom";

const TernaryNav = (Props) => {
  const { setLayered, setEditProduct, setSettings } = Props;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper
      sx={{ width: 250, maxWidth: "100%", minHeight: "80vh", margin: "0" }}
      elevation={0}
    >
      <MenuList
        sx={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50%",
        }}
      >
        <Typography variant="h6" sx={{ ml: 2, mt: 2, mb: 2 }}>
          Pallets
        </Typography>
          <MenuItem className="Sec-MenuItem" onClick={()=>{
            setLayered(true);
             setEditProduct(false);
             setSettings(false);
          }}>
            <DynamicFeedIcon className="Ter-Icons" />
          </MenuItem>
          <MenuItem className="Sec-MenuItem" onClick={()=>{
            setLayered(false);
             setEditProduct(true);
             setSettings(false);
          }}>
            <EditIcon className="Ter-Icons" />
          </MenuItem>
          <MenuItem className="Sec-MenuItem" sx={{ mt: "20rem" }} onClick={()=>{
            setLayered(false);
             setEditProduct(false);
             setSettings(true);
          }}>
            <SettingsIcon className="Ter-Icons" />
          </MenuItem>
        <MenuItem className="Sec-MenuItem">
          <DeleteIcon className="Ter-Icons" onClick={handleOpen} />
        </MenuItem>
      </MenuList>
      {/* Modal Opening */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Clean the current pallet !
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            This will delete all layers on this pallet.
          </Typography>
          <Paper className="Btn-holder" elevation={0}>
            <Button
              className="btn-TTT"
              variant="outlined"
              sx={{ fontSize: 12, ml: "0.5rem" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              className="btn-TTT"
              variant="outlined"
              sx={{
                fontSize: 12,
                ml: "0.5rem",
                backgroundColor: "#00337C",
                color: "white",
              }}
              onClick={handleClose}
            >
              Clean Pallet
            </Button>
          </Paper>
        </Box>
      </Modal>
    </Paper>
  );
};
export default TernaryNav;

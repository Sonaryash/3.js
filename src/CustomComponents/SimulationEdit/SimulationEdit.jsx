import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import MenuIcon from "@mui/icons-material/Menu";

const actions = [
  { icon: <ContentCopyIcon />, name: "ShimPaper" },
  { icon: <ImportExportIcon />, name: "MirrorVertically" },
  { icon: <AddIcon />, name: "AddNewLayer" },
  { icon: <RotateLeftIcon />, name: "DuplicateTopLayerRotate" },
  { icon: <DynamicFeedIcon />, name: "DuplicateTopLayer" },
  { icon: <SyncAltIcon />, name: "MirrorHorizontally" },
];

const SimulationEdit = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ColorArray = [
    "green",
    "red",
    "blue",
    "black",
    "pink",
    "purple",
    "brown",
    "green",
    "red",
    "blue",
  ];
  console.log(`${ColorArray[Math.floor(Math.random() * 10)]}`);

  return (
    <>
      <Paper
        sx={{
          width: 500,
          maxWidth: "100%",
          minHeight: "100vh",
          margin: "0",
        }}
      >
        <Paper>
          <Box sx={{ height: 450, transform: "translateZ(0px)", flexGrow: 1 }}>
            <SpeedDial
              ariaLabel="SpeedDial controlled open example"
              sx={{ position: "absolute", bottom: 16, right: 16 }}
              icon={<SpeedDialIcon />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={handleClose}
                />
              ))}
            </SpeedDial>
          </Box>
        </Paper>
        {}
        <Paper
          sx={{
            height: 80,
            width: "100%",
            display: "flex",
            backgroundColor: `${ColorArray[Math.floor(Math.random() * 10)]}`,
            mt: 1,
          }}
          elevation={3}
        >
          <Paper
            sx={{
              mt: 3,
              ml: 5,
              width: "80%",
              color: "white",
              backgroundColor: "transparent",
            }}
            elevation={0}
          >
            Layer type : 1
          </Paper>
          <Paper
            sx={{ mt: 3, color: "white", backgroundColor: "transparent" }}
            elevation={0}
          >
            <MenuIcon sx={{ fontSize: "3ch" }} />
          </Paper>
        </Paper>
        <Paper
          sx={{
            height: 80,
            width: "100%",
            display: "flex",
            backgroundColor: `${ColorArray[Math.floor(Math.random() * 10)]}`,
            mt: 1,
          }}
          elevation={3}
        >
          <Paper
            sx={{
              mt: 3,
              ml: 5,
              width: "80%",
              color: "white",
              backgroundColor: "transparent",
            }}
            elevation={0}
          >
            Layer type : 1
          </Paper>
          <Paper
            sx={{ mt: 3, color: "white", backgroundColor: "transparent" }}
            elevation={0}
          >
            <MenuIcon sx={{ fontSize: "3ch" }} />
          </Paper>
        </Paper>
        <Paper
          sx={{
            height: 80,
            width: "100%",
            display: "flex",
            backgroundColor: `${ColorArray[Math.floor(Math.random() * 10)]}`,
            mt: 1,
          }}
          elevation={3}
        >
          <Paper
            sx={{
              mt: 3,
              ml: 5,
              width: "80%",
              color: "white",
              backgroundColor: "transparent",
            }}
            elevation={0}
          >
            Layer type : 1
          </Paper>
          <Paper
            sx={{ mt: 3, color: "white", backgroundColor: "transparent" }}
            elevation={0}
          >
            <MenuIcon sx={{ fontSize: "3ch" }} />
          </Paper>
        </Paper>
      </Paper>
    </>
  );
};
export default SimulationEdit;

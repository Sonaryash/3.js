import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./HomePage.css";
import IconMenu from "../CustomComponents/SecondaryNav";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SegmentIcon from "@mui/icons-material/Segment";
import Paper from "@mui/material/Paper";
import MainPallet from "../pages/MainPallet";
import RoutePage from "../pages/RoutePage";

const drawerWidth = 100;

const PermanentDrawerLeft = () => {
  //project
  const [nameOfProject, setNameOfProject] = useState("");
  const [descOfProject, setDescOfProject] = useState("");
  //product
  const [lengthOfProduct, setLengthOfProduct] = useState(0);
  const [widthOfProduct, setWidthOfProduct] = useState(0);
  const [heightOfProduct, setHeightOfProduct] = useState(0);
  const [weightOfProduct, setWeighthOfProduct] = useState(0);
  const [labelOfProduct, setLabelOfProduct] = useState(0);
  //Pallet
  const [stdPallet, setStdPallet] = useState("US 2: 1067 x 1067");
  const [lengthOfPallet, setLengthOfPallet] = useState(0);
  const [widthOfPallet, setWidthOfPallet] = useState(0);
  const [heightOfPallet, setHeightOfPallet] = useState(0);
  const [layershOfPallet, setLayersOfPallet] = useState(0);
  const [loadOfPallet, setLoadOfPallet] = useState(0);
  const [overhangEOfPallet, setOverhangEOfPallet] = useState(0);
  const [overhangSOfPallet, setOverhangSOfPallet] = useState(0);
  //Palletizing
  const [maxGripPelletizing, setMaxGripPelletizing] = useState(0);
  const [boxPaddingPelletizing, setBoxPadding] = useState(0);
  //SuccessFlag
  const successFlag = [false, false, false, false];

  const FsFUnctionJson = () => {
    console.log("fff", successFlag);
  };

  useState(() => {
    FsFUnctionJson();
  }, [successFlag]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#00337C",
              color: "#fff",
            },
          }}
          variant="permanent"
          anchor="left"
          className="Nav-Container"
        >
          <Toolbar className="Container-Logo">
            {/* <img src={Logo} className="Img-Logo" /> */}
            <div className="Img-Logo"></div>
          </Toolbar>
          <Divider />
          <List>
            {["true", "false"].map((text, index) => (
              <ListItem key={text} disablePadding className="Nav-Container">
                <ListItemButton>
                  <ListItemIcon className="Nav-Icon-Bar">
                    {index === 0 ? (
                      <Link to="/MainProjectData">
                        <SegmentIcon className="Nav-Icon" />
                      </Link>
                    ) : (
                      <Link to="/MainPallet">
                        <FolderOpenIcon className="Nav-Icon" />
                      </Link>
                    )}
                    {/* <InboxIcon className="Nav-Icon" /> */}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        {
          <Routes>
            <Route
              path="/MainProjectData"
              element={
                <RoutePage
                  nameOfProject={nameOfProject}
                  setNameOfProject={setNameOfProject}
                  descOfProject={descOfProject}
                  setDescOfProject={setDescOfProject}
                  lengthOfProduct={lengthOfProduct}
                  setLengthOfProduct={setLengthOfProduct}
                  widthOfProduct={widthOfProduct}
                  setWidthOfProduct={setWidthOfProduct}
                  heightOfProduct={heightOfProduct}
                  setHeightOfProduct={setHeightOfProduct}
                  weightOfProduct={weightOfProduct}
                  setWeighthOfProduct={setWeighthOfProduct}
                  labelOfProduct={labelOfProduct}
                  setLabelOfProduct={setLabelOfProduct}
                  stdPallet={stdPallet}
                  setStdPallet={setStdPallet}
                  lengthOfPallet={lengthOfPallet}
                  setLengthOfPallet={setLengthOfPallet}
                  widthOfPallet={widthOfPallet}
                  setWidthOfPallet={setWidthOfPallet}
                  heightOfPallet={heightOfPallet}
                  setHeightOfPallet={setHeightOfPallet}
                  layershOfPallet={layershOfPallet}
                  setLayersOfPallet={setLayersOfPallet}
                  loadOfPallet={loadOfPallet}
                  setLoadOfPallet={setLoadOfPallet}
                  overhangEOfPallet={overhangEOfPallet}
                  setOverhangEOfPallet={setOverhangEOfPallet}
                  overhangSOfPallet={overhangSOfPallet}
                  setOverhangSOfPallet={setOverhangSOfPallet}
                  maxGripPelletizing={maxGripPelletizing}
                  setMaxGripPelletizing={setMaxGripPelletizing}
                  boxPaddingPelletizing={boxPaddingPelletizing}
                  setBoxPadding={setBoxPadding}
                  successFlag={successFlag}
                />
              }
            ></Route>
            <Route
              path="/MainPallet"
              element={
                <MainPallet
                  nameOfProject={nameOfProject}
                  layershOfPallet={layershOfPallet}
                  heightOfPallet={heightOfPallet}
                  weightOfProduct={weightOfProduct}
                  successFlag={successFlag}
                />
              }
            ></Route>
          </Routes>
        }
      </Box>
    </>
  );
};

export default PermanentDrawerLeft;

import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TernaryNav from "../CustomComponents/TernaryNav";
import { Routes, Route, Link } from "react-router-dom";
import EditNavBar from "../CustomComponents/EditNavBar/EditNavBar";
import SimulationEdit from "../CustomComponents/SimulationEdit/SimulationEdit";
import ProductInfoCard from "../CustomComponents/EditNavBar/ProductInfoCard";
import SettingsEdit from "../CustomComponents/SettingsEdit/SettingsEdit";

export default function MainPallet(Props) {
  const[layerCounter, setLayerCounter]=useState(1);

  const {
    nameOfProject,
    layershOfPallet,
    heightOfPallet,
    weightOfProduct,
    successFlag,
  } = Props;
  const [layered, setLayered] = useState(true);
  const [editProduct, setEditProduct] = useState(false);
  const [settings, setSettings] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Paper
        sx={{ width: 100, maxWidth: "100%", minHeight: "100vh", margin: "0" }}
      >
        <TernaryNav
          setLayered={setLayered}
          setEditProduct={setEditProduct}
          setSettings={setSettings}
        />
      </Paper>
      {layered ? (
        <EditNavBar setLayerCounter={setLayerCounter}/>
      ) : editProduct ? (
        <SimulationEdit />
      ) : (
        <SettingsEdit />
      )}

      <ProductInfoCard
        nameOfProject={nameOfProject}
        layershOfPallet={layershOfPallet}
        heightOfPallet={heightOfPallet}
        weightOfProduct={weightOfProduct}
        successFlag={successFlag}
        layerCounter={layerCounter}
      />
    </Box>
  );
}

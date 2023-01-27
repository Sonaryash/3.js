import { Suspense } from "react";
import { Link } from "react-router-dom";
import "./ProductInfoCard.css";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SendIcon from "@mui/icons-material/Send";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import HeightIcon from "@mui/icons-material/Height";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ScaleIcon from "@mui/icons-material/Scale";
import LayersIcon from '@mui/icons-material/Layers';
import PercentIcon from '@mui/icons-material/Percent';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import WidgetsIcon from '@mui/icons-material/Widgets';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Canvas } from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import FinalProduct from "./FinalProductAnimation";
import FinalProduct2 from "./FinalProductAnimation2"
import Model from "./Belt";
import Arrow1 from "./Arrow1";
import Arrow2 from "./Arrow2";
import Arrow3 from "./Arrow3";
const ProductInfoCard = (Props) => {
  const {
    nameOfProject,
    layershOfPallet,
    heightOfPallet,
    weightOfProduct,
    successFlag,
    layerCounter
  } = Props;

  return (
    <>
      <Paper
        sx={{
          width: 750,
          maxWidth: "100%",
          minHeight: "100vh",
          margin: "0",
        }}
      >
        <Paper className="Title-Card">{nameOfProject}</Paper>
        <Paper className="Title-Card">
          <div className="Pallet-Summary" style={{color:"gray"}}>Pallet Summery</div>
          <div className="Pallet-Summary"><WidgetsIcon /> {layershOfPallet }*2</div>
          <div className="Pallet-Summary">
            <HeightIcon />
            {(heightOfPallet)+112/100}
          </div>
          <div className="Pallet-Summary">
            <UnfoldMoreIcon />
            0.4 m
          </div>
          <div className="Pallet-Summary">
            <ScaleIcon /> {(weightOfProduct)/100} kg
          </div>
          <div className="Pallet-Summary"><LayersIcon/> 2</div>{" "}
          <div className="Pallet-Summary"><PercentIcon/> 70</div>{" "}
          <div className="Pallet-Summary"><ViewInArIcon /> 70</div>
        </Paper>
        <Paper className="Title-Card">
          <Button
            className="btn-TTT"
            variant="outlined"
            sx={{ fontSize: 10, ml: "0.5rem" }}
            onClick={()=>{
              alert("Currently unavailable this feature !")
            }}
          >
            Pallet Report &nbsp; <SummarizeIcon />
          </Button>
          <Button
            className="btn-TTT"
            variant="outlined"
            sx={{
              fontSize: 10,
              ml: "0.5rem",
              backgroundColor: "#54B435",
              color: "#fff",
            }}
            onClick={()=>{
              alert("Currently unavailable this feature !")
            }}
          >
            Send to Simulation &nbsp; <SendIcon />
          </Button>
          <Link to="./temp.json" target="_blank" style={{color: successFlag ? "red" : "#54B435"}}> <Button
            className="btn-TTT"
            variant="outlined"
            sx={{ fontSize: 10, ml: "0.5rem" }}
          >
            Download Pelletizing File &nbsp; <CloudDownloadIcon />
          </Button></Link>
         
        </Paper>
        <Paper sx={{height:"60ch", width:"80ch",ml:"auto",mr:"auto",mt:"10ch"}}>
        <Canvas className="Canvas-Wrapper">
          <OrbitControls />
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2,5,2]} intensity={1}/>
          <Suspense >
          <FinalProduct2 layerCounter={layerCounter}/>
          </Suspense>
        </Canvas>
        </Paper>
        <Paper sx={{height:"50ch", width:"50ch",ml:"auto",mr:"auto",mt:"10ch"}}>
        <Canvas className="Canvas-Wrapper">
          <OrbitControls enableZoom={false}/>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2,5,2]} intensity={1}/>
          <Suspense>
          <FinalProduct/>
          </Suspense>
          <Suspense>
          <Arrow1 />
          </Suspense>
          <Suspense>
          <Arrow2 />
          </Suspense>
          <Suspense>
          <Arrow3 />
          </Suspense>
          <Suspense>
          <Model/>
          </Suspense>
        </Canvas>
        </Paper>

        {/* sdsddsdsd */}
      </Paper>
      <Paper sx={{width:50}} elevation={1}>
        <Paper sx={{width:50,textAlign:"center", mt:5}} elevation={0}>
        <VisibilityIcon />
        </Paper>
      </Paper>
    </>
  );
};

export default ProductInfoCard;

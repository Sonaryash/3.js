import * as React from "react";
import "../ProjectCart/ProjectCart.css";
import "./PelletizingCart.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FormPropsTextFields from "../ButtonsAndInputs/Button";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const PelletizingCart = (Props) => {
  const {
    maxGripPelletizing,
    setMaxGripPelletizing,
    boxPaddingPelletizing,
    setBoxPadding,
    successFlag,setProjectCart,setProductCart,setPalletCart,setPelletizingCart
  } = Props;

  const validate12=()=>{
    if (maxGripPelletizing<=0){
      return ("Field cannot be empty");
    }else if(maxGripPelletizing>8){
      return ("Maximum boxes per grip cannot be greater than 8");
    }else{
      return ("The max number of products that can be lifted at once");
    }
  };
  const validate13=()=>{
    if (boxPaddingPelletizing<=0){
      return ("Field cannot be empty");
    }else if(boxPaddingPelletizing>100){
      return ("Padding cannot be greater than 100");
    }else{
      return ("Free space between products");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
        backgroundColor: "red",
      }}
    >
      <Paper elevation={0} className="Paper-Wrapper-1">
        <Typography variant="h5" sx={{ ml: 4, mt: 8 }}>
          Pelletizing
        </Typography>
        <FormPropsTextFields
          label={"Max grip: "}
          defaultValue={"5"}
          type="number"
          helperText={`${validate12()}`}
          onEventClick={setMaxGripPelletizing}
          Value={maxGripPelletizing}
        />
        <FormPropsTextFields
          label={"Box Padding: "}
          defaultValue={"5"}
          type="number"
          helperText={`${validate13()}`}
          onEventClick={setBoxPadding}
          Value={boxPaddingPelletizing}
        />
      </Paper>
      <Paper elevation={2} className="Paper-Wrapper-2">
        <Paper
          sx={{ width: "40ch", height: "25ch", ml: "10ch", mt: "5ch" }}
          className="Picture-6"
          elevation={0}
        ></Paper>
        <Typography sx={{ ml: "20ch", mt: "2ch" }}>Box Padding</Typography>
        <Button variant="contained" sx={{ mt: "50%", mb: "1ch", ml: "80%" }} onClick={()=>{
          if(maxGripPelletizing && boxPaddingPelletizing){
            console.log("true")
            successFlag[3]=true;
          }else{
            console.log("false")
          }
        }}>
          Next <ChevronRightIcon />
        </Button>
      </Paper>
    </Box>
  );
};

export default PelletizingCart;

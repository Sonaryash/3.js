import { useState } from "react";
import "./ProductCart.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FormPropsTextFields from "../ButtonsAndInputs/Button";
import { Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import BorderLeftIcon from "@mui/icons-material/BorderLeft";
import BorderRightIcon from "@mui/icons-material/BorderRight";
import BorderTopIcon from "@mui/icons-material/BorderTop";
import BorderBottomIcon from "@mui/icons-material/BorderBottom";
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ProductCart = (Props) => {
  const {lengthOfProduct, setLengthOfProduct,widthOfProduct, setWidthOfProduct,heightOfProduct, setHeightOfProduct,weightOfProduct, setWeighthOfProduct,labelOfProduct, setLabelOfProduct,successFlag,setProjectCart,setProductCart,setPalletCart,setPelletizingCart}=Props;
  const [label, setLabel] = useState(true);
  console.log("orientation",labelOfProduct);
  const validate3=()=>{
    if (lengthOfProduct<=0){
      return ("Field cannot be empty");
    }else if(lengthOfProduct>1200){
      return ("Product length cannot be greater than 1200");
    }else{
      return ("");
    }
  };
  const validate4=()=>{
    if (widthOfProduct<=0){
      return ("Field cannot be empty");
    }else if(widthOfProduct>100){
      return ("Product width cannot be greater than 100");
    }else{
      return ("");
    }
  };
  const validate5=()=>{
    if (heightOfProduct<=0){
      return ("Field cannot be empty");
    }else if(lengthOfProduct>1200){
      return ("Product height cannot be greater than 5000");
    }else{
      return ("");
    }
  };
  const validate6=()=>{
    if (weightOfProduct<=0){
      return ("Field cannot be empty");
    }else{
      return ("");
    }
  };

  const handleChange = (event) => {
    setLabelOfProduct(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
      }}
    >
      <Paper
        elevation={0}
        className="Paper-Wrapper-1"
        sx={{ overflowY: "scroll" }}
      >
        <Typography variant="h5" sx={{ ml: 4, mt: 8 }}>
          Product
        </Typography>
        <FormPropsTextFields
          label={"Length"}
          defaultValue={"350"}
          helperText={`${validate3()}`}
          type="number"
          onEventClick={setLengthOfProduct}
          Value={lengthOfProduct}
        />
        <FormPropsTextFields
          label={"Width"}
          defaultValue={"250"}
          helperText={`${validate4()}`}
          type="number"
          onEventClick={setWidthOfProduct}
          Value={widthOfProduct}
        />
        <FormPropsTextFields
          label={"Height"}
          defaultValue={"200"}
          helperText={`${validate5()}`}
          type="number"
          onEventClick={setHeightOfProduct}
          Value={heightOfProduct}
        />
        <FormPropsTextFields
          label={"Weight"}
          defaultValue={"1500"}
          helperText={`${validate6()}`}
          type="number"
          onEventClick={setWeighthOfProduct}
          Value={weightOfProduct}
        />
        <Paper elevation={0} sx={{ mt: "5ch" }}>
          <Switch
            defaultChecked
            onChange={(Event) => {
              setLabel(Event.target.checked);
            }}
          />{" "}
          Label Orientation
        </Paper>
        {/* Selection Box */}
        {label ? (
          <FormControl sx={{ ml: 5, mt: 4, mb: 5, maxWidth: "40ch" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Label orientation:
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={labelOfProduct}
              label="Label orientation:"
              onChange={handleChange}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={0}>
                <BorderBottomIcon /> Front: 0°
              </MenuItem>
              <MenuItem value={90}>
                <BorderRightIcon /> Right: 90°
              </MenuItem>
              <MenuItem value={180}>
                <BorderTopIcon /> Back: 180°
              </MenuItem>
              <MenuItem value={-90}>
                <BorderLeftIcon /> Left: -90°
              </MenuItem>
            </Select>
            <FormHelperText>
              Which side of product is the label added? Front = end of conveyor
            </FormHelperText>
          </FormControl>
        ) : (
          <></>
        )}
      </Paper>
      <Paper elevation={2} className="Paper-Wrapper-2">
        <Paper
          sx={{ width: "30ch", height: "30ch", ml: "10ch", mt: "2ch" }}
          className="Picture-2"
          elevation={0}
        ></Paper>
        <Typography sx={{ ml: "20ch", mt: "2ch" }}>
          Product Dimensions
        </Typography>
        {label ? (
          <>
            <Paper
              sx={{ width: "30ch", height: "30ch", ml: "10ch" }}
              className="Picture-3"
              elevation={0}
            ></Paper>
            <Typography sx={{ ml: "20ch", mt: "1ch" }}>
              Label Orientation
            </Typography>
          </>
        ) : (
          <></>
        )}
        <Button variant="contained" sx={{ mt: "5%", mb: "1ch", ml: "80%" }} onClick={()=>{
          if(lengthOfProduct && widthOfProduct && heightOfProduct && weightOfProduct && labelOfProduct){
            setProjectCart(false);
            setProductCart(false);
            setPalletCart(true);
            setPelletizingCart(false);
            successFlag[1]=true
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

export default ProductCart;

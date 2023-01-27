import { useState } from "react";
import "./PalletCart.css";
import "../ProjectCart/ProjectCart.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import FormPropsTextFields from "../ButtonsAndInputs/Button";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const PalletCart = (Props) => {
  const {
    stdPallet,
    setStdPallet,
    lengthOfPallet,
    setLengthOfPallet,
    widthOfPallet,
    setWidthOfPallet,
    heightOfPallet,
    setHeightOfPallet,
    layershOfPallet,
    setLayersOfPallet,
    loadOfPallet,
    setLoadOfPallet,
    overhangEOfPallet,
    setOverhangEOfPallet,
    overhangSOfPallet,
    setOverhangSOfPallet,
    successFlag,
    setProjectCart,setProductCart,setPalletCart,setPelletizingCart
  } = Props;

  const [palletSelection, setPalletSelection] = useState(true);
  const validate5 = () => {
    if (lengthOfPallet <= 0) {
      return "Field cannot be empty";
    } else if (lengthOfPallet > 1500) {
      return "Pallet length cannot be greater than 1500";
    } else {
      return "";
    }
  };

  const validate6 = () => {
    if (widthOfPallet <= 0) {
      return "Field cannot be empty";
    } else if (widthOfPallet > 1500) {
      return "Pallet width cannot be greater than 1500";
    } else {
      return "";
    }
  };
  const validate7 = () => {
    if (heightOfPallet <= 0) {
      return "Field cannot be empty";
    } else if (heightOfPallet > 1000) {
      return "Pallet height cannot be greater than 1000";
    } else {
      return "";
    }
  };
  const validate8 = () => {
    if (layershOfPallet <= 0) {
      return "Field cannot be empty";
    } else if (layershOfPallet > 100) {
      return "Layer count cannot be greater than 100";
    } else {
      return "Total no. of layers";
    }
  };
  const validate9 = () => {
    if (loadOfPallet <= 0) {
      return "Field cannot be empty";
    } else if (loadOfPallet > 16000) {
      return "Pallet height cannot be greater than 16000";
    } else {
      return "Pallet load height when finished";
    }
  };
  const validate10 = () => {
    if (overhangEOfPallet <= 0) {
      return "Field cannot be empty";
    } else if (overhangEOfPallet > 1500) {
      return "Pallet overhang cannot be greater than 1500";
    } else {
      return "Allowed product overhang top and bottom";
    }
  };
  const validate11 = () => {
    if (overhangSOfPallet <= 0) {
      return "Field cannot be empty";
    } else if (overhangSOfPallet > 1500) {
      return "Pallet overhang cannot be greater than 1500";
    } else {
      return "Allowed product overhang left and right";
    }
  };
  const handleChange = (event) => {
    setStdPallet(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
        backgroundColor: "red",
      }}
    >
      <Paper
        elevation={0}
        className="Paper-Wrapper-1"
        sx={{ overflowY: "scroll" }}
      >
        <Typography variant="h5" sx={{ ml: 4, mt: 8 }}>
          Pallets
        </Typography>
        <FormControl sx={{ ml: 4, mt: 4, minWidth: "40ch" }}>
          <InputLabel id="demo-simple-select-helper-label">
            Label orientation:
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={stdPallet}
            label="Label orientation:"
            onChange={handleChange}
          >
            <MenuItem value={20}>US 2: 1067 x 1067</MenuItem>
            <MenuItem value={30}> US 1: 1200 x 800</MenuItem>
            <MenuItem value={30}>US 2: 1200 x 1000</MenuItem>
            <MenuItem value={30}>US 2: 800 x 600</MenuItem>
            <MenuItem value={30}>US 2: 1165 x 1165</MenuItem>
            <MenuItem value={30}>US 2: 110 x 1100</MenuItem>
          </Select>
          <FormHelperText>Optional: Choose a standard pallet</FormHelperText>
        </FormControl>
        <FormPropsTextFields
          label={"Length: "}
          defaultValue={"1200"}
          type="number"
          helperText={`${validate5()}`}
          onEventClick={setLengthOfPallet}
          Value={lengthOfPallet}
        />
        <FormPropsTextFields
          label={"Width: "}
          defaultValue={"2"}
          type="number"
          helperText={`${validate6()}`}
          onEventClick={setWidthOfPallet}
          Value={widthOfPallet}

        />{" "}
        <FormPropsTextFields
          label={"Height: "}
          defaultValue={"100"}
          type="number"
          helperText={`${validate7()}`}
          onEventClick={setHeightOfPallet}
          Value={heightOfPallet}

        />
        <FormPropsTextFields
          label={"Layer"}
          defaultValue={"144"}
          type="number"
          helperText={`${validate8()}`}
          onEventClick={setLayersOfPallet}
          Value={layershOfPallet}

        />
        <FormPropsTextFields
          label={"Pallet load height"}
          defaultValue={"400"}
          type="number"
          helperText={`${validate9()}`}
          onEventClick={setLoadOfPallet}
          Value={loadOfPallet}

        />
        <Paper elevation={0} sx={{ mt: "5ch" }}>
          <Switch
            onChange={(Event) => {
              setPalletSelection(Event.target.checked);
            }}
          />{" "}
          Pallet overhang
        </Paper>
        {palletSelection ? (
          <>
            {" "}
            <FormPropsTextFields
              label={"Overhang ends: "}
              defaultValue={"0"}
              type="number"
              helperText={`${validate10()}`}
              onEventClick={setOverhangEOfPallet}
              Value={overhangEOfPallet}

            />
            <FormPropsTextFields
              label={"Overhang sides: "}
              defaultValue={"0"}
              type="number"
              helperText={`${validate11()}`}
              onEventClick={setOverhangSOfPallet}
              Value={overhangSOfPallet}
            />
          </>
        ) : (
          <></>
        )}
      </Paper>
      <Paper elevation={2} className="Paper-Wrapper-2">
        <Paper
          sx={{ width: "40ch", height: "25ch", ml: "10ch", mt: "5ch" }}
          className="Picture-4"
          elevation={0}
        ></Paper>
        <Typography sx={{ ml: "20ch", mt: "2ch" }}>
          Pallet Dimensions
        </Typography>
        {palletSelection ? (
          <Paper
            sx={{ width: "40ch", height: "25ch", ml: "10ch", mt: "10ch" }}
            className="Picture-5"
            elevation={0}
          ></Paper>
        ) : (
          <></>
        )}
        <Button
          variant="contained"
          sx={{ mt: "5%", mb: "1ch", ml: "80%" }}
          onClick={() => {
            if (
              stdPallet &&
              lengthOfPallet &&
              widthOfPallet &&
              heightOfPallet &&
              layershOfPallet &&
              loadOfPallet &&
              overhangEOfPallet &&
              overhangSOfPallet
            ) {
              setProjectCart(false);
              setProductCart(false);
              setPalletCart(false);
              setPelletizingCart(true);
              successFlag[2] = true;
            } else {
              console.log("false");
            }
          }}
        >
          Next <ChevronRightIcon />
        </Button>
      </Paper>
    </Box>
  );
};

export default PalletCart;

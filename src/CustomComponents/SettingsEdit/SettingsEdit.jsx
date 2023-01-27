import { useState } from "react";
import Paper from "@mui/material/Paper";
import FormPropsTextFields from "../ButtonsAndInputs/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import BorderLeftIcon from "@mui/icons-material/BorderLeft";
import BorderRightIcon from "@mui/icons-material/BorderRight";
import BorderTopIcon from "@mui/icons-material/BorderTop";
import BorderBottomIcon from "@mui/icons-material/BorderBottom";

const SettingsEdit = () => {
    const [orientation, setOrientation] = useState("");

    const handleChange = (event) => {
      setOrientation(event.target.value);
    };
  return (
    <>
      <Paper
        sx={{
          width: 500,
          maxWidth: "100%",
          minHeight: "100vh",
          margin: "0",
          backgroundColor:"#EEEEEE"
        }}
      >
        <Typography
          variant="h6"
          sx={{ ml: 2, mt: 2, mb: 2, fontSize: "14px", color: "grey" }}
        >
          Stacking method
        </Typography>
        <FormControl sx={{ ml: 4, mt: 4, minWidth: "30ch" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Alternative (left pallet) layout:
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={orientation}
              label="Label orientation:"
              onChange={handleChange}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={10}>
                 Auto (generated at runtime)
              </MenuItem>
              <MenuItem value={20}>
                Copy
              </MenuItem>
              <MenuItem value={30}>
                Rotate
              </MenuItem>
              <MenuItem value={30}>
                Mirror
              </MenuItem>
              <MenuItem value={30}>
                Custom
              </MenuItem>
            </Select>
            <FormHelperText>
              Which side of product is the label added? Front = end of conveyor
            </FormHelperText>
          </FormControl>

        <FormPropsTextFields
          label={"Shimpaper thickness:"}
          defaultValue={""}
          helperText={"Height of a Shimpaper layer"}
          type={'number'}
        />
      </Paper>
    </>
  );
};
export default SettingsEdit;

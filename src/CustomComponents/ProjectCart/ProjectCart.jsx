import * as React from "react";
import "./ProjectCart.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FormPropsTextFields from "../ButtonsAndInputs/Button";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProjectCart = (Props) => {
  const { nameOfProject, setNameOfProject, descOfProject, setDescOfProject,successFlag,setProjectCart,setProductCart,setPalletCart,setPelletizingCart} =
    Props;
    const validate1=()=>{
      if (nameOfProject===""){
        return ("Please enter a name for your project");
      }else{
        return ("");
      }
    }
    const validate2=()=>{
      if (descOfProject===""){
        return ("Please provide a description for your project !");
      }else{
        return ("");
      }
    }

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
          Project
        </Typography>
        <FormPropsTextFields
          label={"Name:"}
          defaultValue={""}
          helperText={`${validate1()}`}
          onEventClick={setNameOfProject}
          Value={nameOfProject}
        />
        <FormPropsTextFields
          label={"Description:"}
          defaultValue={""}
          helperText={` Will be shown when choosing a pattern on the robot ${validate2()}`}
          onEventClick={setDescOfProject}
          Value={descOfProject}
        />
      </Paper>
      <Paper elevation={2} className="Paper-Wrapper-2">
        <Paper
          sx={{ width: "30ch", height: "35ch", ml: "20ch", mt: "15ch" }}
          className="Picture-1"
          elevation={0}
        ></Paper>
        <Button variant="contained" sx={{ mt: "5%", mb: "1ch", ml: "80%" }} onClick={()=>{
          if(nameOfProject && descOfProject){
            setProjectCart(false);
            setProductCart(true);
            setPalletCart(false);
            setPelletizingCart(false);
            successFlag[0]=true;
          }
        }}>
          Next <ChevronRightIcon />
        </Button>
      </Paper>
    </Box>
  );
};

export default ProjectCart;

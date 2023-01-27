import * as React from "react";
import "./SecondaryNav.css";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link,Outlet } from "react-router-dom";

const IconMenu = (Props) => {
  const {setProjectCart,setProductCart,setPalletCart,setPelletizingCart}= Props;
  
  console.log(typeof setProjectCart);

  return (
    <Paper sx={{ width: 250, maxWidth: "100%", minHeight: "80vh", margin:"0" }}>
      <MenuList sx={{backgroundColor:"white",justifyContent:"center",alignItems:"center",marginTop: "50%" }}>
        <MenuItem className="Sec-MenuItem" onClick={()=>{
          setProjectCart(true);
          setProductCart(false);
          setPalletCart(false);
          setPelletizingCart(false);
          console.log("weeks");
        }}>
          <ListItemText>Project</ListItemText>
          <Typography variant="body2" >
          <ChevronRightIcon />
          </Typography>
        </MenuItem>
        <MenuItem className="Sec-MenuItem" onClick={()=>{
          setProjectCart(false);
          setProductCart(true);
          setPalletCart(false);
          setPelletizingCart(false);
        }}>
          <ListItemText>Product</ListItemText>
          <Typography variant="body2" >
            <ChevronRightIcon />
          </Typography>
        </MenuItem>
        <MenuItem className="Sec-MenuItem" onClick={()=>{
          setProjectCart(false);
          setProductCart(false);
          setPalletCart(true);
          setPelletizingCart(false);
        }}>
          <ListItemText>Pallet</ListItemText>
          <Typography variant="body2">
          <ChevronRightIcon />
          </Typography>
        </MenuItem>
        <MenuItem className="Sec-MenuItem" onClick={()=>{
          setProjectCart(false);
          setProductCart(false);
          setPalletCart(false);
          setPelletizingCart(true);
        }}>
          <ListItemText>Pelletizing</ListItemText>
          <Typography variant="body2" >
          <ChevronRightIcon />
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
export default IconMenu;

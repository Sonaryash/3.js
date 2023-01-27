import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductInfoCard from "./ProductInfoCard";
import "./EditNavBar.css";

const EditNavBar = (Props) => {
  const {setLayerCounter}=Props;
  return (
    <>
      <Paper
        sx={{
          width: 500,
          maxWidth: "100%",
          minHeight: "100vh",
          margin: "0",
          overflowY: "scroll",
        }}
      >
        <Typography
          variant="h6"
          sx={{ ml: 2, mt: 2, mb: 2, fontSize: "14px", color: "grey" }}
        >
          Stacking method
        </Typography>
        <Paper
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            pl: "1ch",
            pr: "1ch",
          }}
          elevation={0}
        >
          <Button className="btn-TT" variant="outlined" sx={{ fontSize: 12 }}>
            Column Stack
          </Button>
          <Button className="btn-TT" variant="outlined" sx={{ fontSize: 12 }}>
            Rotate
          </Button>
          <Button className="btn-TT" variant="outlined" sx={{ fontSize: 12 }}>
            Mirror Vertically
          </Button>
          <Button className="btn-TT" variant="outlined" sx={{ fontSize: 12 }}>
            Mirror Horizontally
          </Button>
          <Button className="btn-TT" variant="outlined" sx={{ fontSize: 12 }}>
            Customized
          </Button>
        </Paper>
        {/*  */}
        <Paper sx={{ width: "100%", height: "100%", mt: "1ch" }} elevation={2}>
          <Typography
            variant="h6"
            sx={{ ml: 2, mt: 2, mb: 2, fontSize: "14px", color: "grey" }}
          >
            Base Pattern
          </Typography>
          <Paper
            sx={{
              width: "100%",
              height: "auto",
              mt: "1ch",
              overflowY: "scroll",
              display: "flex",
            }}
          >
            <Paper
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 1,
                overflowY: "hidden",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            > 
              <div className="Edit-Container" onClick={()=>{
                setLayerCounter(2);
              }}>
                <div>Box count: 2</div>
                <div className="Set-1"></div>
                <div className="Set-1"></div>
              </div> 
              <div className="Edit-Container" onClick={()=>{
                setLayerCounter(3);
              }}>
              <div>Box count: 3</div>
                <div className="Set-2"></div>
                <div className="Set-2"></div>
                <div className="Set-2"></div>
              </div>
              <div className="Edit-Container" onClick={()=>{
                setLayerCounter(4);
              }}>
              <div>Box count: 4</div>
                <div className="Set-3"></div>
                <div className="Set-3"></div>
                <div className="Set-3"></div>
                <div className="Set-3"></div>
              </div>
              <div className="Edit-Container" onClick={()=>{
                setLayerCounter(5);
              }}>
              <div>Box count: 5</div>
                <div className="Set-4"></div>
                <div className="Set-4"></div>
                <div className="Set-4"></div>
                <div className="Set-4"></div>
                <div className="Set-4"></div>
              </div>
            </Paper>
          </Paper>
        </Paper>
      </Paper>
    </>
  );
};
export default EditNavBar;

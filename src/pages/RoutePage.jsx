import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Routes, Route, Link } from "react-router-dom";
import IconMenu from "../CustomComponents/SecondaryNav";
import ProjectCart from "../CustomComponents/ProjectCart/ProjectCart";
import ProductCart from "../CustomComponents/ProductCart/ProductCart";
import PalletCart from "../CustomComponents/PalletCart/PalletCart";
import PelletizingCart from "../CustomComponents/PelletizingCart/PelletizingCart";
import { useState } from "react";

const RoutePage = (Props) => {
  const {
    nameOfProject,
    setNameOfProject,
    descOfProject,
    setDescOfProject,
    lengthOfProduct,
    setLengthOfProduct,
    widthOfProduct,
    setWidthOfProduct,
    heightOfProduct,
    setHeightOfProduct,
    weightOfProduct,
    setWeighthOfProduct,
    labelOfProduct,
    setLabelOfProduct,
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
    maxGripPelletizing,
    setMaxGripPelletizing,
    boxPaddingPelletizing,
    setBoxPadding,
    successFlag
  } = Props;
  const [projectCart, setProjectCart] = useState(false);
  const [productCart, setProductCart] = useState(false);
  const [palletCart, setPalletCart] = useState(false);
  const [pelletizingCart, setPelletizingCart] = useState(true);
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        <Paper sx={{ display: "flex" }}>
          <IconMenu
            setProjectCart={setProjectCart}
            setProductCart={setProductCart}
            setPalletCart={setPalletCart}
            setPelletizingCart={setPelletizingCart}
          />
          {projectCart ? (
            <ProjectCart
              nameOfProject={nameOfProject}
              setNameOfProject={setNameOfProject}
              descOfProject={descOfProject}
              setDescOfProject={setDescOfProject}
              successFlag={successFlag}
              setProjectCart={setProjectCart}
              setProductCart={setProductCart}
              setPalletCart={setPalletCart}
              setPelletizingCart={setPelletizingCart}
            />
          ) : productCart ? (
            <ProductCart
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
              successFlag={successFlag}
              setProjectCart={setProjectCart}
              setProductCart={setProductCart}
              setPalletCart={setPalletCart}
              setPelletizingCart={setPelletizingCart}
            />
          ) : palletCart ? (
            <PalletCart
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
              successFlag={successFlag}
              setProjectCart={setProjectCart}
              setProductCart={setProductCart}
              setPalletCart={setPalletCart}
              setPelletizingCart={setPelletizingCart}
            />
          ) : (
            <PelletizingCart
              maxGripPelletizing={maxGripPelletizing}
              setMaxGripPelletizing={setMaxGripPelletizing}
              boxPaddingPelletizing={boxPaddingPelletizing}
              setBoxPadding={setBoxPadding}
              successFlag={successFlag}
              setProjectCart={setProjectCart}
              setProductCart={setProductCart}
              setPalletCart={setPalletCart}
              setPelletizingCart={setPelletizingCart}
            />
          )}
        </Paper>
      </Box>
    </>
  );
};
export default RoutePage;

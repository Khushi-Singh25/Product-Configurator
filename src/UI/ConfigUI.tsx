import { useRef, useState, MouseEvent } from "react";
import { FormLabel, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Switch from "@mui/material/Switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Stack from "@mui/material/Stack";
import useStore from "../state/store";

const ConfigUI = () => {
  const dayRef = useRef(true);
  const [activePattern, setActivePattern] = useState("ink");
  const [activeTable, setActiveTable] = useState("round");
  const setRotating = useStore((state) => state.setRotating);
  const isRotating = useStore((state) => state.isRotating);
  const setCurrentPattern = useStore((state) => state.setCurrentPattern);
  const setCurrentTable = useStore((state) => state.setCurrentTable);
  const switchDayMode = useStore((state) => state.switchDayMode);

  const toggleRotate = () => {
    setRotating(!isRotating);
  };

  const toggleLights = () => {
    dayRef.current = !dayRef.current;
    switchDayMode(dayRef.current);
  };

  const updatePattern = (_: MouseEvent<HTMLElement>, newPattern: string) => {
    setCurrentPattern(newPattern);
    setActivePattern(newPattern);
  };

  const updateTable = (_: MouseEvent<HTMLElement>, newTable: string) => {
    setCurrentTable(newTable);
    setActiveTable(newTable);
  };

  return (
    <>
      <div id="copyright" className="panel">
        <Stack direction="row">
          <CopyrightIcon /> <Typography>2025 Developed by Khushi-Singh</Typography>
        </Stack>
      </div>
      <div id="autoRotate" className="panel">
        <FormLabel sx={{ fontWeight: "bold", fontSize: "h6.fontSize" }}>
          Auto-rotate
        </FormLabel>
        <div>
          <Switch sx={{ ml: 2 }} onChange={toggleRotate} color="primary" />
        </div>
      </div>

      <div id="title" className="panel">
        <FormLabel sx={{ fontWeight: "bold", fontSize: "h5.fontSize" }}>
          Vase Configurator
        </FormLabel>
      </div>

      <div id="pattern" className="panel">
        <ToggleButtonGroup
          orientation="vertical"
          exclusive
          onChange={updatePattern}
          aria-label="pattern change"
          id="patternChange"
          className="buttonGroup"
        >
          <div>
            <FormLabel className="buttonText">Ink blot</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={
                activePattern === "ink"
                  ? {
                      backgroundImage: `url(./textures/blot.jpg)`,
                      border: "2px solid darkblue",
                    }
                  : { backgroundImage: `url(./textures/blot.jpg)` }
              }
              value="ink"
              aria-label="ink blot"
            ></ToggleButton>
          </div>
          <div>
            <FormLabel className="buttonText">Zebra</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={
                activePattern === "zebra"
                  ? {
                      backgroundImage: `url(./textures/zebra.jpg)`,
                      border: "2px solid darkblue",
                    }
                  : { backgroundImage: `url(./textures/zebra.jpg)` }
              }
              value="zebra"
              aria-label="zebra"
            ></ToggleButton>
          </div>
          <div>
            <FormLabel className="buttonText">Flower</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={
                activePattern === "flowers"
                  ? {
                      backgroundImage: `url(./textures/flowersIcon.jpg)`,
                      border: "2px solid darkblue",
                    }
                  : { backgroundImage: `url(./textures/flowersIcon.jpg)` }
              }
              value="flowers"
              aria-label="flowers"
            ></ToggleButton>
          </div>
          <div>
            <FormLabel className="buttonText">Orange</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={
                activePattern === "orange"
                  ? {
                      backgroundImage: `url(./textures/orangeIcon.jpg)`,
                      border: "2px solid darkblue",
                    }
                  : { backgroundImage: `url(./textures/orangeIcon.jpg)` }
              }
              value="orange"
              aria-label="orange"
            ></ToggleButton>
          </div>
          <div>
            <FormLabel className="buttonText">Glass</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={
                activePattern === "glass"
                  ? {
                      backgroundImage: `url(./textures/glass.png)`,
                      border: "2px solid darkblue",
                    }
                  : { backgroundImage: `url(./textures/glass.png)` }
              }
              value="glass"
              aria-label="glass"
            ></ToggleButton>
          </div>
        </ToggleButtonGroup>
      </div>
      <div id="table" className="panel">
        <ToggleButtonGroup
          sx={{ ml: 1 }}
          orientation="vertical"
          exclusive
          onChange={updateTable}
          aria-label="table change"
          id="tableChange"
          className="buttonGroup"
        >
          <div>
            <FormLabel className="buttonText">Table</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={
                activeTable === "round"
                  ? {
                      backgroundImage: `url(./textures/round.png)`,
                      backgroundPosition: "center",
                      border: "2px solid blue",
                    }
                  : {
                      backgroundImage: `url(./textures/round.png)`,
                      backgroundPosition: "center",
                    }
              }
              value="round"
              aria-label="round table"
            ></ToggleButton>
          </div>
          <div>
            <FormLabel className="buttonText">Stand</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={
                activeTable === "stand"
                  ? {
                      backgroundImage: `url(./textures/stand.png)`,
                      backgroundPosition: "center",
                      border: "2px solid blue",
                    }
                  : {
                      backgroundImage: `url(./textures/stand.png)`,
                      backgroundPosition: "center",
                    }
              }
              value="stand"
              aria-label="stand"
            ></ToggleButton>
          </div>
          <div>
            <FormLabel className="buttonText">Shelf</FormLabel>
            <ToggleButton
              className="roundedButton"
              sx={{ mb: 1 }}
              style={
                activeTable === "shelf"
                  ? {
                      backgroundImage: `url(./textures/shelf.png)`,
                      backgroundPosition: "center",
                      border: "2px solid blue",
                    }
                  : {
                      backgroundImage: `url(./textures/shelf.png)`,
                      backgroundPosition: "center",
                    }
              }
              value="shelf"
              aria-label="shelf"
            ></ToggleButton>
          </div>
        </ToggleButtonGroup>
      </div>
      <div id="lights" className="panel">
        <FormLabel
          sx={{ ml: 1, fontWeight: "bold", fontSize: "h6.fontSize" }}
          id="demo-radio-buttons-group-label"
        >
          Lighting
        </FormLabel>
        <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
          <LightModeIcon color="action" />
          <Switch onChange={toggleLights} color="primary" />
          <DarkModeIcon />
        </Stack>
      </div>
    </>
  );
};

export default ConfigUI;

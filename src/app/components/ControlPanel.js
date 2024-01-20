"use client";

import React, { useContext } from "react";

// react-input-number
import InputNumber from "rc-input-number";

// react-color
import { ChromePicker } from "react-color";

// contexts
import { ControlPanelContext } from "../contexts/ControlPanelContext";

const ControlPanel = (props) => {
  const {
    genTrigger,
    setGenTrigger,
    branches,
    setBranches,
    angle,
    setAngle,
    levels,
    setLevels,
    strokeStyle,
    setStrokeStyle,
    downloadImage,
    setDownloadImage,
  } = useContext(ControlPanelContext);

  // update stroke style on color change
  const handleColorChange = (color, event) => {
    setStrokeStyle(color.hex);
  };

  // 4JANE: styles not applying to components. need to install css in js or similiar
  const styles = {
    input: {
      fontSize: 20,
      outline: "none",
      border: "1px solid blue",
      color: "blue",
      textAlign: "center",
      background: "transparent",
      borderRadius: 4,
    },
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "left",
        justifyContent: "space-between",
        width: 300,
        margin: '5rem',
    }
  };

  return (
    <div>
      <button
        onClick={() => setGenTrigger(genTrigger + 1)}
        style={{ height: 50 }}
      >
        Generate Fractal
      </button>

      <div>
        <div>
          <div className={styles.inputContainer}>
            <p>Branches</p>
            <InputNumber
              className={styles.input}
              step={1}
              value={branches}
              onChange={setBranches}
              enableMobileNumericKeyboard
            />
          </div>
          <div className={styles.inputContainer}>
            <p>Angle</p>
            <InputNumber
              className={styles.input}
              step={1}
              value={angle}
              onChange={setAngle}
              enableMobileNumericKeyboard
            />
          </div>
          <div className={styles.inputContainer}>
            <p>Levels</p>
            <InputNumber
              className={styles.input}
              step={1}
              value={levels}
              min={1}
              max={5}
              onChange={setLevels}
              enableMobileNumericKeyboard
            />
          </div>

          <div
            style={{
              paddingTop: 20,
            }}
          >
            <button onClick={() => setDownloadImage(!downloadImage)}>
              Download
            </button>
          </div>

          <div
            style={{
              paddingTop: 20,
            }}
          >
            <ChromePicker
              color={strokeStyle}
              onChange={handleColorChange}
              disableAlpha
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;

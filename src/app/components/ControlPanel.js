"use client";

import React, { useContext } from "react";

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

  const handleAngleChange = (event) => {
    setAngle(event.target.value)
  };

  const handleBranchesChange = (event) => {
    setBranches(event.target.value)
  };

  const handleLevelsChange = (event) => {
    setLevels(event.target.value)
  };


  const styles = {

    // Controller Container
    controller: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexWrap: 'wrap',
      backgroundColor: 'black'
    },

    // Color Picker
    colorPicker: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    },

    // Inputs
    inputs: {
      flex: 1,
      width: 300,
      margin: '5rem',
    },

    //input 
    input: {
      WebkitAppearance: 'none',
      width: '100%',
      background: '#120a27',
      borderRadius: 10,
      margin: '10px 0 16px 0'
    },

    //Buttons
    buttons: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: '100%',
      alignItems: 'center'
    },

    //Button
    button: {
      padding: 10,
      width: '80%',
      backgroundColor: "#120a27",
      margin: '10px 0'
    }

  };

  return (
   
      <div style={styles.controller}>

        <div style={styles.colorPicker}>
          <ChromePicker
            color={strokeStyle}
            onChange={handleColorChange}
            disableAlpha
          />
        </div>

        <div style={styles.inputs}>

   
            <p>Angle</p>
            <input 
              style={styles.input}
              type="range"
              min="0"
              max="100"
              step={1}
              onChange={handleAngleChange}
              value={angle}
            />
        
            <p>Branches</p>
            <input 
              style={styles.input}
              type="range"
              min="0"
              max="100"
              step={1}
              onChange={handleBranchesChange}
              value={branches}
            />
          
            <p>Levels</p>
            <input 
              style={styles.input}
              type="range"
              min="0"
              max="5"
              step={1}
              onChange={handleLevelsChange}
              value={levels}
            />
     
        </div>

        <div style={styles.buttons}>

        <button onClick={() => setGenTrigger(genTrigger + 1)} style={styles.button}>
            Random Fractal
          </button>
        
          <button onClick={() => setDownloadImage(!downloadImage)} style={styles.button}>
            Download
          </button>

        </div>


      </div>
  );
};

export default ControlPanel;


{/* 

// react-input-number
import InputNumber from "rc-input-number";

    input: {
      fontSize: 20,
      outline: "none",
      border: "1px solid blue",
      color: strokeStyle,
      textAlign: "center",
      background: "transparent",
      borderRadius: 4,
    },


<div style={styles.inputsContainer}>
<div style={styles.inputContainer}>
  <p>Branches</p>
  <InputNumber
    style={styles.input}
    step={1}
    value={branches}
    onChange={setBranches}
    enableMobileNumericKeyboard
  />
</div>
<div style={styles.inputContainer}>
  <p>Angle</p>
  <InputNumber
    style={styles.input}
    step={1}
    value={angle}
    onChange={setAngle}
    enableMobileNumericKeyboard
  />
</div>
<div style={styles.inputContainer}>
  <p>Levels</p>
  <InputNumber
    style={styles.input}
    step={1}
    value={levels}
    min={1}
    max={5}
    onChange={setLevels}
    enableMobileNumericKeyboard
  />
</div>
</div> */}
"use client";

import React, { useContext, useState, useEffect, useRef } from "react";

import Image from "next/image";
import Play from './Play'
import Pause from './Pause'

import ControlPanelStyles from "./ControlPanelStyles";

// react-color
import { HuePicker } from "react-color";

// contexts
import { ControlPanelContext } from "../contexts/ControlPanelContext";
// import { Hue } from "react-color/lib/components/common";

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
    hue,
    setHue,
    downloadImage,
    setDownloadImage,
    playAngle,
    setPlayAngle,
    playBranches,
    setPlayBranches,
    playHue,
    setPlayHue,
    playLevels,
    setPlayLevels
  } = useContext(ControlPanelContext);

  // update stroke style on color change
  const handleColorChange = (color, event) => {
    setHue(color.hsl);
    console.log(color.hsl)
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

  const styles = ControlPanelStyles

  return (

    <div style={styles.controller}>

      <div style={styles.inputs}>

        <div style={styles.title}>
          <p >Angle</p>
          <button
            style={styles.playButton}
            onClick={() => setPlayAngle(!playAngle)}>
            {playAngle ? <Pause /> : <Play />}
          </button>
        </div>
        <input
          style={styles.input}
          type="range"
          min="0"
          max="100"
          step={1}
          onChange={handleAngleChange}
          value={angle}
        />

        <div style={styles.title}>
          <p >Branches</p>
          <button
            style={styles.playButton}
            onClick={() => setPlayBranches(!playBranches)}>
            {playBranches ? <Pause /> : <Play />}
          </button>
        </div>
        <input
          style={styles.input}
          type="range"
          min="0"
          max="100"
          step={1}
          onChange={handleBranchesChange}
          value={branches}
        />

        <div style={styles.title}>
          <p>Levels</p>
          <button
            style={styles.playButton}
            onClick={() => setPlayLevels(!playLevels)}>
            {playLevels ? <Pause /> : <Play />}
          </button>
        </div>
        <input
          style={styles.input}
          type="range"
          min="0"
          max="4"
          step={1}
          onChange={handleLevelsChange}
          value={levels}
        />


        <div style={styles.title}>
          <p>Hue</p>
          <button
            style={styles.playHue}
            onClick={() => setPlayHue(!playHue)}>
            {playHue ? <Pause /> : <Play />}
          </button>
        </div>
        <HuePicker
          color={hue}
          onChange={handleColorChange}
          width='100%'
          style={styles.input}
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
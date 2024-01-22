'use client'

import React, { createContext, useState, useRef, useEffect } from 'react';

import { useInterval } from '../utilities/useInterval';

// create context
export const ControlPanelContext = createContext();

const ControlPanelContextProvider = props => {
    const [genTrigger, setGenTrigger] = useState(0);

    const [branches, setBranches] = useState(50);
    const [increasingBranches, setIncreasingBranches] = useState(false);
    const [playBranches, setPlayBranches] = useState(false);

    const [angle, setAngle] = useState(50);
    const [increasingAngle, setIncreasingAngle] = useState(true);
    const [playAngle, setPlayAngle] = useState(false);

    const [hue, setHue] = useState({ h: 250, s: 1, l: .5, a: 1 });
    const [increasingHue, setIncreasingHue] = useState(true);
    const [playHue, setPlayHue] = useState(false);

    const [levels, setLevels] = useState(2);
    const [increasingLevels, setIncreasingLevels] = useState(true);
    const [playLevels, setPlayLevels] = useState(false);

    const [downloadImage, setDownloadImage] = useState(false);

    // const [levelDirection, setLevelDirection] = useState(true);
    // const [branchesDirection, setBranchesDirection] = useState(true);
    // const [hueDirection, setHueDirection] = useState(true);

    // init ref
    const prevGenTriggerRef = useRef();

    useInterval(() => {
        console.log('shat')
        if(playAngle) {
            if (angle == 100 && increasingAngle) {
                setIncreasingAngle(false)
            }
            if (angle == 0 && !increasingAngle) {
                setIncreasingAngle(true)
            }
            if (increasingAngle) {
                setAngle(angle + 1)
            } else {
                setAngle(angle - 1)
            }
        }
        

    }, playAngle ? 100 : null)

    useInterval(() => {
        console.log('shat')
        if(playBranches) {
            if (branches == 100 && increasingBranches) {
                setIncreasingBranches(false)
            }
            if (branches == 0 && !increasingBranches) {
                setIncreasingBranches(true)
            }
            if (increasingBranches) {
                setBranches(branches + 1)
            } else {
                setBranches(branches - 1)
            }
        }
        

    }, playBranches ? 100 : null)

    useInterval(() => {
        console.log('shat')
        if(playHue) {
            if (hue.h == 360 && increasingHue) {
                setIncreasingHue(false)
            }
            if (hue.h == 0 && !increasingHue) {
                setIncreasingHue(true)
            }
            if (increasingHue) {
                let newHue = hue.h + 1
                setHue({ h: newHue, s: 1, l: .5, a: 1 })
            } else {
                let newHue = hue.h - 1
                setHue({ h: newHue, s: 1, l: .5, a: 1 })
            }
            console.log(hue)
        }
        

    }, playHue ? 20 : null)


    useInterval(() => {
        console.log('shat')
        if(playLevels) {
            if (levels == 4 && increasingLevels) {
                setIncreasingLevels(false)
            }
            if (levels == 0 && !increasingLevels) {
                setIncreasingLevels(true)
            }
            if (increasingLevels) {
                setLevels(levels + 1)
            } else {
                setLevels(levels - 1)
            }
            console.log(levels)
        }
        

    }, playLevels ? 300 : null)


    // constantly fetch the previous value of genTrigger, to know when the generate button is pushed
    useEffect(() => {
        prevGenTriggerRef.current = genTrigger;
    });

    // store value in const
    const prevGenTrigger = prevGenTriggerRef.current;

    // if generate button is pushed, generate random values for inputs
    useEffect(() => {
        if (prevGenTrigger < genTrigger) {
            setAngle(Math.floor(Math.random() * 101))
            setBranches(Math.floor((Math.random() * 10) + 3))
            setLevels(Math.floor((Math.random() * 6)))
        }
    }, [genTrigger])

    return (
        <ControlPanelContext.Provider
            value={{
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
            }}>
            {props.children}
        </ControlPanelContext.Provider>
    );
};

export default ControlPanelContextProvider;
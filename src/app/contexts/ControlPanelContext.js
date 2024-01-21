'use client'

import React, { createContext, useState, useRef, useEffect } from 'react';

// create context
export const ControlPanelContext = createContext();

const ControlPanelContextProvider = props => {
    const [genTrigger, setGenTrigger] = useState(0);
    const [branches, setBranches] = useState(9);
    const [angle, setAngle] = useState(85);
    const [levels, setLevels] = useState(3);
    const [strokeStyle, setStrokeStyle] = useState('#FF0000');
    const [downloadImage, setDownloadImage] = useState(false);

    // init ref
    const prevGenTriggerRef = useRef();

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
            setStrokeStyle("#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);}))
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
                strokeStyle,
                setStrokeStyle,
                downloadImage,
                setDownloadImage
            }}>
            {props.children}
        </ControlPanelContext.Provider>
    );
};

export default ControlPanelContextProvider;
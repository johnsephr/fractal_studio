'use client'

import React, { Fragment, useRef, useContext, useEffect } from 'react'

// contexts
import { ControlPanelContext } from '../contexts/ControlPanelContext';

const CanvasContainer = props => {
    const { genTrigger, branches, angle, levels, strokeStyle, downloadImage, setDownloadImage } = useContext(ControlPanelContext);
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && branches && angle) {
            // init canvas as ctx
            const ctx = canvas.getContext('2d')

            // levels of branches the function descends
            const maxLevel = levels;

            // the amount of branches that come off of the previous branch
            const branchesCount = 2;

            // save canvas position before translation begins
            ctx.save();

            // move canvas to corner of screen to clear previous drawing
            ctx.setTransform(1, 0, 0, 1, 0, 0);

            // clear previous drawing
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // push the canvas (back) to the middle of the screen
            ctx.translate(canvas.width / 2, (canvas.height / 2) - 5);

            // actual angle value used in function below
            const decimalAngle = angle / 100;

            // (recursive) function to draw fractal
            function drawLine(level) {
                if (level > maxLevel) return;

                ctx.strokeStyle = strokeStyle;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(250, 0);
                ctx.stroke();

                for (let i = 1; i < branchesCount + 1; i++) {
                    ctx.save();
                    ctx.translate(250 * i / (branchesCount + 1), 0);
                    ctx.scale(0.5, 0.5);
                    ctx.save();

                    ctx.rotate(decimalAngle);
                    drawLine(level + 1);
                    ctx.restore();
                    ctx.save();

                    ctx.rotate(-decimalAngle);
                    drawLine(level + 1);
                    ctx.restore();

                    ctx.restore();
                }
            }
            for (let i = 0; i < branches; i++) {
                drawLine(0);
                ctx.rotate(Math.PI * 2 / branches);
            }
        }
    }, [genTrigger, branches, angle, levels, strokeStyle])

    useEffect(() => {
        const canvas = canvasRef.current;
        if (downloadImage === true) {
            console.log('shit')

            var link = document.createElement('a');
            link.download = 'fractal.png';
            link.href = document.getElementById('canvas').toDataURL()
            link.click();

            setDownloadImage(false)
        }
    }, [downloadImage])

    return (
        <Fragment>
            <canvas
                id="canvas"
                ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight - 190}
                style={{
                    position: 'relative',
                    top: 0,
                    left: 0,
                    background: '#120a27'
                }}
            />
        </Fragment>
    )
}

export default CanvasContainer

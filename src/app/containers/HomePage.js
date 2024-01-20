'use client'

import React from 'react'

// Components
import CanvasContainer from './CanvasContainer'
import ControlPanelContainer from './ControlPanelContainer'

// Contexts
import ControlPanelContextProvider from '../contexts/ControlPanelContext'

const HomePage = props => {
    return (
        <div>
            <ControlPanelContextProvider>
                <CanvasContainer />
                <ControlPanelContainer />
            </ControlPanelContextProvider>
        </div>
    )
}

export default HomePage
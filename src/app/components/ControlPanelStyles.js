import * as React from "react"
const ControlPanelStyles = {

    // Controller Container
    controller: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: 'wrap',
        backgroundColor: 'black'
      },

      // Inputs
      inputs: {
        flex: 1,
        width: '100%',
        margin: '5rem',
      },
  
      title: {
        width: '100%',
        flex: 1,
        margin: '16px 0 10px 0',
        display: 'flex',
        justifyContent: 'space-between'
        
      },
  
      //input 
      input: {
        WebkitAppearance: 'none',
        width: '100%',
        background: '#120a27',
        borderRadius: 2,
        
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
}
export default ControlPanelStyles
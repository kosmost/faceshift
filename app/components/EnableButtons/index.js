import React from "react";
import FlatButton from 'material-ui/FlatButton';
import ws from "ws";

import MicOnIcon from "material-ui/svg-icons/av/mic";
import MicOffIcon from "material-ui/svg-icons/av/mic-off";
import WebcamOnIcon from "material-ui/svg-icons/av/videocam";
import WebcamOffIcon from "material-ui/svg-icons/av/videocam-off"
import RadioButtons from "../RadioButtons";

import { Modes } from "../../utils/constants/constants";
import "./styles.css";

import webcam from "../../modules/webcam/webcam";

class EnableButtons extends React.Component{

  state = {
    isMicOn: true,
    isWebcamOn: true,
  };

  onCameraButtonClicked = () => {
    this.setState({ isWebcamOn: !this.state.isWebcamOn});
  };


  onMicrophoneButtonClicked = () => {
    this.setState({ isMicOn: !this.state.isMicOn});
  };

  renderMicrophoneButton = () => (
    <FlatButton
      icon={this.state.isMicOn ? <MicOnIcon/> : <MicOffIcon/>}
      onClick={this.onMicrophoneButtonClicked}
    />
  );

  renderCameraButton = () => (
    <FlatButton
      icon={this.state.isWebcamOn ? <WebcamOnIcon/> : <WebcamOffIcon/>}
      onClick={this.onCameraButtonClicked}
    />
  );

  renderMouseModeButton = () => (
    <RadioButtons options={Modes} name="Mouse Modes"/>
  );

  render(){
    return(
      <div className="container">
        <div className="toggleButton">
          <div>
            {this.renderMicrophoneButton()}
          </div>
          <div>
            {this.renderCameraButton()}
          </div>
        </div>
        <div>
          <div style={{ width: 200}}>
            {this.renderMouseModeButton()}
          </div>
        </div>
      </div>
    )
  }
}

export default EnableButtons;

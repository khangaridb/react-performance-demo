import React from 'react';
import { WasmBoy } from 'wasmboy';
import { Col, Row } from 'antd';

class Webassembly extends React.Component {
  componentDidMount() {
    // Get our HTML5 Canvas element
    const canvasElement = document.querySelector('canvas');

    const WasmBoyOptions = {
      headless: false,
      useGbcWhenOptional: true,
      isAudioEnabled: true,
      frameSkip: 1,
      audioBatchProcessing: true,
      timersBatchProcessing: false,
      audioAccumulateSamples: true,
      graphicsBatchProcessing: false,
      graphicsDisableScanlineRendering: false,
      tileRendering: true,
      tileCaching: true,
      gameboyFPSCap: 60,
      updateGraphicsCallback: false,
      updateAudioCallback: false,
      saveStateCallback: false,
    };

    WasmBoy.enableDefaultJoypad();

    WasmBoy.config(WasmBoyOptions, canvasElement)
      .then(() => {
        console.log('WasmBoy is configured!');
        // You may now load games, or use other exported functions of the lib.
      })
      .catch(() => {
        console.error('Error Configuring WasmBoy...');
      });
  }

  loadROM = (event) => {
    WasmBoy.loadROM(event.target.files[0])
      .then(() => {
        console.log('WasmBoy ROM loaded!');
      })
      .catch(() => {
        console.error('Error loading the ROM');
      });
  };

  play = () => {
    WasmBoy.play()
      .then(() => {
        console.log('WasmBoy is playing!');
      })
      .catch(() => {
        console.error('WasmBoy had an error playing...');
      });
  };

  render() {
    return (
      <div style={{ padding: '200px' }}>
        <Row align="middle">
          <Col span={12} offset={6}>
            <input type="file" id="input" onChange={this.loadROM} />
            <input type="button" onClick={this.play} value="Play" />
          </Col>
        </Row>
        <Row align="middle">
          <Col span={12} offset={6} style={{ width: '400px', height: '400px' }}>
            <canvas style={{ objectFit: 'contain', width: '100%', height: '100%' }} width="400" height="400" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Webassembly;

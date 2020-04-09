import React from 'react';
import { Button } from 'antd';
import propTypes from 'prop-types';
import utils from './utils';
// eslint-disable-next-line
const worker = require('workerize-loader!./workers/worker');
// Create an instance of your worker

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.paint = this.paint.bind(this);
  }

  componentDidUpdate() {
    this.paint();
  }

  paint() {
    const { width, height, rotation } = this.props;
    const context = this.canvas.getContext('2d');
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(100, 100);
    context.rotate(rotation, 100, 100);
    context.fillStyle = '#F00';
    context.fillRect(-50, -50, 100, 100);
    context.restore();
  }

  render() {
    const { width, height } = this.props;

    return (
      <canvas
        ref={(c) => {
          this.canvas = c;
        }}
        width={width}
        height={height}
      />
    );
  }
}

Square.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  rotation: propTypes.number.isRequired,
};

class Webworkers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rotation: 0 };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(this.tick);
  }

  //   loadWebWorker = (worker) => {
  //     const code = worker.toString();
  //     const blob = new Blob([`(${code})()`]);
  //     return new Worker(URL.createObjectURL(blob));
  //   };

  onWorkerClick = () => {
    const workerInstance = worker();

    // const worker = this.loadWebWorker('./workers/worker');

    workerInstance.logSomething(10000);
  };

  tick() {
    const { rotation } = this.state;
    this.setState({ rotation: rotation + 0.04 });
    requestAnimationFrame(this.tick);
  }

  render() {
    const { rotation } = this.state;

    return (
      <center>
        <div style={{ padding: '200px' }}>
          <Square rotation={rotation} width={300} height={200} />
        </div>

        <div>
          <Button style={{ margin: '20px' }} onClick={() => utils.logSomething(1000)}>
            Calculate primes in component
          </Button>
          <Button style={{ margin: '20px' }} onClick={this.onWorkerClick}>
            Calculate primes with worker
          </Button>
        </div>
      </center>
    );
  }
}

export default Webworkers;

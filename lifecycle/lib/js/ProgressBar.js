class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = undefined;
    this.getCanvasRef = node => this.canvasRef = node;
    this.progressLines = [
      {
        name: 'total',
        radius: '45',
        color: '#4ca89a'
      },
      {
        name: 'progress',
        radius: '38',
        color: '#96d6f4'
      }
    ];
  }

  drawProgress = () => {
    const {total, completed} = this.props;
    const canvas = this.canvasRef;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const [totalLine, progressLine] = this.progressLines;
    const percent = completed / total * 100;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawCircle(ctx, centerX, centerY, totalLine, 0, 2 * Math.PI);
    this.drawCircle(ctx, centerX, centerY, progressLine, 0, percent / 100 * 2 * Math.PI);
  };

  drawCircle = (context, xPos, yPos, circleObject, startAngle, endAngle, anticlockwise = false) => {
    context.beginPath();
    context.strokeStyle = circleObject.color;
    context.lineCap = "round";
    context.lineWidth = '7';
    context.arc(xPos, yPos, circleObject.radius, startAngle, endAngle, anticlockwise);
    context.stroke();
  };

  render() {
    const {total, completed} = this.props;
    const percent = completed / total * 100;

    return (
      <div className="progress-container">
        <canvas ref={this.getCanvasRef} width="100px" height="100px" id="progressCanvas" className="progress"/>
        <div className="progress-percent">{`${Math.floor(percent)}%`}</div>
      </div>
    );
  }

  componentDidMount() {
    this.drawProgress();
  }

  componentDidUpdate() {
    this.drawProgress();
  }
}
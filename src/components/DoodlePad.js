import React, { useRef, useState, useEffect } from 'react';

function DoodlePad() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState('#f28b82'); // pastel red
  const [size, setSize] = useState(5);

  const startDraw = (e) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const endDraw = () => {
    setDrawing(false);
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div className="doodle-box">
      <h2>Doodle Pad</h2>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={endDraw}
        onMouseLeave={endDraw}
      />
      <div className="tools">
      <div className="tools">
  <button style={{ background: "#f28b82" }} onClick={() => setColor("#f28b82")}></button>
  <button style={{ background: "#aecbfa" }} onClick={() => setColor("#aecbfa")}></button>
  <button style={{ background: "#ccff90" }} onClick={() => setColor("#ccff90")}></button>
</div>

        <input
          type="range"
          min="1"
          max="20"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>
      <button onClick={clearCanvas}>Save Doodle</button>
    </div>
  );
}

export default DoodlePad;




import React, { useRef, useState, useEffect } from 'react';

const DrawingBoard = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#00bcd4');
  const [brushSize, setBrushSize] = useState(4);
  const [tool, setTool] = useState('brush');
  const [brushType, setBrushType] = useState('normal');
  const [theme, setTheme] = useState('dark');
  const [autoSave, setAutoSave] = useState(false);
  const [startPos, setStartPos] = useState(null);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 400 });

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;
  }, [canvasSize]);

  const getCtx = () => canvasRef.current.getContext('2d');

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setStartPos({ x: offsetX, y: offsetY });
    if (tool === 'brush') {
      const ctx = getCtx();
      applyBrushStyle(ctx);
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    }
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const ctx = getCtx();
    const { offsetX, offsetY } = e.nativeEvent;

    if (tool === 'brush') {
      if (brushType === 'spray') {
        for (let i = 0; i < 10; i++) {
          const randX = offsetX + Math.random() * 20 - 10;
          const randY = offsetY + Math.random() * 20 - 10;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(randX, randY, 1, 0, 2 * Math.PI);
          ctx.fill();
        }
      } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    }
  };

  const stopDrawing = (e) => {
    if (!isDrawing) return;
    const ctx = getCtx();
    const { offsetX, offsetY } = e.nativeEvent;

    if (tool !== 'brush' && startPos) {
      const { x, y } = startPos;
      const w = offsetX - x;
      const h = offsetY - y;

      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize;
      ctx.beginPath();

      if (tool === 'rectangle') {
        ctx.rect(x, y, w, h);
      } else if (tool === 'circle') {
        const radius = Math.sqrt(w * w + h * h);
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
      } else if (tool === 'triangle') {
        ctx.moveTo(x, y);
        ctx.lineTo(offsetX, offsetY);
        ctx.lineTo(x * 2 - offsetX, offsetY);
        ctx.closePath();
      }
      ctx.stroke();
    }

    setIsDrawing(false);
  };

  const applyBrushStyle = (ctx) => {
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = brushSize;
    ctx.strokeStyle = color;
    ctx.shadowBlur = brushType === 'neon' ? 12 : 0;
    ctx.shadowColor = color;
  };

  const clearCanvas = () => {
    const ctx = getCtx();
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'my-art.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const resetSettings = () => {
    setColor('#00bcd4');
    setBrushSize(4);
    setTool('brush');
    setBrushType('normal');
    setTheme('dark');
    setCanvasSize({ width: 800, height: 400 });
    clearCanvas();
  };

  const themeStyles = {
    dark: {
      background: '#121212',
      color: '#e0f7fa',
      border: '2px solid #00bcd4',
    },
    light: {
      background: '#ffffff',
      color: '#333',
      border: '2px solid #2196f3',
    },
  };

  return (
    <div style={{ display: 'flex', height: '100%', fontFamily: 'sans-serif' }}>
      {/* Settings Sidebar */}
      <div style={{
        width: '260px',
        padding: '20px',
        backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f5f5f5',
        color: themeStyles[theme].color,
        borderRight: themeStyles[theme].border
      }}>
        <h2>⚙️ Settings</h2>
        <div>
          <label>🎨 Color: </label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>🖌 Size: </label>
          <input type="range" min="1" max="20" value={brushSize} onChange={(e) => setBrushSize(+e.target.value)} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>🧰 Tool:</label>
          <select value={tool} onChange={(e) => setTool(e.target.value)}>
            <option value="brush">Brush</option>
            <option value="rectangle">Rectangle</option>
            <option value="circle">Circle</option>
            <option value="triangle">Triangle</option>
          </select>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>💫 Brush Type:</label>
          <select value={brushType} onChange={(e) => setBrushType(e.target.value)}>
            <option value="normal">Normal</option>
            <option value="spray">Spray</option>
            <option value="neon">Neon</option>
          </select>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>📐 Canvas Size:</label>
          <select onChange={(e) => {
            const [w, h] = e.target.value.split('x');
            setCanvasSize({ width: +w, height: +h });
          }}>
            <option value="800x400">800 x 400</option>
            <option value="600x600">600 x 600</option>
            <option value="1000x500">1000 x 500</option>
          </select>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>🌗 Theme:</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>💾 Auto Save: </label>
          <input type="checkbox" checked={autoSave} onChange={() => setAutoSave(!autoSave)} />
        </div>

        <div style={{ marginTop: '20px' }}>
          <button onClick={clearCanvas}>🧼 Clear</button>
          <button onClick={downloadImage} style={{ marginLeft: '10px' }}>📥 Save</button>
        </div>
        <div style={{ marginTop: '10px' }}>
          <button onClick={resetSettings}>🔁 Reset All</button>
        </div>
      </div>

      {/* Drawing Canvas */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: themeStyles[theme].background }}>
        <canvas
          ref={canvasRef}
          style={{
            background: theme === 'dark' ? '#252525' : '#fff',
            borderRadius: '10px',
            cursor: 'crosshair',
            border: themeStyles[theme].border
          }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>
    </div>
  );
};

export default DrawingBoard;

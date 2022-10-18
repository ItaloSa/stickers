import { fabric } from "fabric";
import { useEffect, useRef } from "react";

const Board = () => {
  const canvas = useRef<null | fabric.Canvas>(null);

  useEffect(() => {
    canvas.current = initCanvas();
    return () => {
      canvas.current?.dispose();
      canvas.current = null;
    };
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 300,
      width: 1000,
      backgroundColor: "#ccc",
      selection: false,
      renderOnAddRemove: true,
    });

  const add = () => {
    fabric.Image.fromURL("https://via.placeholder.com/150", (image) => {
      canvas.current?.add(image);
    });
  };

  return (
    <div>
      <button onClick={() => add()}>click</button>
      <canvas id="canvas" />
    </div>
  );
};

export default Board;

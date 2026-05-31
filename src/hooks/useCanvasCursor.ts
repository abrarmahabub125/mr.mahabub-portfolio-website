import { useEffect } from "react";

type CursorPosition = {
  x: number;
  y: number;
};

type NodeType = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const useCanvasCursor = (): void => {
  useEffect(() => {
    const canvas = document.getElementById(
      "canvas",
    ) as HTMLCanvasElement | null;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrameId = 0;

    const pos: CursorPosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const config = {
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98,
    };

    let hue = 0;

    class Oscillator {
      phase = 0;
      offset = 285;
      frequency = 0.0015;
      amplitude = 85;

      constructor() {
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.phase += this.frequency;

        return this.offset + Math.sin(this.phase) * this.amplitude;
      }
    }

    class Node implements NodeType {
      x = pos.x;
      y = pos.y;
      vx = 0;
      vy = 0;
    }

    class Line {
      spring: number;
      friction: number;
      nodes: Node[];

      constructor(index: number) {
        this.spring = 0.4 + (index / config.trails) * 0.025;

        this.friction = config.friction + Math.random() * 0.01 - 0.002;

        this.nodes = Array.from({ length: config.size }, () => new Node());
      }

      update() {
        let spring = this.spring;

        const firstNode = this.nodes[0];

        firstNode.vx += (pos.x - firstNode.x) * spring;

        firstNode.vy += (pos.y - firstNode.y) * spring;

        for (let i = 0; i < this.nodes.length; i++) {
          const node = this.nodes[i];

          if (i > 0) {
            const prev = this.nodes[i - 1];

            node.vx += (prev.x - node.x) * spring;

            node.vy += (prev.y - node.y) * spring;

            node.vx += prev.vx * config.dampening;

            node.vy += prev.vy * config.dampening;
          }

          node.vx *= this.friction;
          node.vy *= this.friction;

          node.x += node.vx;
          node.y += node.vy;

          spring *= config.tension;
        }
      }

      draw() {
        ctx!.beginPath();

        ctx!.moveTo(this.nodes[0].x, this.nodes[0].y);

        for (let i = 1; i < this.nodes.length - 2; i++) {
          const current = this.nodes[i];
          const next = this.nodes[i + 1];

          const x = (current.x + next.x) * 0.5;

          const y = (current.y + next.y) * 0.5;

          ctx!.quadraticCurveTo(current.x, current.y, x, y);
        }

        const penultimate = this.nodes[this.nodes.length - 2];

        const last = this.nodes[this.nodes.length - 1];

        ctx!.quadraticCurveTo(penultimate.x, penultimate.y, last.x, last.y);

        ctx!.stroke();
        ctx!.closePath();
      }
    }

    const oscillator = new Oscillator();

    const lines = Array.from({ length: config.trails }, (_, i) => new Line(i));

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (event: MouseEvent) => {
      pos.x = event.clientX;
      pos.y = event.clientY;
    };

    const render = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      ctx!.globalCompositeOperation = "lighter";

      hue = oscillator.update();

      ctx!.strokeStyle = `hsla(${Math.round(hue)}, 90%, 60%, 0.2)`;

      ctx!.lineWidth = 1;

      lines.forEach((line) => {
        line.update();
        line.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    resizeCanvas();

    render();

    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
};

export default useCanvasCursor;

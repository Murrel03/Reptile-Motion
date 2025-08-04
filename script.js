const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let W = canvas.width = innerWidth;
let H = canvas.height = innerHeight;

const segmentCount = 50;
const segments = Array.from({ length: segmentCount }, () => ({
  x: W / 2, y: H / 2, vx: 0, vy: 0
}));
let mouse = { x: W / 2, y: H / 2 };

window.addEventListener('resize', () => {
  W = canvas.width = innerWidth;
  H = canvas.height = innerHeight;
});
window.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

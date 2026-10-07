const r = require("raylib");

function running() { return !r.WindowShouldClose(); }

function getRandomColorComponent() {
  return Math.random() * 255;
}

function getRandomColor(randomAlpha) {
  return {
    r: getRandomColorComponent(),
    g: getRandomColorComponent(),
    b: getRandomColorComponent(),
    a: randomAlpha ? getRandomColorComponent() : 255,
  };
}

function init() {
  const world = {};

  world.backgroundColor = r.BLACK;

  world.cellWidth = 0;
  world.cellHeight = 0;

  world.cellMaxWidth = r.GetScreenWidth() / 10;
  world.cellMaxHeight = r.GetScreenHeight() / 10;

  world.color = getRandomColor();

  return world;
}

function setup(width, height, title) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(width, height, title);
  r.SetTargetFPS(3);

  const world = init();

  return world;
}

function getRandomNumber(max) {
  return Math.random() * max;
}

function update(world) {
  world.cellWidth = getRandomNumber(world.cellMaxWidth);
  world.cellHeight = getRandomNumber(world.cellMaxHeight);

  world.x = getRandomNumber(r.GetScreenWidth() - world.cellWidth);
  world.y = getRandomNumber(r.GetScreenHeight() - world.cellHeight);

  world.color = getRandomColor(false);

  return world;
}

function draw(world) {
  r.BeginDrawing();

  r.ClearBackground(world.backgroundColor);

  r.DrawRectangle(world.x, world.y, world.cellWidth, world.cellHeight, world.color);

  r.EndDrawing();

  return world;
}

function teardown() { r.CloseWindow(); }

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
}

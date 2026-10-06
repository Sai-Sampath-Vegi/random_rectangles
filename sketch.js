const r = require("raylib");

function running() { return !r.WindowShouldClose(); }

function init() {
  const world = {};

  world.backgroundColor = r.BLACK;

  world.cellWidth = 0;
  world.cellHeight = 0;

  world.cellMaxWidth = r.GetScreenWidth() / 10;
  world.cellMaxHeight = r.GetScreenHeight() / 10;

  world.color = r.BLANK;

  return world;
}

function setup(width, height, title) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(width, height, title);
  r.SetTargetFPS(3);

  const world = init();

  return world;
}

function getColorComponent() {
  return Math.random() * 255;
}

function update(world) {
  world.cellWidth = Math.random() * world.cellMaxWidth;
  world.cellHeight = Math.random() * world.cellMaxHeight;

  world.x = Math.random() * (r.GetScreenWidth() - world.cellWidth);
  world.y = Math.random() * (r.GetScreenHeight() - world.cellHeight);

  world.color = {
    r: getColorComponent(),
    g: getColorComponent(),
    b: getColorComponent(),
    a: 255,
  }
}

function draw(world) {
  r.BeginDrawing();

  r.ClearBackground(world.backgroundColor);

  r.DrawRectangle(world.x, world.y, world.cellWidth, world.cellHeight, world.color);

  r.EndDrawing();
}

function teardown() { r.CloseWindow(); }

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
}

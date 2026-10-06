const sketch = require("./sketch");

function loop(world) {
  while (sketch.running()) {
    sketch.update(world);
    sketch.draw(world);
  }
}

function main() {
  const WIDTH = 800;
  const HEIGHT = 800;
  const TITLE = "Random Cells";

  const world = sketch.setup(WIDTH, HEIGHT, TITLE);

  loop(world);

  sketch.teardown();
}

main();

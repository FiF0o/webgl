/**
 * Created by jonlazarini on 26/06/17.
 */
const numPoints = 100000;

// the size of the points we draw on screen
const pointWidth = 4;

// dimensions of the viewport we are drawing in
const width = window.innerWidth;
const height = window.innerHeight;

// random number generator from d3-random
const rng = d3.randomNormal(0, 0.15);

// create initial set of points
const points = d3.range(numPoints).map(i => ({
    x: (rng() * width) + (width / 2),
    y: (rng() * height) + (height / 2),
    color: [0, Math.random(), 0],
}));

// init library
var regl = createREGL();

// start the regl draw loop
regl.frame(() => {
    // clear the buffer
    regl.clear({
        // background color (black)
        color: [0, 0, 0, 1],
        depth: 1,
    });
});

# This project is deprecated!
If you're searching for something like this, take a look at [_threeshake_](https://github.com/vatro/threeshake) which was made to generate _svelthree-three_. _svelthree-three_ is an abandoned concept and will not be needed for _svelthree_!

# svelthree-three

This is a modified version of three.js for usage with svelthree. It's basically the original version where some modules have been moved from `examples/jsm` folder to `src` folder in order to make them treeshakable. Every time three.js updates to a new major version, a new svelthree-three version will also be created in a new branch. "Old" branches will not change, just bug fixed if needed.

It contains:
- `examples/jsm` folder: original three.js modules which have been moved to src and modified
- `src` folder: three.js source including modified modules from `examples/jsm`

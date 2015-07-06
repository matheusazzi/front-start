'use strict';

var requireDir = require('require-dir');

// Require all tasks in /tasks folder, including subfolders
requireDir('./tasks', { recurse: true });

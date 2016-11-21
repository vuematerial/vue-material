import webpack from 'webpack';
import build from './build';
import webpackConfig from '../webpack/prod-lib';
import webpackDebugConfig from '../webpack/debug-lib';

webpack([webpackConfig, webpackDebugConfig], build);

import ora from 'ora';

const spinner = ora({
  text: 'Building...',
  spinner: 'circleQuarters',
  color: 'green'
});

spinner.start();

export default function done(error, stats) {
  if (error) {
    throw error;
  }

  process.stdout.write('\n\n' + stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n');

  spinner.stop();
}

const error = message => {
  process.stderr.write(message);
  process.stdout.write('\n');
  process.exit(1);
};

const terminalLog = message => {
  process.stdout.write(message);
  process.stdout.write('\n');
};

module.exports = {
  error,
  terminalLog,
};

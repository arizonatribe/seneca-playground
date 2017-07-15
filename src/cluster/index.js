const http = require('http');
const cluster = require('cluster');
const os = require('os');
const {logger} = require('utilitarian/logger');

const cpuCount = os.cpus().length;

cluster.on('online', (worker) => {
  logger.info(`Child worker #${worker.id} has been born!`);
});

if (cluster.isMaster) {
  Array(cpuCount).fill().forEach(() => cluster.fork());
  cluster.on('exit', (worker, code, signal) => {
    logger.info(`Worker ${worker.process.pid} has finished.`);
  });
} else {
  http.createServer((request, response) => {
      response.writeHead(200, {
        'Content-Type': 'textplain'
      });
      response.end(`Greetings from worker child #${cluster.worker.id} (I\'m the favorite child)!\n`);
    })
    .listen(8080);
}

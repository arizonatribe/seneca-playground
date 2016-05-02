import http from 'http';
import cluster from 'cluster';
import os from 'os';

const cpuCount = os.cpus().length;

cluster.on('online', (worker) => {
  console.log(`Child worker #${worker.id} has been born!`);
});

if (cluster.isMaster) {
  Array(cpuCount).fill().forEach(() => cluster.fork());
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} has finished.`);
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

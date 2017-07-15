const seneca = require('seneca')();
const SenecaEntity = require('seneca-entity');
const {EmployeeStorage} = require('./employee-storage.plugin');
const {actionLog} = require('../utils');

seneca.use(SenecaEntity)
  .use(EmployeeStorage)
  .act({
    role: 'employee',
    cmd: 'add',
    data: {
      name: 'David',
      surname: 'Nunez',
      position: 'Software Magician'
    }
  }, actionLog);


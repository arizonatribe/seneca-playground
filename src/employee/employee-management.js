import Seneca from 'seneca';
import SenecaEntity from 'seneca-entity';
import {EmployeeStorage} from './employee-storage.plugin';
import {actionLog} from '../utils';

const seneca = Seneca();

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
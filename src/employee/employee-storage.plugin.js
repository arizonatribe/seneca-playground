exports.EmployeeStorage = function(options) {
  this.add({
    role: 'employee',
    cmd: 'add'
  }, (msg, respond) => {
    this.make('employee').data$(msg.data).save$(respond);
    this.find({
      role: 'employee',
      cmd: 'get'
    }, (msg, respond) => {
      this.make('employee').load$(msg.id, respond);
    });
  });
}


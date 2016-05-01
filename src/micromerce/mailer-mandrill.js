import mandrill from 'mandrill-api/mandrill';

export var mandrillClient = new mandrill.Mandrill('<YOUR-KEY-HERE>');

mandrillClient.users.info({},
  result => console.log(result),
  error => console.error(error));
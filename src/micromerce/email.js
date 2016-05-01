export class Email {
  constructor(args, combineNameAndEmail) {
    this.subject = args.subject;
    
    if (combineNameAndEmail) {
      this.from = 'Micromerce <info@micromerce.com>';
      this.to = args.to;

      if (args.hasOwnProperty('cc')) {
        this.cc = args.cc;
      }
    } else {
      this.from_email = 'info@micromerce.com';
      this.from_name = 'Micromerce';
  
      this.to = [];
      if (args.hasOwnProperty('to')) {
        this.to.push({
          email: args.to,
          name: args.toName,
          type: 'to'
        });
      }
  
      if (args.hasOwnProperty('cc')) {
        this.to.push({
          email: args.cc,
          name: args.ccName,
          type: 'cc'
        });
      }
    }
    
    (new Map([
      ['html', 'content'],
      ['html', 'body'],
      ['global_merge_vars', '']
    ])).forEach((val, key) => {
      let prop = val ? val : key;
      if (args.hasOwnProperty(prop)) {
        this[key] = args[prop];
      }
    });
  }
}
'use strict';

let models = require('./models');

models.sequelize.sync({force: true})
  .then(()=>{
    return models.User.create({
      username: 'ohaimark',
      email: 'the@room.com',
      password: '$2a$07$KuSjo0XLNsArOAKM3Rjfm.AT8W0fzV1N0zDD9DLnpUF5fq3XQSjb2'
    });
  })
  .then(()=>process.exit());
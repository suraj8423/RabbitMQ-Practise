var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;

    }
    var queue = "hello";
    channel.assertQueue(queue, {
      durable: false,
    });

    channel.consume(queue, function(msg) {
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
      console.log(" [x] Received %s", msg.content.toString());
    }, {
        noAck: true
    });
  });

 
});


// channel.consume(queue, function(msg) {
//   console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
//   console.log(" [x] Received %s", msg.content.toString());
// }, {
//     noAck: true
// });

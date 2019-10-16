const Publisher = require('../helpers/publish-suscribe/publisher');
let channel = 'messages_channel';

exports.sendMessage = (userId, messageP) => {

    let publisher = new Publisher(channel);

    let message = {
        userId: userId,
        message: messageP
    };
    console.log(`Send message: ${JSON.stringify(message)}`);
    publisher.publish(message);
}
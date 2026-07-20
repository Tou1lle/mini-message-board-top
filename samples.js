const { format } = require("date-fns");

// Sample data
const messages = [
  {
    text: "Hi there!",
    user: "Amado",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
]

const getFormattedMessages = (messages) => {
  const formatted = messages.map(message => {
    return {
      ...message,
      added: format(message.added, "Pp"),
    }
  })

  return formatted;
}

const getFormattedMessage = (message) => {
  return {
    ...message,
    added: format(message.added, "Pp"),
  }
}

module.exports = {
  messages,
  getFormattedMessages,
  getFormattedMessage
}
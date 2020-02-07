const genericError = 'Oops, an error occured, please try again 😵'

module.exports = {
  userController: {
    sucess: 'You are looged in 😃',
    error: "Oops, there's something wrong with your credentials 😢",
    genericError,
  },
  urlController: {
    success: 'The short url has been successfully created! 👌',
    shortUrlDoesNotExist: 'This short url does not exist 🤔',
    shortUrlDestroyed: 'This short url has been successfully deleted 🤯',
    genericError,
  },
}

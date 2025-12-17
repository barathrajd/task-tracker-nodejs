export const logger = {
  log: (message: unknown) => console.log(message),
  error: (message: unknown) => console.error(message),
  info: (message: unknown) => console.info(message),
  debug: (message: unknown) => console.debug(message),
};

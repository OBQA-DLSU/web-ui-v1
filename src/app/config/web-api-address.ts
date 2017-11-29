export const WEB_API_URL = (): string => {
  switch (process.env.NODE_ENV) {
    case 'staging':
      return '';
    case 'prod':
      return '';
    default:
      return '127.0.0.1';
  }
}

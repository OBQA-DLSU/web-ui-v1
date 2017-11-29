const env: string = 'dev';
export const WEB_API_URL = (): string => {
  switch (env) {
    case 'staging':
      return '';
    case 'prod':
      return '';
    default:
      return '127.0.0.1';
  }
}

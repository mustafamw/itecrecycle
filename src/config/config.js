const configs = {
  default: {
    app: {
      api: 'http://localhost:3001'
    }
  },
  localhost: {
    app: {
      api: 'http://localhost:3001'
    }
  },
  production: {
    app: {
      api: 'http://localhost:3001'
    }
  }
}

export const config = configs[process.env.REACT_APP_ENVIRONMENT] ? configs[process.env.REACT_APP_ENVIRONMENT] : configs.default;

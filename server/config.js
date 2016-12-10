
export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || 'localhost';

export const databaseName = process.env.DATABASE_NAME || 'pear_dev'
export const databaseUrl = process.env.DATABASE_URL || `mongodb://localhost/${databaseName}`;


export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

};

const hostUrl = process.env.HOST_URL || 'http://localhost:3000/'
const production = (process.env.NODE_ENV === 'production')

export const auth = {

  jwt: {
    secret: process.env.JWT_SECRET || 'zANzh4EEykHC7Z'
  },

  github: {
    id: (production) ? "e8de8701458d17f2d2ea": "1f620d80f2b1ae6a3681",
    secret: (production) ? "555e6cb27d926542e11d6324cbd7ce891c66b812": "a31543ff95e007bc980812afc1ccf6979f52ce3d",
    callback: `${hostUrl}login/github/callback`
  }

};

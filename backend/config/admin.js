module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f049e2fcb01737da4beb8b2b81dead9b'),
  },
});

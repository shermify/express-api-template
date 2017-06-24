export default(router) => {
  router.get('/route1', (req, res) => {
    res.json({ message: 'Hello from route 1' });
  });
};

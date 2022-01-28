async function index(request, response) {
  return response.render('index', {
    title: 'Home',
  });
}

module.exports = { index };

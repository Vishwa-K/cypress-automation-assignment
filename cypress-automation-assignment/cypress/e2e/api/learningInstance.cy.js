
describe('Learning Instance API Automation', () => {
  let token = '';
  let instanceId = '';

  it('Should login and get auth token', () => {
    cy.request({
      method: 'POST',
      url: '/api/login',
      body: { username: 'your-username', password: 'your-password' }
    }).then((response) => {
      expect(response.status).to.eq(200);
      token = response.body.token;
    });
  });

  it('Should create a learning instance', () => {
    cy.request({
      method: 'POST',
      url: '/api/learning-instance',
      headers: { Authorization: `Bearer ${token}` },
      body: { name: 'Instance 1', type: 'ai' }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.name).to.eq('Instance 1');
      instanceId = response.body.id;
    });
  });

  it('Should validate the created instance', () => {
    cy.request({
      method: 'GET',
      url: `/api/learning-instance/${instanceId}`,
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Instance 1');
      expect(response.body.status).to.exist;
    });
  });
});

const Engineer = require('../engineer');

describe('Manager', () => {
  describe('getRole', () => {
    it('should return the role of the engineer', () => {
      const engineer = new Engineer();
      const result = engineer.getRole();
      expect(result).toEqual("Engineer");
    });
  });
  describe('getID', () => {
    it('should return the gitHub of the engineer', () => {
      const engineer = new Engineer("id", "name", "email", "githubName");
      const result = engineer.getGithubName();
      expect(result).toEqual("githubName");
    });
  });
});
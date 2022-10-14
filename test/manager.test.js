const Manager = require('../manager');

describe('Manager', () => {
  describe('getRole', () => {
    it('should return the role of the manager', () => {
      const manager = new Manager();
      const result = manager.getRole();
      expect(result).toEqual("Manager");
    });
  });
  describe('getID', () => {
    it('should return the office number of the manager', () => {
      const manager = new Manager("id", "name", "email", 29);
      const result = manager.getOffNumber();
      expect(result).toEqual(29);
    });
  });
});
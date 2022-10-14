const Intern = require('../intern');

describe('Intern', () => {
  describe('getRole', () => {
    it('should return the role of the intern', () => {
      const intern = new Intern();
      const result = intern.getRole();
      expect(result).toEqual("Intern");
    });
  });
  describe('getID', () => {
    it('should return the school name of the intern', () => {
      const intern = new Intern("id", "name", "email", "school name");
      const result = intern.getSchoolName();
      expect(result).toEqual("school name");
    });
  });
});
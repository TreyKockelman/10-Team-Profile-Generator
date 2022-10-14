const Employee = require('../employee');

describe('Employee', () => {
  describe('getName', () => {
    it('should return the name of the employee', () => {
      const employee = new Employee("id", "name");
      const result = employee.getName();
      expect(result).toEqual("name");
    });
  });
  describe('getID', () => {
    it('should return the id of the employee', () => {
      const employee = new Employee("id", "name");
      const result = employee.getID();
      expect(result).toEqual("id");
    });
  });
  describe('getEmail', () => {
    it('should return the email of the employee', () => {
      const employee = new Employee("id", "name", "email");
      const result = employee.getEmail();
      expect(result).toEqual("email");
    });
  });
});
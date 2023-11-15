import {isValidPassword} from '../isValidPassword';

describe('isValidPassword', () => {
  describe('when password is less than 8 characters long', () => {
    it('returns false', () => {
      const password = '1234567';
      const result = isValidPassword(password);
      expect(result).toEqual(false);
    });
  });

  describe("when password doesn't contain an uppercase letter", () => {
    it('returns false', () => {
      const password = 'password123';
      const result = isValidPassword(password);
      expect(result).toEqual(false);
    });
  });

  describe("when password doesn't contain a number", () => {
    it('returns false', () => {
      const password = 'Password';
      const result = isValidPassword(password);
      expect(result).toEqual(false);
    });
  });

  describe('when password is valid', () => {
    it('returns true', () => {
      const password = 'Password123';
      const result = isValidPassword(password);
      expect(result).toEqual(true);
    });
  });
});

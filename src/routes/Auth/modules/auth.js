const jwt = require('jsonwebtoken');
const config = require('../../../../config');

class auth {
  
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return null !== localStorage.getItem('token');
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem('token');
  }

  /**
   * Get a userId value.
   *
   * @returns {string}
   */

  static getUserId() {
    const token = localStorage.getItem('token');
    return jwt.verify(token, config.jwtSecret, (err, decoded) => {      
      const userId = decoded.sub;
  
      return userId;
    });
  }

  /**
   * Get a user value.
   *
   * @returns {string}
   */

  static getUser() {    
    return localStorage.getItem('user');
  }
}
  
export default auth;

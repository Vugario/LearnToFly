/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

 var fs = require('fs');

module.exports = {

  port: 443,

  ssl: {
    ca: fs.readFileSync('ssl/certificate.ca-bundle'),
    key: fs.readFileSync('ssl/certificate.key'),
    cert: fs.readFileSync('ssl/certificate.crt')
  },

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  log: {
     level: "silent"
  }

};

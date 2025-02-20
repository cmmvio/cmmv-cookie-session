import _ from '@cmmv/middleware';
const cookieSession = require('cookie-session');

export default (opts?) => {
    return _(cookieSession(opts), null, 'onRequest');
};

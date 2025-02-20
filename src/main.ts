import _ from '@cmmv/middleware';
import * as cookieSession from 'cookie-session';

export default (opts?) => {
    return _(cookieSession(opts), null, 'onRequest');
};

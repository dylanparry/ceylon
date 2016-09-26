/*
 * This file exists purely to ensure that there is a single entry point
 * for the UMD build. It should do nothing more than import 'expect'
 * and re-export it as the default export with no other named exports.
 */

import expect from './index';

export default expect;

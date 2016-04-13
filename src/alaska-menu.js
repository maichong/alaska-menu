/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-12
 * @author Liang <liang@maichong.it>
 */

import alaska from 'alaska';

/**
 * @class MenuService
 */
export default class MenuService extends alaska.Service {
  constructor(options, alaska) {
    options = options || {};
    options.id = 'alaska-menu';
    options.dir = __dirname;
    super(options, alaska);
  }
}

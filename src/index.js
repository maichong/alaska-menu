/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-12
 * @author Liang <liang@maichong.it>
 */

import alaska from 'alaska';

/**
 * @class MenuService
 */
class MenuService extends alaska.Service {
  constructor(options, alaska) {
    options = options || {};
    options.dir = options.dir || __dirname;
    options.id = options.id || 'alaska-menu';
    super(options, alaska);
  }
}

export default new MenuService();

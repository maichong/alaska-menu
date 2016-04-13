/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-13
 * @author Liang <liang@maichong.it>
 */

import Menu from '../models/Menu';

export async function show(ctx) {
  let key = ctx.params.id;
  if (key) {
    let menu = await Menu.findOne({ key });
    if (menu) {
      ctx.body = menu.data();
    }
  }
}

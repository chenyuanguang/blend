/*
 * @Author: your name
 * @Date: 2020-08-21 16:06:33
 * @LastEditTime: 2020-08-21 16:09:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /blend/packages/blend-spinner/lib/blend-spinner.js
 */
module.exports = (options = {}) =>
    ora(
        Object.assign(
            {
                spinner: spinners.dots,
                color: 'cyan',
            },
            typeof options === 'string'
                ? {
                      text: options,
                  }
                : options
        )
    ).start();

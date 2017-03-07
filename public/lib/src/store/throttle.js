/**
 * 函数节流方法
 * 摘自: http://www.alloyteam.com/2012/11/javascript-throttle/
 */

/**
 * @param {Function} fn 回调方法
 * @param {Number} delay 多少ms间隔内不会触发调用
 * @param {Number} mustRunDelay 每隔多少ms必须触发一次
 */
const throttle = (fn, delay, mustRunDelay) => {
    let timer = null
    let t_start
    return () => {
        const args = arguments
        const t_curr = +new Date()
        clearTimeout(timer)
        if(!t_start) {
            t_start = t_curr
        }
        if(t_curr - t_start >= mustRunDelay) {
            fn.apply(this, args)
            t_start = t_curr
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, delay);
        }
    }
}

export default throttle
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-this-alias */
function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}
export default debounce;

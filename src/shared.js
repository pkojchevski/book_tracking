export const wantToRead = 'wantToRead';
export const read = 'read';
export const currentlyReading = "currentlyReading";
export const none = "none";

export const debounce = (fn, delay) => {
    let timer = null;
    return function (...args) {
        const context = this;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}


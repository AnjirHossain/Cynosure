import moment from 'moment';
/**
 * Courtesy of https://stackoverflow.com/a/4929629/3457884
 */
export function getFormattedCurrentDate() {
    return moment().format('DD/MM/YYYY');
}

export function getFormattedCurrentTime() {
    return moment().format('mm:ss')
}

export function getCurrentDate() {
    let now = new Date();
    return moment(`${now.getMonth()}/${now.getDay()}/${now.getFullYear()}`, "MM/DD/YYYY");
}

export function getCurrentTime() {
    let now = new Date();
    return moment(`${now.getHours()}:${now.getMinutes()}`, "hh:mm");
}

export function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}
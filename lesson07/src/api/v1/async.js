import {delay} from "./delay";

export const asyncFunc = async () => {
    try {
        const result = await delay();
        return [null, result];
    } catch (e) {
        console.error(e);
        return [e, null];
    }
}
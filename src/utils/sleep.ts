export const sleep = (ms: number = 1000) => new Promise(res => setTimeout(res, ms));

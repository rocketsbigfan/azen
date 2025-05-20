import BigNumber from "bignumber.js";

export const formatNumber = (number: number, decimals = 0) => {
    return new BigNumber(number ?? 0).toFormat(decimals, 1)
}
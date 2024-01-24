export function KMPSearch(inputString: string, pattern: string) {
    let ans: any[] | string = [];
    let [i, j, patternLength, strlen] = [0, 0, pattern.length, inputString.length];
    let lps = new Array(patternLength).fill(0);
    while (i < patternLength - 1) {
        if (pattern[i + 1] === pattern[j]) {
            j++;
            lps[i + 1] = j;
            i++;
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                lps[i + 1] = 0;
                i++;
            }
        }
    }
    [i, j] = [0, 0];
    while (i < strlen) {
        if (inputString[i] === pattern[j]) {
            i++;
            j++;
            if (j === patternLength) {
                ans.push(i - j);
                j = lps[j - 1];
            }
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    ans = ans.length ? ans : 'not found';
    return ans
}
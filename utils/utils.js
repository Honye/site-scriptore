/**
 * 比较两个版本号
 * @param {string} v1
 * @param {string} v2
 * @returns {-1|0|1}
 * - -1：v1 < v2
 * - 0：v1 = v2
 * - 1：v1 > v2
 */
export const compareVersions = (v1, v2) => {
  const v1nums = v1.split('.').map((n) => Number(n));
  const v2nums = v2.split('.').map((n) => Number(n));
  const [shorts, longs] = v1nums.length > v2nums.length ? [v2nums, v1nums] : [v1nums, v2nums];
  for (const i in shorts) {
    if (shorts[i] < longs[i]) {
      return v1nums.length > v2nums.length ? 1 : -1;
    }
    if (shorts[i] > longs[i]) {
      return v1nums.length > v2nums.length ? -1 : 1;
    }
  }
  return 0;
};

function countArrangements(row, damagedGroups) {
  const n = row.length;
  const m = damagedGroups.length;

  // Initialize a 2D table to store the counts
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  // Base case: there is one valid arrangement with no unknowns and no damaged groups
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      // Case 1: If the current character is known and operational
      if (row[i - 1] === '.' && j > 0) {
        dp[i][j] += dp[i - 1][j - 1];
      }

      // Case 2: If the current character is known and damaged
      if (row[i - 1] === '#' && j > 0) {
        dp[i][j] += dp[i - 1][Math.max(0, j - 1)];
      }

      // Case 3: If the current character is unknown
      if (j > 0) {
        dp[i][j] += dp[i - 1][j - 1];
      }
    }
  }

  // The final answer is the sum of counts for the last column (all damaged groups)
  return dp[n].reduce((sum, count) => sum + count, 0);
}

function totalArrangements(rows) {
  let totalCount = 0;

  for (const row of rows) {
    const [rowString, damagedGroupsStr] = row.split(' ');
    const damagedGroups = damagedGroupsStr.split(',').map(Number);

    const count = countArrangements(rowString, damagedGroups);
    totalCount += count;
  }

  return totalCount;
}

// Example usage with your input
const rows = ["???.### 1,1,3"];
const result = totalArrangements(rows);
console.log(result);

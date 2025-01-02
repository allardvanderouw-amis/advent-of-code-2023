const isArrangement = (index, groups, groupsStr) => {
  if (groupsStr === targetGroupsStr && lastSpringIndex < index) {
    return true
  }
  return false
}

const isRedundant = (index, groups, groupsStr, lastChar, currentSprings, possibleRemainingSprings) => {
  if (!springs[index]) {
    return true
  }
  if (groupsStr === targetGroupsStr && lastSpringIndex >= index) {
    // console.log('??')
    return true
  }
  if (
    groups[groups.length - 1] > targetGroups[groups.length - 1] ||
    groups[groups.length - 2] !== targetGroups[groups.length - 2] ||
    groups.length > targetGroups.length
  ) {
    // cachedArrangements.set(`${index}#${springs.join('')}`, arrangements)
    return true
  }
  // if (springsStr[index] === '#' && groups[groups.length - 1] === targetGroups[groups.length - 1]) {
  //   return true
  // }
  if (springsStr[index] === '.' && groups[groups.length - 1] !== targetGroups[groups.length - 1]) {
    return true
  }
  if (springsStr[index] === '#' && lastChar === '#' && groups[groups.length - 1] === targetGroups[groups.length - 1]) {
    return true
  }
  if (!(currentSprings + possibleRemainingSprings >= totalRequiredSprings)) {
    return true
  }
  return false
}

const updateArrangements = (springs) => {
  const n = springs.length;
  let arrangements = 0;

  const stack = [];
  stack.push([0, [], '', '.', 0, 0, 0]);

  while (stack.length > 0) {
    const [index, groups, groupsStr, lastChar, depth, currentSprings, possibleRemainingSprings] = stack.pop();

    if (lastChar !== '.' || springs[index] !== '.') {
      if (isArrangement(index, groups, groupsStr)) {
        arrangements += 1;
        continue;
      }
      if (isRedundant(index, groups, groupsStr, lastChar, currentSprings, possibleRemainingSprings)) {
        continue;
      }
    }

    if (springs[index] === '?') {
      if (lastChar === '.') {
        stack.push([index + 1, groups, groupsStr, '.', depth + 1, currentSprings, possibleRemainingSprings - 1]);
        const newGroups = [...groups];
        newGroups.push(1);
        stack.push([index + 1, newGroups, newGroups.join(','), '#', depth + 1, currentSprings + 1, possibleRemainingSprings - 1]);
      } else {
        stack.push([index + 1, groups, groupsStr, '.', depth + 1, currentSprings, possibleRemainingSprings - 1]);
        const newGroups = [...groups];
        newGroups[newGroups.length - 1] += 1;
        stack.push([index + 1, newGroups, newGroups.join(','), '#', depth + 1, currentSprings + 1, possibleRemainingSprings - 1]);
      }
    } else if (springs[index] === '#') {
      if (lastChar === '#') {
        const newGroups = [...groups];
        newGroups[newGroups.length - 1] += 1;
        stack.push([index + 1, newGroups, newGroups.join(','), '#', depth + 1, currentSprings + 1, possibleRemainingSprings - 1]);
      } else {
        const newGroups = [...groups];
        newGroups.push(1);
        stack.push([index + 1, newGroups, newGroups.join(','), '#', depth + 1, currentSprings + 1, possibleRemainingSprings - 1]);
      }
    } else if (springs[index] === '.') {
      stack.push([index + 1, groups, groupsStr, '.', depth + 1, currentSprings, possibleRemainingSprings]);
    }
  }

  return arrangements;
};

// Example usage
const springs = ['.', '#', '?', '.', '#', '?', '.'];
const arrangementsCount = updateArrangements(springs);
console.log(arrangementsCount);

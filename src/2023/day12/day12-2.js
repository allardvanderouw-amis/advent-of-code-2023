// ???.###

// ....###
// #...###
// ##..###
// #.#.###
// ###.###
// .#..###
// .##.###
// ..#.###

const input0 = `
???.### 1,1,3
.??..??...?##. 1,1,3
?#?#?#?#?#?#?#? 1,3,1,6
????.#...#... 4,1,1
????.######..#####. 1,6,5
?###???????? 3,2,1
`

const input3 = `
????.######..#####. 1,6,5
`
// const input3 = `
// .??..??...?##. 1,1,3
// `
// const input3 = `
// ????????????#??????. 7,8
// `

// ???.### 1,1,3 - 1 arrangement
// .??..??...?##. 1,1,3 - 4 arrangements
// ?#?#?#?#?#?#?#? 1,3,1,6 - 1 arrangement
// ????.#...#... 4,1,1 - 1 arrangement
// ????.######..#####. 1,6,5 - 4 arrangements
// ?###???????? 3,2,1 - 10 arrangements
const input1 = `
???.### 1,1,3
.??..??...?##. 1,1,3
?#?#?#?#?#?#?#? 1,3,1,6
????.#...#... 4,1,1
????.######..#####. 1,6,5
?###???????? 3,2,1
`

const input2 = `
..??#???##??#?? 4,2,2
.#?????????.?. 9,1
.????#..??#? 4,2
??#.#???#? 2,1,1
?#??.???#?#????? 4,1,1,2,3
.???#???#?#????? 2,3,3,1,2
???.????.#??###? 2,3,6
????#?#?#?.??# 1,6,1
.??????.?##. 1,3
?????.?#??.#????#? 1,1,1,3,2,4
?????##?##. 1,4,2
?#??.?????.# 2,1,2,1
?#??.??##???????? 4,2,3
?#????????##?. 1,1,2,3
??#?????.???. 2,1
.?????#??#?#?#??.. 2,9
???..#.?.?#?????# 2,1,3,1,1
????#????#??#???. 1,3,2,4
##?#..?????? 4,3
#???#?.?.?#?? 6,1,1
??#????#.?. 2,2
????????#??? 2,1,6
#?????#.##???. 5,1,5
?????.???.????#?. 1,1,1,6
.#?????#?..?.. 1,2,2,1
?#??#???.??##?# 7,1,2,1
???.?????.##..??. 1,2,1,2,1
.?????..?#? 3,1
??.#?#?????#?#?. 1,11
??.????????.##??? 3,3
?#????#.????? 1,2,1,1
?##??????#.????? 9,1
????????.# 1,2,1
???????##??#.??. 1,3,4,1,1
#?####????.??????. 9,3,2
??#?#????.#??# 7,4
????###.???#? 6,4
??#????#??. 6,2
?.?#.?###????. 2,5,1
??????#??.??#?#. 5,5
??..??????????#?#?#? 1,6,5
?#??.??#?#??#?.?#. 1,1,1,1,2,2
?.?#?#??.???? 6,2
..?#..???#??##???. 2,7
?.?????#??#???? 1,1,1,6,1
??????###? 1,1,3
.#???.?.?##????#? 3,1,8
#?.????.??..?#?????? 1,1,1,1,8
?.???????#?? 1,4
??.???#?..? 1,4
#.????.?#?#??#.? 1,1,1,7,1
.??????###???## 1,2,3,1,2
#??????..?.? 1,1,1,1
???#??#?#?? 3,5
??????#?????..??#? 3,3,1,1,1
????##??????.?#??#? 1,1,2,1,1,6
.?#?..??????. 2,4
??????.??#? 2,3
??.?#??##????#?????? 1,8,1,1,1
??????????#?? 4,4
????#???#?.? 5,1,1
???????#????#? 5,1,3
????.???#????? 2,7
??#?##????#??????.? 12,1,1,1
????#?????. 4,2
..#??????# 2,2,1
??????#???.????.?? 1,1,1,1,3,1
.???##???????#?? 1,7,4
??.??#?#???????#?.. 1,13
##.?#???.???#???.?#. 2,1,2,7,1
??????#?????.????. 10,2
??.???.??.?????#??? 2,1,1,3,1,1
.??#????.#?????#. 1,2,1,1,1
?##???#???.???#?? 6,1,1,1,1
?.???????##?.#?# 1,1,4,3
?.#???#....#?????? 1,1,2,4,1
?????????? 3,3
.#??..#??..#?#.???? 2,3,3,3
??.??##..????.???? 2,1,2,2,2
..??????#?. 1,1,1
#??????.#?##????#??? 1,3,6,1,1
????#?#??#?#?##???? 2,1,6,2,1,1
???..???#? 1,3
?#??????#..?#??.#? 6,1,2,1,1
?.???????##??..? 2,7,1
????.??.?.?? 3,2
???????#??.?? 9,1
??.?.?.#?..???.#?? 1,1,1,1,1,3
???#?????????#?? 4,9
#.??##?#??..???#??? 1,1,6,4,1
?#????.?###?#???#??. 4,9
#???##?#??#.. 8,2
.#?#?.??#??#.?#???? 4,6,3,1
##?????##??#.??.?.. 12,1
????#??##?#.???#? 4,2,1,5
??.??#???##?? 1,1,5
??#????#.??#???#? 3,3,7
?##???????.??#???#.? 5,2,1,2,2,1
????#??.?#?.? 4,1,1
????.??#??#?#???#.#? 4,10,1,1
?.???#.??#? 1,4,2
??????.????#???#???# 4,2,1,1,3,1
#??#??.#?.#?.?? 1,3,1,1,1
????.?????.????? 3,1,1,1,1
??.?.?#????. 2,1,2
??????????.?#.??#?? 3,4,1,1,3
????#?.?##??? 3,4
?#?.???.??..#? 1,1,2,2
???#?#??#?????#???#? 9,1,3,2
?.???#????. 3,2
?###?#?#?#?#.???? 11,1
?????###??. 2,6
.?#.?#..?. 1,1,1
??????####???????.? 1,6,3
????#??????..#?#??? 1,7,4,1
???#????#.? 3,1
?#.??#????.?#???? 1,7,3,1
#??#.??#???#? 4,7
#???##??.#..???? 7,1,1
?..???##?#???#? 4,1
.?#????????#?.?? 4,5
????.##?#????##??#?? 1,11,1
#??..#.??##????#? 1,1,1,6,2
???##?#?????.??? 1,9,1,1
?.#?????##??.?#?? 3,4,3
??.#??#.#? 1,1,1
.?.???##??#?.##?? 7,4
#?????????? 1,4
???#???.?????. 3,1,3,1
#?#?####???.#??. 10,1,1
?#????.????..# 1,2,2,1
?#?#???#?.#.??#.?? 4,3,1,1,1,1
???##?##?.?????#??. 7,6,1
?????.?#?# 1,2,3
?.??#?#???.?. 1,7
??.???#?#?#?##? 1,7,2
.?#?.????#?? 1,1,3
#?..#??????.??#??? 2,7,5
?.?#?.?.?????????# 3,9
????????#?##???. 1,3,6
????#???##?????#. 14,1
..???????#? 4,1
???.?####??? 1,5,1
.?#???#?#???? 1,7
???#?#.?.?????.??? 4,5
.?#?#?????#??# 4,1,1,1
?.??###.??.??.??# 1,5,1,1,1
?..????.?#.????? 1,1,1,1,3
?#???#??.????.???? 1,1,1,2,1,1
.???????.?#?#???.? 1,1,3,5,1,1
??#?#???.?????#??.? 6,1,1,4
?#?#????#?#????.#?# 4,9,1,1
?#????..?##?????? 4,1,4,1
???.??#??.#?#?? 2,3,3
????#???.??.??#? 1,5,1,1
...?????.#?.? 2,1
?#???#?.?#???.# 1,2,1,2,1
.?#?#??#??##???#?.?? 1,1,7,2,2
?#??.???????.### 1,1,4,1,3
??#?????##??????#? 4,6,1,2
??????#????????##??? 1,1,1,1,1,9
??#?.???#??#??#.?.. 3,8,1
.?????.??? 2,1,1
?#????#???. 1,4
.??#?##???.????##?? 5,1,8
??#???#?#??#?.??? 1,8,2
??.???????#??. 4,4
.??.?#?##???#??# 1,11
??.??????? 1,1,4
??.?#?###????#?#.## 2,5,1,1,1,2
?##???#???. 3,5
.?#???#?##?#?.#? 1,8,1
???????#?#??? 4,5,1
????#??.??? 2,2,1
??????#?##??#? 1,1,5,2
?..###???.??#???? 3,1,6
.????..???# 4,1,1
.?#??#??#?## 1,8
?.???.????#????.? 1,7
???????#??.#?????? 1,7,1,5
#?????###?#?#???? 2,8,1,1
##????????# 2,1,3
???#.????#?###?#???. 1,9
.???.????# 1,5
..#?#?????#?? 3,2,2
?.?..??????????????? 3,6
??#????.??#??? 4,1,3,1
.?##???#?###??#??? 10,2
??.?##???.?#??? 6,2,1
??##?.?#???#???? 3,1,1,1,1
????????????#??????. 7,8
??#.#?.??#?..?#.? 2,2,1,2,2
???.?#?????? 1,2,1
?.##??.???#??? 2,1,3
??.???#??????????# 1,5,1,1,3,1
???.??.?.?? 2,1
???#?##.?????#.? 6x,1,1
??.????????? 1,2,2
???#??.##?? 4,2
??#?##?##?.?..??. 10,1,1
???????#?..????????. 2,1,1,8
??.?#?##?? 1,2,1
#??#????.#?? 1,4,1,1
?????.???????????. 2,10
??.????.??? 1,2,2
.?.?#??.??? 4,1
?.?#.#?.?###??##?#.. 1,1,1,4,4
#???#???.?#????#???? 8,2,3,2
..#?#..???. 3,1
?.?????#.?.?.#? 2,1,1,1,1
?.?.???.#???? 1,2,1,1
??##??#.?#.??#??.?.? 5,1,2,1,3,1
??.????????????#??. 2,4
.#??.?#???. 1,2,1
#???.?#?#?????.?? 2,7,2
???????#?### 4,2,3
#?#??.???????????#? 5,1,1,3,2
?????.????? 4,1,2
????.???#?#.. 2,5
?.??#.?.?? 1,1,2
?.?????????#?. 1,1,1,3
.??.??#??? 1,3
.???#?##???.#? 2,5,1,2
??#?????.???##??? 2,2,2,2,1
???#?????.#????? 1,6,3
?##????#??.#??? 5,3,2,1
?.???#????### 1,1,1,6
?.???..??..??? 1,1
????.???????#?#?? 2,12
??????.###..?#??#?? 4,3,5,1
#.?#???????? 1,4,1,1
.?????..#??????. 2,1,1
?#?#??.???##?#?###. 5,7,3
???#?##?#?? 5,1
.?#?..?????#? 3,1,2
???.?????.????.??? 1,5,1,2,1
?????.?##??????? 1,1,3,1,1
?#.???????. 2,1,4
?.#.??????#?#.??? 1,1,5,1
?????.?.??.?#???? 1,1,1,1,1
??.#?.?#?.??.???#?## 1,2,1,1,6
???#??????#?#?##? 1,5,1,1,4
#??.#????##??#??#??# 2,2,11
.????#????#?????? 6,3,2
?#??????.? 2,3,1
?????.??##?.?#???### 4,1,2,8
#??.?.?.##??. 3,1,2
.#?#.??#?. 3,2
?#?#?#??#?.?????? 8,1,2
?..??##.??.??? 3,1
??#?#????.??? 1,5,1,2
??#..????#???# 2,1,3,2
#???##????.#???? 2,7,2
?.??????????##? 1,1,1,4
?#??..??.?##? 2,1,4
???????.?.. 2,2,1
?..?##????? 1,3,1
??????#????????. 7,1,2
???????#..#?#??? 6,3,2
????.?????#????? 3,1,6
???#??.??????#?? 3,2,2,1
#.????#.???#??#??? 1,4,1,7
????####???#?#??? 2,4,2,1,2
???.?..#????#?#???#? 1,1,13
??..?????? 2,1,1
???#?#?#?#??????#??? 1,8,1,1,1,1
?.#.?#???? 1,3
?.##????#????..? 2,6
?...???.#?????###. 1,1,1,1,5
???#????#. 1,1,3
?#??????#?#. 3,1,3
.?#??.#?##??#?# 4,9
?.?#???????? 5,1
?.?#?????##?.??????? 3,3,2
????##???.?????.#?.? 2,6,2,1,1,1
?????.?.###???#.?? 2,1,1,3,3,1
?????.?#??? 2,3
?#??.??????????? 3,2,4
.??..????? 2,2
?#?..?..#?. 3,1,1
.?.#???????#? 6,1
??????.???#?. 4,2
?????#?.?. 2,2
?#?#??.?????? 6,1
??#.?..???. 2,3
?##??#?#??.???##?#? 2,6,6
?#???..??#??#. 4,5
#?#??#?????.??.?#?? 11,1,2,1
????#####?##??.?? 14,1
.?.????.#??#.??.?. 1,2,4,1,1
?.?.???###??.. 1,6
??#??###?.?.? 2,5,1,1
..##?#?#?#? 2,1,3
?????.?#?. 2,3
#??#??#.???#?#.??? 7,1,4,1
??#..????#???#??? 3,3,1,3,1
?#??#??.##???.??#? 7,5,2
?????...???? 3,2,1
.?##?.???.. 2,1
?.##??#??..??? 5,1,3
?????????????#??? 1,1,7,4
.?###?#???? 5,1
?#?..??.?? 2,2
.#??#????#?.??#????? 6,3,2,1,1
.?#?#?#???#.#???. 7,1,1,1
??.????#?. 2,1,2
#????????# 1,1,2
.??.????#???..#..? 5,1
.?#???#?#?? 3,6
?.???#??#????#??# 1,12,1
.#.???.??#? 1,2,2
#?.??????#? 1,3,3
??.#?.??#?##??#?# 1,1,1,7,1
?#?.???#??# 2,5,1
??????#?##?????.# 3,9,1
?????##???#?#?#?#.? 1,12
??.????#?##.#?. 1,7,1
?#?.?##????###?#?.?. 1,12
?????#??#??????? 4,1
.#????#??#??#.? 6,5
.?##?.???. 4,1
??####?.#????##??. 6,2,3
?#?#?##??#???? 10,2
??#???...?#?? 5,2
????????## 6,2
?.#?????###?#??. 1,1,8
.????#?..?? 1,2,1
.?.#??.?#? 1,3,1
??????.??.???#?? 1,3,2,6
?????.???? 1,2,3
????????#?????.? 6,1,2,1
.??????##????#? 1,1,2,3
???..#?#??????.??.#. 2,5,3,1,1
##?#?..??#.. 5,1
?????#???.. 2,1
.?#??.?#??.#???.?#? 1,1,1,1,4,1
#?.#####?.?## 1,5,3
????.#??.????#?#??? 1,1,3,1,8
???.???#?##?? 1,7
????##???.??????#?? 6,7
??????#?.# 2,2,1
?.?###??.?..????? 5,3
??####??????? 4,3
..#??#???? 2,1,1
?.#?.????????? 2,3
?.????.?##???##??.?? 1,1,1,9
#.???.?#??#?#?#.? 1,2,3,5,1
???????##.??????. 1,3,1
?#?????.????? 6,1
#???????#???? 1,1,1,5
.?????#?.? 1,3
??#?#?????? 3,1
?.??????????##?#.? 1,8,5
?.?.??.???.??..? 1,1
#???????.?.??? 7,1,1,1
.?.?.?????? 1,4
?##????????# 3,1,1,2
.#????##.?? 2,4,1
?????#????? 1,4
??###?.?.?? 5,1
##?#??.?#? 4,2
?#?#?????#?? 2,4,3
????...????.? 2,1
?.??????#???# 1,3,2,3
???.?.?????? 1,1,4
?#?#??#???????????? 5,2,8
????????#.?.?? 7,2
.?.?????.??. 5,1
?.??????..? 1,2,1
?#?#??##?.??????. 2,1,3,4
??????.???#?? 5,1,1
??#####?.??.??#??? 8,2
.??.????#????#??. 1,12
??##???#????##?# 3,1,1,3,1
??##????#?..?? 3,2,1
??#??#??#??.??? 10,1,1
..?#?#.#???.?.#. 4,4,1
..??##?.?.? 4,1
.?#.????#.? 1,3
?#????????. 5,1
??.?????.#.?##??#..? 1,1,2,1,6,1
??#???#?#?#?? 4,6
?#.???#?##????#?? 1,10
??.??#.?#?? 3,3
#???#?..???.??.? 1,3,3,1
.?#?????.??? 6,1
???.?????#? 1,2,2
??.?#?#??.?? 1,1,3,2
?#??.???#.?????. 4,1,2,1,1
????????.#??#.??#.? 1,1,1,4,3,1
??????##?#????##?. 3,5,3
??#????#???????## 4,1,1,1,3
####?.???##???#.?. 4,6,1,1
??????#?????#???#? 3,2,2,2
????#.?####????? 3,9
.????????#???# 1,8
?????.??..?? 3,1,1
####???#???.???#??? 4,6,1,4
#??#???#???#?????? 5,1,1,1,2
?#?#???..?? 5,2
.#?#???.?.? 5,1
???#???#?#? 3,3
?#..???##????? 2,1,2,1
???.??#????# 1,3,1,1
??????????? 1,1,6
???.??.?###? 3,4
?.??#.??#?##??? 1,5
??.????????#???? 1,4,3
???#???#???????.??? 9,1,1
.??##??.?#?? 4,1,1
????#?????????? 1,2,6,1
?????.???????#?????? 5,1,11
.??????????#??? 2,1,2,4
??????????..???????? 10,2,1,1
?#.???????#????.?? 2,7,1,1
???#?.???.???#?#?#? 1,1,2,1,5
??##???????#?##? 3,2,5
?????#???.?#.?? 6,1
..???#?#???#. 1,1,2,1
???#?##.?#??###?#? 1,4,10
????..??#?## 2,1,6
?#???????. 3,1,1
?#?????##?#?#?????? 3,13
???#????##?? 4,4
?????.????.?#??#?. 5,3,5
.????#?????##?? 2,3,5
.?.?.##??? 1,4
.???.#?.?#??? 3,1,3
??.#??#??#???#??. 9,3
???.???????#?#?# 1,2,3,1
?#?#???#??.#?..?#?? 6,1,1,3
????.?#??#???. 1,1,6,1
..??????#?? 1,4
##.?.??#.? 2,1,1
??##?##?.????##?. 1,5,1,4
??#???????. 2,2,2
??????.??? 1,1,1
??#??????.?#?.# 1,6,1,1
?.?.????????????? 1,1,1,8
????.????# 2,2,1
??#?#####??.??? 2,5,1,2
#..???##?#? 1,1,6
#????.?#???#???# 2,1,7,2
.#?????#?#??.# 1,4,3,1
??#??????#.#???# 2,1,1,2,5
?.???#???? 1,2,1
????.?.?????????? 3,1,2
?#??????#?????.? 4,6,1
?.#?#??.#????.?? 1,3,3,2
#?????.?#?##?.#.?..? 6,5,1,1,1
???.?#.??.???...? 1,1
.??????..????.? 1,2
#???????#?#??.?????? 1,1,2,3,1,6
??.?????????? 1,1,5
#??#?.#?#. 5,1,1
.#??.?????. 2,4
.?#???###???? 1,5
?..?????#? 4,2
?.#??????#????###?.? 1,1,9
.?#??????. 1,1,1
?##.?????. 2,2,1
?#????.??#????. 3,1,3,2
???#??#?##?? 1,1,5,1
.????#.?##? 4,3
?.?#?.##?#??????#?#. 1,3,13
??????##??#?? 4,3,1
???.#?#.?..?#??##?. 3,2,2
?????????.? 1,6
????#?#?.????.?.??# 1,1,2,1,1,3
???#?#??#.??.????.?? 7,1,2,1
??##?.??#???#? 1,2,3,2
??????#?#?###??##?? 11,3
#??????##..??????. 1,7,5
??.??...??????#??#. 1,10
??#????#??#.?#??#??? 1,1,1,1,7
??.?#??#???#???.#? 1,1,8,1
#??..?#?.#??.#?#?? 2,2,2,4
?##????????#??????# 7,6,1,1
???.?.#??#?????#?.? 1,1,1,3,2,1
#...??.????#????. 1,2,6
????#.?????#. 3,1,1,1
?.??#..???????? 1,3,1,2,1
?????.?.#.???.#..? 5,1,1,2,1,1
?#.?#?.###??????. 1,1,7,1
?.?#????###?#.?# 1,2,5,1
.?????.????.??. 3,3,1
????#?????????????# 7,1,2,1,1,1
?#????##?????. 2,6
?#??##?#?#.???#?# 10,3
#?#?#?????????.??#?? 8,2,1,4
?#??####??.?##. 8,2
???.??????? 2,5
????##?##???#????. 1,12,1
??????.#?#?#??? 5,7
??#?#????#?##??.?? 8,1,2,1,1
#?????.??#?## 1,2,4
?????..??????#????? 4,8,1
?.??#?#??????#.????? 4,3,1,2
.???.#????. 1,2
???##?###??...? 9,1
.#????.???#?. 2,5
...#??#????? 1,1,4
.?#?#??.#???#?##??? 2,2,1,9
.????#??#???##.. 2,9
...#???#.?????. 1,3,3
.###?#?.?????#. 5,1,2
?????#.??#?#?.#?#.? 1,2,4,1,1
#?..?#???#?#? 2,7
??????###?#???. 1,7,2,1
?#??.?????? 3,1,1
??.#??..?##?#? 2,3,6
?????.??????#?.??## 2,1,1,2,2,4
??##?#??#????#..? 8,2
???.#.????? 3,1,3
?.#??.#.?? 1,1,1
??###??#??.###?.? 10,3,1
.?.?#??.?.#???????? 1,4,2,5
#??.???.?#?#????.? 1,1,2,5,1,1
######??.???. 6,1
??.?#?????#?#?. 2,11
?.?.?...????.?#.? 1,3,1
??.##??.???.?????? 1,2,1,5
??.??..?#?#???..#?. 1,1,7,2
?????.??#??????##?? 2,11
#??#?#??..??..?.. 8,1,1
#?#???#?#??#????#?.? 1,15,1
?.?##???#.?#. 7,1
???..?.?#?? 2,2
???#?#??.?? 6,1
?..???????? 1,1,2
?.?????????? 4,1
?#?.?.?#?????#?# 2,1,1,3,1
??#??#?.???##. 4,4
.??.???#..?? 1,4
?.???#?#?? 1,1,4
.??????.??????#?#.. 6,1,1,5
#?#????##?#?.##? 4,3,1,3
.?#??????????? 1,1,8
???????????#? 6,1
???.#?.#?#???#????# 3,1,1,1,8
?#????#?.?#???. 2,2,3
??#.?????.??#??#?? 3,1,3,1,1,1
?.?#??##??? 2,5
.?#???#??#??? 1,7
.?.?????..???. 5,1
??????.??? 1,1,1
.??#???#?.??#??# 1,1,2,1,1
???#??##?#?# 1,1,7
?.#??.?..#.??#?.#? 1,3,1,1,1,1
???#?###?..?.??????? 9,1,3,1
..????#????# 1,7
##??????#??#?? 3,2,4,1
?#?.????#?? 2,2,1
?##??#?#???????..#?? 6,1,1,3,1,1
?.??#?#??..?????. 5,2
????.?##.? 1,1,2
???.?#?????????#??? 2,3,8
##??#.?#?#?? 2,1,1,1
?#.?#??.?? 1,2
???#?#??...##?#??? 5,5
#??##??#????..#??? 5,2,2,3
#??#?????? 4,2,1
????.?.???#? 3,1,4
??????#??? 4,3
????#??????#????#??? 10,2
????#???????#? 1,2,8
?.????#???#.#??.? 1,6,1,1
?.???????????#?#? 2,8
???????.??? 1,1,1
??????#??????.? 1,1,3,1,1
????###??.?.???#? 7,1,2
???.????#???? 2,1,5
.?#??#???#? 1,2,2
###?.???##?? 4,6
????#??.????????. 3,1,1,2,1
??#????#????##?.??? 10,3,1,1
???????.???##???#?# 4,1,9
##?#???#??.?????.??# 4,4,2,1,2
??????????##????#??. 1,12
?##?????###????.?? 12,1,1
???#??..?#?#??.? 2,5,1
??#.?.##???.##??#?.# 1,1,5,5,1
#??????????.#???#? 1,5,1,5
?.??#..?#??. 1,2
.?.??#??###????????? 1,11,1
???.?????#??????##? 1,3,3,1,4
???#??.??.????#? 4,1,1,1,3
?.????.?#??.?#??#?? 1,3,4,2,3
?.?????.???##??#??? 1,1,1,1,7
?##??#???????? 5,1,2
#?????.#????#???##.? 3,1,1,9,1
#?.?.#???#???. 1,1,1,3
????#????##.? 5,2
##??.????##?. 4,1,3
???????.#? 5,1,1
#???#????#??. 1,3,3
???.?.?#?????#?# 3,1,2,4
?#??#??##?. 2,5
???#?##??.??.#?.??? 5,1,1,2
??????#??##????..#? 1,10,2,1
?.?.?.#?###??.?##? 1,1,5,1,2
???????#???. 1,7
#???..??????? 3,1,4
??#?#..?#????.?# 5,1,1,2
?????????#???#.?? 3,2,2,3,1
?#?.??##????#?##? 2,1,11
???#?????# 1,5,1
??##??..#?????# 5,7
??#?????.???##.#?#? 6,1,2,3
????#????. 1,2,1
..??##?#?#??#?.?.?. 12,1
??##?##?.??.. 6,1
?##.??#?#??#?? 3,7
.?.??#??#???#? 1,7,1
??#?##?.#?#??.???? 6,5,1
???#??????#?.???.? 1,6,2,1,1,1
?????????###??# 1,10
?.#???????.? 6,1
.??#.?.?????#??. 1,1,2,3
???.#???.? 1,1,1
????#?????##.#? 1,2,2,2,2
??.#?.?????????.?. 1,1,6,1,1
????#????##???????.. 11,3,1
.?#.????#?. 2,1,2
#?#?.?????#? 4,1,3
??????#???????? 2,2,1,1,3
.????.???#?#?.???##? 4,5,2
?.##??##????##??.?? 12,1
??????#?.?#??. 6,2
??#?.?..#.??##??? 2,1,1,5
.#???#..??#????#??? 1,3,2,4
??#?????#?#?.?????.? 9,4,1
?##?.?##??##?##.?? 2,10
.?.??#???????#?#..? 1,2,1,5,1
??????#.?.??#??#.# 3,1,1,4,1
#?????#??#????##. 12,3
???.???.#????##? 2,3,3,3
#?####?#?#.??????# 10,1,2,1
??.???#??.????.??.? 1,1,4,1,1,1
????????.#? 4,2
..????#.????.?.?#? 2,1,3
?????#???.???? 1,1,3,1
??.#..?#???# 1,1,2,1
?##?????##? 2,1,3
?#?..??.??? 1,2,1
.????#???##.?? 1,6
?#??????#????# 3,3,1,1
.???.???????##?# 2,5,5
??.??????.?????? 1,4,3
#??#???#????.??##. 1,7,1,2
???.??#???##??. 2,1,1,3,1
?#?##???.#?##? 5,1,5
??.?#?.???.???????.? 1,3,1,6,1
?#.#????.??#??#??#?? 2,1,2,4,6
..????..???#???#???? 1,6
#??#???????.???#?#? 1,5,1,1,6
???##?????..#??????? 7,8
?##?????..?????? 5,1,1,1
#??????.?#?. 2,3,2
???.???????????.??. 1,1,1,7,1,1
.??#????##??#.#???? 1,2,6,2
?.##?#??????#??#?? 7,4
?#.##????##?? 1,3,4
..???.????. 2,3
?#?????#?#.? 2,1,3
???..??.?? 1,1,1
??????????#?#???#??# 3,12,1
#??##?#????.. 1,6,2
???.????#???? 1,1,3,1
#?????##?#?##??# 1,1,10
?..##????? 1,2,1
?..?.????#? 1,2
.???.?.????.??#??? 2,1,4
???????#?. 3,3
??????.#???.???? 1,1,2,1,1
.?????.?#?#?. 4,1,2
????###?##?.?#?.? 1,8,3
??#???????#.????. 5,1,1,1
.#?..??.???#.??#? 2,1,3,3
?#??#..????..?.????? 5,1,1,1,1,2
?#?#?#?????.# 1,4,1,1
.?##?#?#..???????? 2,3,6
????#?????#?#. 1,4,3
???#??#??#??#?? 8,1,3
?##?#?#????#?#?#??.? 2,10,3,1
??.?.??#????#?#??. 1,1,2,4,3
?#???#??#???.#??? 2,1,5,1,1
???#??.??###.?#? 3,5,2
?????.??#??. 2,1,3
#?.??#????????? 2,5,1,1
???.???#?####??#?? 2,1,9
#..#.??????#?#??.??? 1,1,10,3
?###??#??????#?#?.? 8,4,2,1
?????#???..????##?#? 6,5
#??#??.?#?##?????? 2,1,1,2,5,1
??????.??? 1,3,1
?#..#..?????..?.? 2,1,5,1,1
.#??#???###??????.#. 14,1
?.?#???#?????????#? 1,1,3,1,1,6
???##????#???#??#?# 5,1,1,6,1
?#????.?????##??.? 4,2
????.???###??#?????? 1,1,15
#??#???#.???? 8,2
##?#???#?.?? 5,2,2
.?#??##.?. 2,2
?#??##???? 5,2
??#?????#?##??????? 12,2
??????#?#..????? 1,6,4
.?#??#??????? 2,1,1,1
????#?#??#???#????? 1,3,9,1
??????#?????.#?# 10,1,1
??#?.??##?###?? 3,8
??#.??##?##??#? 2,1,8
??#??#??.???? 1,3,1,1
#?..?#??##??????.?? 1,6,1,1,1
?#?????##????#?? 5,4,4
??#????#.?? 2,2,1
??#?.???##..##?? 1,2,5,2,1
???#?.????????#. 1,6,1
????##?#?##?#.??.? 2,2,4,1,2,1
???#?.??#?#??#. 1,1,3,1,1
.?#.?#???.#? 1,1,2
?#.??####?#????? 1,11
??????.??.##?#??? 4,1,6
?.??#??.???. 5,1
??.#?##.?????##?# 1,1,2,2,6
????.????#?#? 4,6
#??????##?????.#?. 12,1
.#?????#?.#????##??? 8,4,3
????#??#?##??. 11,1
??..#??#??##??#?. 1,1,1,4,1
?#????????.#???.? 4,3,3
??.#????.?#??????. 1,4,1,1,2
??????#??#?##???. 6,5
.????????#?#? 4,4
.##..?????# 2,5
??????????.? 1,5,1,1
?????#?????.?.?? 1,4,2,1,2
.????#?.??#?#???? 2,2,8
#?????#?##.???? 1,1,6,1,1
?????????? 1,4,1
.#?.#?????????? 1,3,6
#.?.????#?? 1,5
??.##?????.?#?#??#? 1,3,3,1,2,2
#?#?..#?#????? 4,3,1
????.?.?#????????#? 3,11
##????????.. 2,2,1
???#??###.?##???#?? 6,6
??...?????? 1,4
?#.?.?.??? 2,1,1
??#?.???.?.?#.??.?? 2,3,1,1,1,1
.??..??????#???????? 2,6
?????.???.#?..?# 4,1,1,2
?#??#????? 5,2
??????.????##?.????? 4,1,2,3
??#?#?#?.#???? 3,1,2,1
.?##.?#.?.??# 3,1,1,3
??#?????#?#.??? 9,2
.????#???#? 1,3,1
..??.????..?#?? 1,2,1
??#?.????# 1,1,5
?.????.???##?#? 1,1,2,5,1
?????####?#?#??.??.? 12,1
#.?.?????????.#???? 1,1,3,1,1,2
.?#??##?????.#?? 10,1
????????#??????..??? 1,1,6,1,1,1
??#??#???#?.?.?#. 8,2
????..??????.??. 3,4,1
??.???##???.?..???? 6,2
????##..??? 1,2,3
.#?..???????. 1,1
?????#????#??????? 1,1,1,1,6,1
?.????#???? 3,2,2
?????????.??. 3,1,1,1
.?????.??? 3,1
???.?????????? 1,1,6
#???#?#.####?#??#?#? 1,4,11
..??#??#?...?.??.?? 6,2
?#???..?#?#????? 2,1,4,1,1
????????####???? 2,9
??.#?..#????#?..???? 1,2,1,2,2,2
??.#?.???? 1,1,2
?????#?.?.#?? 4,1,2
?????????.?# 1,1,1,1
?????#####??? 1,8,1
.????#?#??#.???? 8,1,1
???##??#.???? 4,1,3
.??????#??? 1,5
.??#?.??..#?? 2,3
??##?#?????#???? 6,1,1,1,1
??#?##.#??#?.?. 5,4,1
#??##????.??#?? 5,1,1,1,1
?##???###.# 4,3,1
???#?????????#?.? 4,2,5
#.?.?.?#??.?? 1,2
.?#.?..????? 2,2,1
?.#?????????? 1,1,3,2
???????.??? 2,1
?##?????????????.. 2,4,4
???#?#?....????.?.. 3,1
##?#???.??? 4,1,1
.???#????.#?????# 4,2,2
.?##?.?#???#??????? 3,4,1,1,1,1
???.#?#?????#?. 1,5,1
??????????##??###.. 6,4,3
??.?#???????.#? 3,1,1,2
#??#?#????#?#???#.? 2,6,1,2,1,1
#?#???????#???#.???? 1,5,1,2,1,1
?#????#????##??#? 2,1,7,3
?.#??.?###?.#? 2,5,1
??##???????????#?# 1,3,1,2,1,1
????????.??# 4,2
????.??#??? 3,2,1
??#?#?..??#?# 1,4,3
#????#??.##.????## 1,1,3,2,6
??..?#???.??#?. 1,1,1,1,2
???.??#?????? 4,1
???#???..? 1,2,2
???.????????????? 2,7,2,1
??#.?????? 1,1,3
??#?????#?##????#? 1,1,2,1,8
??.#?.?#?.?. 1,2
.?##???##????? 3,4,1,1
??#??###?.?? 2,4,1
?#?.????#?????#? 2,5,6
#?.?????#?#?#???#?#. 1,3,12
??.??.##?.? 1,1,2
??#??#?#?#.?? 3,3,1,2
.?##??.?????.? 4,2
??????#?#????#.. 1,8,1
??#?.?.???.#????. 2,3,4
.?#?.??#??? 1,4,1
?.???#???.?#. 1,6,1
?.?.?????#.##?##?. 1,1,3,6
?.???#?#?#??????#??. 11,4
?????????????.#?#??? 1,5,1,1,4,1
??#..????##?#???.?? 1,1,4,4,1
??.???????. 2,5
?.?###??..??.?##???? 6,1,5
???#?????? 2,1
?..?..??????.?##???? 1,3,2,1
???#????#?.???#??#. 6,3,2,4
?#?##???#???#?.#??. 13,3
?#???.?????? 5,1,1
????#???###?.#?? 1,5,3,1,1
???#??##??????##???# 1,2,3,1,1,6
..?###???????.??## 8,1,2
#?.??..??? 1,1,1
.?#?.??.?#? 2,1,3
??????.#?????..???. 2,2,2,1,1,1
.?.???####??# 5,1
##.?..??.?. 2,2
???#??#??..#?????? 4,1,1,1,2,1
?#?.??#?#?? 1,5
?#?#???##?#?..?#?.. 12,1
??#????##???.??.???? 11,1,1
?#???????#??????##?? 3,5,6
???????????.?? 2,2,4,1
???????.??? 2,1,2
?.#?#??.?? 3,1
??#.??#??.???#????. 2,1,3,1,3,1
#.#??????..? 1,4,1
?#?##???#????#???? 1,3,1,1,4
??????#?#?#??????? 9,2
.??#.#???#?#. 1,1,1,4
#????##??#?.??????#? 11,7
?##.??#?##. 2,6
????.?..??? 2,1,1
??.????.????. 3,1
???????.?# 4,1,2
?#.?#???.????.?? 1,3,1,1,1
??#??##?.? 1,4
.?##????????.?.??? 10,2
???#?????.? 4,1
???????#?.??##? 1,1,1,3
.???#?.?????? 2,5
??#?????##?##???? 5,4,5
???.?#????#???#?#? 2,1,2,1,5
?.?????.??#??? 5,5
.??????###?.??##? 4,3,4
.???..???.?##?????#. 2,2,6,2
???##????###? 1,3,5
#??#?#??#?#.??.? 2,8,1
??#?.?..##???#?? 1,1,4,3
?????.???? 1,1,1
.??????##??? 1,2,4
????####??#?.? 1,7
???##???????????.??? 2,1,8,1
?#?.?#??.??????#?. 2,1,7
.#?#??#???? 7,1
???..?.?#?#?###?? 1,1,9
.####??##???????.?# 4,3,5,1
??#..???#???#..? 1,8,1
??#.??.??##????#. 2,1,7
???#???..#??. 3,1,1
??##?###?#?#?#???? 14,1
?#?.??#??? 1,3,1
?.#?????#???.?#???. 8,5
?###??#???#????? 7,1,1,1
..?????????.??.?? 3,5,1
????#?????? 2,4,1
??#?#?????????? 6,1,1,1
?.?#??.###?#?????# 1,3,3,2,1,1
#??#..??#? 2,1,4
...?#??#??? 1,5
.??#?##??????. 5,2
?#.????#?.?.?? 1,4,1,2
#??#???#??#???????# 2,1,3,3,2,1
??#??#.??? 3,1,1
??#??..??#?.??## 2,1,4,3
????????#???? 6,2
??##??..?#?#??# 4,1,7
?..#????????? 1,3,2
??#?????????.???? 4,1,1,2,1
?.???????? 1,1,1
##??#?????? 2,2,3
???#????#??. 3,1,1,1
???#??.??? 2,2
?.???#??????? 1,2,1,2
#?#..?#.???#?? 3,1,3
.??####?#???# 4,5
?#???.???#?? 1,1,1,2
###??#?.##??? 3,3,2,1
?.?????.?????.??.? 1,1,1,1,3,2
???#????#?###?#? 4,1,8
?##?.####??#?. 4,8
??.?##??.?????###? 1,4,8
??.?????#??#??????? 2,1,3,1,5
?#.????..???????##?? 2,1,1,4,3
?#??#.???#??###??#? 2,1,1,1,3,3
..?##?????#????? 4,5
???##?.?###?.? 2,4
????.??..?? 2,1,1
?#????#??#.?????? 2,6,1,1,1
??#?..??.?#?#? 1,1,1,3
????#?#????#?????#?? 14,3
???.#?.??????.??.# 3,1,1,1,1,1
..#.#?#???#??# 1,10
?#??..????????# 2,1,3,1,1
?#..??#??? 2,3
?.###???#.. 3,2
.#??#??##???#? 1,10
????????##?.?###? 8,4
.???###..?..?# 4,1,2
??#?#??.??.#??? 6,4
??##????#??### 3,1,4
#?..##?.?????###???? 2,2,8,1
#????????##..??## 3,1,4,4
????#??#???.? 1,7
?#??###?#??.? 1,6,1
???#??.?#??##?#?. 3,9
.?????????#.????.#? 2,5,1,1,2
?.?????#?????#?? 1,2,1,3
?##???###?#??. 11,1
????#????? 1,2,1
.??.?.??#?#??? 1,7
?..??...?????????.? 1,6
?#?...#??? 2,3
.?#..#?#..? 1,3
?.??????..??#??? 3,5
?.??..???????##??#? 1,1,13
##??#.???????.?##??# 5,5,1,2,1
???#??#?#.???#???.?? 8,2,1,1,1
?????..?####?#?? 3,8
??#??.?#??..??.# 1,1,3,1,1
?????#??##??#?#??#?# 8,8
???.?##?..? 2,3
.??.??#?#??#??.#? 1,1,8,1
###????###???? 3,7
???##..#?. 2,2
..?????#??.?.? 3,3,1,1
#.??.?.#??###??#?#?? 1,1,1,9,1,1
?.?.#.??????##???# 1,1,2,1,6
.??#??#??????? 1,4,1,1
?#?.??#?.?#?#???? 1,4,2,1,3
???.??????#? 1,5
?????..?.???? 3,1,1,1
.????####?.?????. 6,3
???#??#??.?#???? 6,5
#..??####??? 1,4
?#??#?#?##?????.#? 11,1,1
??#?#..?#??# 3,4
??#.???..??#??????#? 3,1,1,1,1,3
?#??.????#????? 4,1,1,4
.#?#?#?#?#??.#????#? 11,1,1
#?#??.???.. 4,2
??#??##?.. 2,3
????.?.##???? 1,1,1,6
.?????.????????.?#? 1,1,6,1,1
??#??.?#?##??? 3,1,6
?.???#???##?##.? 1,1,7
?????.#????#?#?? 2,2,9
#???#?????.#??? 3,1,1,4
???#.#?.??.#??? 3,1,1,2,1
???#????????????? 9,4
?.#.??.??? 1,1,2
.?#??.??#.? 3,1,1
??????.#??.. 2,2
?##???##??#? 4,5
????###?##??#? 1,10
`

// ???.### 1,1,3 - 1 arrangement
// .??..??...?##. 1,1,3 - 4 arrangements
// ?#?#?#?#?#?#?#? 1,3,1,6 - 1 arrangement
// ????.#...#... 4,1,1 - 1 arrangement
// ????.######..#####. 1,6,5 - 4 arrangements
// ?###???????? 3,2,1 - 10 arrangements

let time1 = 0
let time2 = 0

const getPatternParts = (parts, include = false) => {
  let patternParts = []
  let counter = 0
  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i] === '?') {
      if (include) {
        counter += 1
      } else {
        break
      }
    }
    if (parts[i] === '#') {
      counter += 1
    }
    if (parts[i] === '.' && counter > 0) {
      // End of parts
      patternParts.push(counter)
      counter = 0
    }
  }
  if (counter > 0) {
    patternParts.push(counter)
  }
  return patternParts.join(',')
}

const isArrangement = (parts, arrangementsStr, partsCount) => {
  if (parts.includes('?') || parts.filter(p => p === '#').length !== partsCount) {
    return false
  }

  const patternParts = getPatternParts(parts)
  return patternParts === arrangementsStr
}

const compareParts = (arrangementsStr, b) => {
  const aNum = arrangementsStr.split(',').map(Number)
  const bNum = b.split(',').map(Number)
  let ret = true
  for (let i = 0; i < aNum.length; i += 1) {
    if (aNum[i] && bNum[i] && aNum[i] > bNum[i]) {
      ret = false
      break
    }
  }
  console.log({ aNum, bNum, ret })
  return ret
}

const getArrangements = (index, parts, partsCount, arrangementsStr, nested) => {
  // console.log(`?getArrangements ${nested}`, parts.join(''))
  // const patternParts = getPatternParts(parts)
  // console.log({ patternParts, arrangementsStr })
  if (!parts.includes('?')) {
    // console.log('test arrangement')
    const isArr = isArrangement(parts, arrangementsStr, partsCount)
    if (isArr) {
      return 1
    }
    return 0
  } else {
    // let time1a = Date.now()
    // const currentParts = parts.filter(p => p === '#').length
    // const possibleMoreParts = parts.filter(p => p === '?').length
    // if (currentParts > partsCount || currentParts + possibleMoreParts < partsCount) {
    //   return 0
    // }
    // let time1b = Date.now()
    // time1 += (time1b - time1a)

    let arrangementsSum = 0
    // for (let i = index; i < parts.length; i += 1) {
    //   if (parts[i] === '?') {
    //     let newParts1 = [...parts]
    //     newParts1[i] = '.'
    //     let newParts2 = [...parts]
    //     newParts2[i] = '#'

    //     const arrangements1 = getArrangements(i + 1, newParts1, partsCount, arrangementsStr)
    //     arrangementsSum += arrangements1
    //     const arrangements2 = getArrangements(i + 1, newParts2, partsCount, arrangementsStr)
    //     arrangementsSum += arrangements2
    //   }
    // }
    for (let i = index; i < parts.length; i += 1) {
      if (parts[i] === '?') {
        let newParts1 = [...parts]
        newParts1[i] = '.'
        let newParts2 = [...parts]
        newParts2[i] = '#'

        // const patternParts1 = getPatternParts(newParts1, true)
        // if (compareParts(arrangementsStr, patternParts1)) {
          // console.log('start with 1')
          const arrangements1 = getArrangements(i + 1, newParts1, partsCount, arrangementsStr, nested + 1)
          arrangementsSum += arrangements1
        // }
        // const patternParts2 = getPatternParts(newParts2, true)
        // if (compareParts(arrangementsStr, patternParts2)) {
          // console.log('start with 2')
          const arrangements2 = getArrangements(i + 1, newParts2, partsCount, arrangementsStr, nested + 1)
          arrangementsSum += arrangements2
        // }
        break
      }
    }
    return arrangementsSum
  }
}

const getLineArrangements = (lines, lineIndex) => {
  const line = lines[lineIndex]
  let [partsStr, arrangementsStr] = line.split(' ')
  // partsStr = `${partsStr}?${partsStr}?${partsStr}?${partsStr}?${partsStr}`
  partsStr = `${partsStr}?${partsStr}`
  // partsStr = `${partsStr}`
  // arrangementsStr = `${arrangementsStr},${arrangementsStr},${arrangementsStr},${arrangementsStr},${arrangementsStr}`
  arrangementsStr = `${arrangementsStr},${arrangementsStr}`
  // arrangementsStr = `${arrangementsStr}`

  const partsCount = arrangementsStr.split(',').map(Number).reduce((acc, value) => acc + value, 0)
  console.log('2', partsCount)

  const parts = partsStr.split('')

  let arrangements = getArrangements(0, parts, partsCount, arrangementsStr, 0)
  console.log('3')

  return arrangements
}

const run = () => {
  let time2a = Date.now()
  let sum = 0
  const lines = input2.trim().split('\n')

  let counter = 0
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
  // for (let lineIndex = 0; lineIndex < 100; lineIndex += 1) {
    counter += 1

    const lineValue = getLineArrangements(lines, lineIndex)
    console.log(`${counter}: ${lines[lineIndex]} += ${lineValue}`)
    sum = sum + lineValue
  }

  let time2b = Date.now()
  time2 = time2b - time2a
  console.log(sum)
  console.dir({
    time1,
    time2
  })
}
run()
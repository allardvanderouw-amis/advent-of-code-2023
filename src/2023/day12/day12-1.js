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
????????????#??????. 7,8
`

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
???#?##.?????#.? 6,1,1
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

const getCombinations = (index, pattern, min) => {
  // console.log('getCombinations', { index, pattern })
  const combinations = []
  for (let i = index; i < pattern.length; i += 1) {
    if (pattern[i] === '?') {
      let newPattern1 = Array.from(pattern)
      newPattern1[i] = '.'
      newPattern1 = newPattern1.join('')
      const newPattern1Combinations = getCombinations(i + 1, newPattern1)
      combinations.push(...newPattern1Combinations)

      let newPattern2 = Array.from(pattern)
      newPattern2[i] = '#'
      newPattern2 = newPattern2.join('')
      const newPattern2Combinations = getCombinations(i + 1, newPattern2)
      combinations.push(...newPattern2Combinations)

      if (!newPattern1.includes('?')) {
        combinations.push(newPattern1)
      }
      if (!newPattern2.includes('?')) {
        combinations.push(newPattern2)
      }
    } else {
      if (!pattern.includes('?')) {
        combinations.push(pattern)
      }
    }
  }
  return combinations
}

const getLineArrangements = (lines, lineIndex) => {
  // console.log('1')
  let value = 0
  const line = lines[lineIndex]
  const [partsStr, arrangementsStr] = line.split(' ')
  const min = arrangementsStr.split(',').map(Number).reduce((acc, value) => acc + value, 0)

  // console.log('2', min)
  let combinations = getCombinations(0, partsStr)
  // console.log('3')
  combinations = [...new Set(combinations).values()]
  // console.log('4')
  // console.log(combinations)

  let arrangements = 0
  let counter = 0
  for (const combination of combinations) {
    let combinationParts = []
    for (let i = 0; i < combination.length; i += 1) {
      if (combination[i] === '#') {
        counter += 1
      }
      if ((combination[i] === '.' && counter > 0) || (i === combination.length - 1 && counter > 0)) {
        // End of parts
        combinationParts.push(counter)
        counter = 0
      }
    }
    const isArrangement = combinationParts.join(',') === arrangementsStr
    // console.dir({
    //   combination,
    //   combinationParts,
    //   isArrangement
    // })
    if (isArrangement) {
      arrangements += 1
    }
  }

  return arrangements
}

const run = () => {
  let sum = 0
  const lines = input2.trim().split('\n')

  let counter = 0
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    counter += 1

    const lineValue = getLineArrangements(lines, lineIndex)
    console.log(`${counter}: ${lines[lineIndex]} += ${lineValue}`)
    sum = sum + lineValue
  }

  console.log(sum)
}
run()
const students = [
  { name: '小李', score: 89 },
  { name: '小王', score: 84 },
  { name: '小红', score: 69 },
  { name: '小明', score: 57 },
  { name: '小军', score: 82 },
  { name: '小张', score: 96 },
  { name: '小赵', score: 73 },
  { name: '小吴', score: 52 },
  { name: '小刘', score: 82 },
];

// 列出没及格的同学
function getFailedStudents(allStudents) {
  return allStudents.filter((stu) => stu.score < 60);
}

console.log(getFailedStudents(students));

// 排名
function sortAllStudents(allStudents) {
  return allStudents.sort((a, b) => b.score - a.score);
}
console.log(sortAllStudents(students));

// 总分
function getScoreSum(allStudents) {
  let sum = 0;
  for (let index = 0; index < allStudents.length; index++) {
    const student = allStudents[index];
    sum += student.score;
  }
  return sum;
}

function getScoreSumReduce(allStudents) {
  return allStudents.reduce((acc, cur) => acc + cur.score, 0);
}

console.log(getScoreSum(students));
console.log(getScoreSumReduce(students));

// 统一修改成绩 返回所有的学生
function changeScore(allStudents, scoreChange) {
  return allStudents.map((stu) => ({ ...stu, score: stu.score + scoreChange }));
}
console.log(changeScore(students, 100));

// 不会返回新的array
function changeScoreForEach(allStudents, scoreChange) {
  return allStudents.forEach((stu) => console.log(stu));
}
console.log(changeScoreForEach(students, 100));

// 查找某个同学
function findScore(allStudents, name) {
  return allStudents.find((stu) => stu.name === name);
}
console.log(findScore(students, '小吴'));

// 求及格了的同学的平均分
/**
 * 1. filter -> 所有及格的同学
 * 2. reduce -> 计算总分
 * 3. 平均分
 */

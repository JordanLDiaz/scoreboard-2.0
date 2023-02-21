// DATA
let studentScore = 0
let teacherScore = 0

// TEACHER FUNCTIONS
function addTeachPoints() {
  console.log('teach points added')
  teacherScore += 1
  drawPoints()
}

function addTeachPoints3() {
  console.log('teach points added')
  teacherScore += 3
  drawPoints()
}

function subtractTeachPoints() {
  console.log('teach points subtracted')
  teacherScore -= 1
  drawPoints()
}

function subtractTeachPoints3() {
  console.log('teach points subtracted')
  teacherScore -= 3
  drawPoints()
}

// STUDENT FUNCTIONS
function addStudentPoints() {
  console.log('Student points added')
  studentScore += 1
  drawPoints()
}

function addStudentPoints3() {
  console.log('Student points added')
  studentScore += 3
  drawPoints()
}

function subtractStudentPoints() {
  console.log('Student points subtracted')
  studentScore -= 1
  drawPoints()
}

function subtractStudentPoints3() {
  console.log('Student points subtracted')
  studentScore -= 3
  drawPoints()
}

function resetPoints() {
  console.log('Resetting points')
  studentScore = 0
  teacherScore = 0
  drawPoints()
}

function drawPoints() {
  document.getElementById('teacher-score').innerText = teacherScore.toString()
  document.getElementById('student-score').innerText = studentScore.toString()
}
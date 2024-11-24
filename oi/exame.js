class Exam{
    constructor(wight, answers){
        this.wight=wight
        this.answers=answers
        this.exams=[]
    }
    add(exam) {
        exam.grade = Object.keys(exam.values).reduce((total, q) => {
          return total + (exam.values[q] === this.answer[q] ? this.weight[q] || 0 : 0);
        }, 0);
    
        this.exams.push(exam);
    }        
    avg(){
      if (this.exams.length === 0) {
        return 0; 
    }
    let sum = this.exams.reduce((total, exam) => total + exam.grade, 0);
    return sum / this.exams.length;
    }
  
    min(count = 1) {
        const grades = this.exams.map((exam) => exam.grade);
        let minGrade = Infinity;
        for (let grade of grades) {
            if (grade < minGrade) {
                minGrade = grade;
            }
        }
        return [minGrade];
    }

    max(count = 1) {
        const grades = this.exams.map((exam) => exam.grade);
        let minGrade = Infinity;
        for (let grade of grades) {
            if (grade < minGrade) {
                minGrade = grade;
            }
        }
        return [minGrade];
      }
      
    lt(limit) {
      let grades = this.exams.map((answer) => answer.grade);
  
      grades.sort().reverse();
  
      return grades.filter((grade) => grade < limit);
    }
  
    gt(limit) {
      let grades = this.exams.map((answer) => answer.grade);
  
      grades.sort().reverse();
  
      return grades.filter((grade) => grade > limit);
    }
}

const weight = { q1: 2, q2: 2, q3: 2, q4: 2, q5: 2 };

const answer = {
  person: 'Professor',
  values: { q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd' },
};

const exam = new Exam(answer, weight);

exam.add({
  student: 'Alice',
  values: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' },
});

console.log(exam.avg());
console.log(4);

console.log(exam.min());
console.log([4]);

console.log(exam.max());
console.log([4]);

console.log(exam.lt(7));
console.log([4]);

console.log(exam.gt(7));
console.log([]);

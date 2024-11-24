export class Exam{
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

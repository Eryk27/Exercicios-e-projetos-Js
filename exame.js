class Exam {
    constructor(weigth, answer){
        this.weigth = weigth
        this.answer = answer
        this.exams = []
    }
    add(exam){
        let total = 0
        for (let q in exam.values){
            total += (exam.values[q] === answer[q] ? (this.weight[q] || 0) : 0)
        }
        exam.grade = total
        this.exams.push(exam)
    }
    avg(){
        if (!this.exams.length){
            return 0
        }
         let sum = 0; for (let i = 0; i < this.exams.length; i++){
            sum += this.exams[i].grade
        }
        return sum / this.exams.length
    }
    min(count = 1){
        const grades = this.exams.map(exam => exam.grade)
        let minGrade = grades[0]
        for (let i = 1; i < grades.length; i++){
            if (grades[i] < minGrade){
                minGrade = grades[i]
            }
        }
        return
    }
    max(count = 1){
        const grades = this.exams.map(exam => exam.grade)
        let maxGrade = grades[0]
        for (let i = 1; i < grades.length; i++){
            if (grades[i] > maxGrade){
                maxGrade = grades[i]
            }
        }
        return [maxGrade];
    }
    lt(limit){
        let grades = this.exams.map((answer) => answer.grade)
        grades.sort().reverse()
        return grades.filter((grade) => grade < limit)
    }
    gt(limit){
        let grades = this.exams.map((answer) => answer.grade)
        grades.sort().reverse()
        return grades.filter((grade) => grade > limit)
    }
}
// Дізнатись суму всіх зарплат користувачів:
//     Об'єкт може містити невідому кількість департаментів та співробітників

const company = {
    sales: [
        {
            name: "John",
            salary: 1000
        },
        {
            name: "Alice",
            salary: 600
        }
    ],
    development: {
        web: [
            {
                name: "Peter",
                salary: 2000
            },
            {
                name: "Alex",
                salary: 1000
            }
        ],
        internals: [
            {
                name: "Jack",
                salary: 1300
            }
        ]
    }
}
function totalSalary (salary1){
    if(Array.isArray(salary1)){
        let sum = 0;
        for (let i = 0; i < salary1.length; i++){
            sum += salary1[i].salary
        }
        return sum;
    } else {
         let sum2 = 0;
        let groups = Object.values(salary1);
        for(let i = 0; i < groups.length; i++){
            sum2 += totalSalary(groups[i])
        }
        return sum2
    }
}
console.log(
    totalSalary(company)
)
let course:string = "Hello darkness!"

console.log(course)

let printNum = (start:number, end:number): void => {

    let temp:string='';

    if (start < end) {
        for (let i:number = start; i<=end; i++ ) {
            temp += `${i} `
        }
        console.log(temp)
    }
}

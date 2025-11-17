let a =  ["50", "hello", false, null, "100px"]

for (let i of a) {
    let s = `The value is ${i} and its type is ${typeof i} changed to number is ${Number(i)} , Boolean is ${Boolean(i)} and String is ${String(i)}`
    console.log(s)

}

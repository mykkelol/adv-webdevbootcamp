// To utilize template string, we have to use backtick (`)
// template string accomplishes two things 1) make concantenation easier 2) make new line in strings easiser


    // 1) Concat
    var fname = "Micheal";
    var lname = "Sihavong";
    var car = "2007 Volkswagen Jetta";
    
    var str = `${fname} ${lname} drives a ${car}`
    
    // 2) String with new lines
    var longStr =
        `
        ${fname}
        ${lname}
        drives
        a
        ${car}
        `
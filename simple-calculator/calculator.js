exports.calculate = (req, res) => {
    const {firstNumber} = req.body;
    const {operation} = req.body;
    const {secondNumber} = req.body;
    const result = calculateFn(parseFloat(firstNumber), String(operation), parseInt(secondNumber));
    
    res.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset=\"utf-8\"/>
                <title>Calculator Web Site</title>
                <style>
                    h2{
                        font-size: 42px;
                        text-align: center;
                    }
                    p{
                        font-size: 22px;
                        font-weight: bold;
                        text-align: center;
                    }
                    a{
                        text-decoration: none;
                        border: 1px solid black;
                        border-radius: 5px;
                        padding: 5px;
                    }
                    a:hover{
                        background-color: yellow;
                        border: 3px solid black;
                    }
                </style>
            </head>
            <body>
                <h2>The answer is: ${result}</h2>
                <br><br><br>
                <p><a href="/">Another calculation</a></p>
            </body>
        </html> ` 
    ); 
    res.end();
}

function calculateFn(first, op, second) {
    let result = 0;    
        switch (op) {
            case "add":
                 result = first + second;
                break;
            case "subtract":
                 result = first - second;
                break;
            case "multiply":
                 result = first * second;
                break;
            case "divide":
                if(second == 0) {
                    result = 0;
                } else {
                    result = first / second;
                }
                break;
            default:
                break;
        }
    return result;
}
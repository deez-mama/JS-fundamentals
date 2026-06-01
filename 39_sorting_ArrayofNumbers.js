
let grades = [100,50,90,60,70];

grades=grades.sort(desSort);
grades.forEach(display);
grades=grades.sort(ascSort);
grades.forEach(display);

function desSort(x,y){
    return y-x;
}

function ascSort(x,y){
    return x-y;
}

function display(element){
    console.log(element);
}

/* Logic reasoning by claude: 

How .sort() works under the hood
.sort() repeatedly picks two elements from the array and passes them to your callback as x and y. 
Based on what your function returns, it decides their order:

Negative number → x comes before y (x stays left)
Positive number → y comes before x (x moves right)
Zero → order doesn't change


Ascending sort x - y
Say it picks 50 and 100:
x=50, y=100
x - y = 50 - 100 = -50 (negative)
→ x stays before y → 50, 100 ✅ smaller first
A negative result always means "x is smaller, keep it left" — so you naturally get smallest to largest.

Descending sort y - x
Same pair 50 and 100:
x=50, y=100
y - x = 100 - 50 = 50 (positive)
→ y comes before x → 100, 50 ✅ larger first
Just by flipping the subtraction, you flip who wins the comparison.

The core insight
The subtraction trick works because the sign of the result is all .sort() cares about. 
You're essentially telling it "who's bigger" through whether the number comes back negative or positive.
x - y naturally produces a negative when x is smaller, positive when x is larger — which maps perfectly onto the sorting logic.

*/
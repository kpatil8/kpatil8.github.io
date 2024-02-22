function test_script(){
    alert("this script is working.");
}

function find_polygon(){
    let user_input = document.getElementById("favorite_number").value;
    let number = Math.abs(Math.round(parseFloat(user_input)));
    if (number >= 0 && number <=10){
        const polygons=[
        "Too few sides to be a Polygon",
        "Monogon",
        "Digon",
        "Triangle",
        "Quadrilateral",
        "Pentagon",
        "Hexagon",
        "Heptagon",
        "Octagon",
        "Nonagon",
        "Decagon"
        ];
        let polygon_name = polygons[number]
        alert("The polygon with " + number + " sides is called a " + polygon_name);
    } else{
        alert("Please enter a number between 0 and 10");
    }
}

function display_name(){
    let x = document.getElementById("name").value;
    let y = document.getElementById("emotion").value;
    document.getElementById("display_nameemotion").innerHTML= "Hello " + x + "! You're feeling " + y + ".";
}

function find_speed(){
    let speeds = ["50 mph", "60mph", "80mph", "100mph", "9000mph, WOW"];
    let random_speed = speeds[Math.floor(Math.random() * speeds.length)];
    alert("Your panther runs at " + random_speed + "!");
}
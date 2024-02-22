
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

function track_steps(){
    let step_count = ["10000", "20000", "30000", "40000", "100000", "200000"]
    let random_steps = step_count[Math.floor(Math.random() * step_count.length)];
    alert("Your panther has gotten " + random_steps + " steps today!");
}

function server_status(){
    let status_list = ["Online", "Offline", "Under Maintinence", "Under Heavy Load", "Experiencing Intermittent Connection", "Experiencing Packet Loss!"]
    let random_status = status_list[Math.floor(Math.random() * status_list.length)];
    alert("The Intellipanther Servers are currently " + random_status);
}

function calculate_cost(){
    let space = document.getElementById("storage_space").value;
    alert("The cost of your personal server with " + space + " terabytes of storage will cost $" + (space * 150 + 1000));
}

function display_date(){
    let current_day = new Date();
    let weekday = current_day.toLocaleDateString('en-US', {weekday: 'long'});
    let time = current_day.toLocaleTimeString('en-US', {hour: 'numeric', minute: "numeric", hour12: true });
    let date = current_day.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
    document.getElementById("display_date").textContent = "It is " + time + " on " + weekday + ", " + date;
}

document.addEventListener("DOMContentLoaded", function() {
    display_date();
});
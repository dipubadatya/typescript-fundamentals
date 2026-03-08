// Arrays with strict types
var numbers = [10, 20, 30, 40];
var users = ["Aman", "Rahul", "Sita"];
numbers.push(50);
users.forEach(function (user) {
    console.log(user.toUpperCase());
});

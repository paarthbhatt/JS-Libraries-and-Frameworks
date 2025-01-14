let users = [
    {id:1, name: 'John', age:30},
    {id:2, name: 'Jane', age:22},
    {id:3, name: 'Doe', age:40}
];
function findUserById(users, id){
    return users.find(user => user.id === id);
}
console.log(findUserById(users, 2));

// 

let calculator = {
    numbers:[],
    add: function(num){
        this.numbers.push(num);
    },
    sum:function(){
        return this.numbers.reduce((a,b) => a+b);
    }
}
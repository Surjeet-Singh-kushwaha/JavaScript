let a = 5; // binary representation: 0101
let b = 3; // binary representation: 0011

console.log(a& b);  // Bitwise AND: 0001 (1 in decimal)
console.log(a | b);  // Bitwise OR: 0111 (7 in decimal)
console.log(a ^ b);  // Bitwise XOR: 0110 (6 in decimal)
console.log(~a);     // Bitwise NOT: 11111111111111111111111111111010 (-6 in decimal)
console.log(a << 1); // Left shift: 1010 (10 in decimal)
console.log(a >> 1); // Right shift: 0010 (2 in decimal)
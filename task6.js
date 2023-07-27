// Task 6: 
// Create a program that generates a random password of a specified length. 
// The password should include a mix of:
// ************** uppercase letters, 
// ************** lowercase letters, 
// ************** numbers, 
// ************** special characters.

const generateRandomPassword = length => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_+=<>?';

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}

// Example: Generate a random password of length 12
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

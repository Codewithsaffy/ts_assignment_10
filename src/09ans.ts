// Random Password Generator: Develop a function to generate a random password of a specified length, including a mix of uppercase letters, lowercase letters, numbers, and special characters.

function rno() {
    return Math.floor((Math.random() * 89));
}
function randomPassword(): void {
    let alc: string | string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|<>?-=[]/';
    alc = alc.split('');
    let password: string = alc[rno()] + alc[rno()] + alc[rno()] + alc[rno()] + alc[rno()] + alc[rno()] + alc[rno()] + alc[rno()] + alc[rno()] + alc[rno()] + alc[rno()];
    console.log(password);
}

randomPassword()
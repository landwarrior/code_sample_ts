function writeTSMessage(mes:string) {
    console.log(mes);
}
writeTSMessage('テスト');
// writeTSMessage(2);

function writeGenerics<T>(mes:T):void {
    console.log(mes);
}
writeGenerics<string>('テスト');
writeGenerics<number>(2);
writeGenerics(3);

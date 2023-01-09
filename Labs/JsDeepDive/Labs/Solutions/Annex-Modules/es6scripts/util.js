export default class Util {
    static pad(n) {
        return (n < 10) ? (`0${n}`) : n;
    }
}

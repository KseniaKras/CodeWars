//8 kyu
//What's the real floor?

function getRealFloor(n) {
    if (n > 0 && n <= 13) {
        return n -= 1;
    } else if (n > 13) {
        return n -= 2;
    } else {
        return n
    }
}
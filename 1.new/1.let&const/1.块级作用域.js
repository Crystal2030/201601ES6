/**
 * Created by crystal on 4/15/16.
 */
for (var i = 0 ; i < 3; i++) {
    ;(function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000)
    })(i);

}

for (let i = 0 ; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}
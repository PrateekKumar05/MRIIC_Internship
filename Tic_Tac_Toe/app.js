var y = 1;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var game_result = false;
function update(x) {
    console.log(x);
    if (y % 2 == 0) {
        console.log("even");
        document.getElementById(x).innerHTML = "X";
        document.getElementById(x).disabled = true;
        value_update(x);
        check_result();
    }
    else {
        console.log("odd");
        document.getElementById(x).innerHTML = 0;
        document.getElementById(x).disabled = true;
        value_update(x);
        check_result();
    }
    y++;

}

function value_update(m) {
    if (y % 2 == 1) {
        if (m == 1) {
            a = 1;
            console.log("a", a);
        }
        else if (m == 2) {
            b = 1;
            console.log("b", b);
        }
        else if (m == 3) {
            c = 1;
            console.log("c", c);
        }
        else if (m == 4) {
            d = 1;
            console.log("d", d);
        }
        else if (m == 5) {
            e = 1;
            console.log("e", e);
        }
        else if (m == 6) {
            f = 1;
            console.log("f", f);
        }
        else if (m == 7) {
            g = 1;
            console.log("g", g);
        }
        else if (m == 8) {
            h = 1;
            console.log("h", h);
        }
        else if (m == 9) {
            i = 1;
            console.log("i", i);
        }
    }
    else {
        if (m == 1) {
            a = 2;
            console.log("a", a);
        }
        else if (m == 2) {
            b = 2;
            console.log("b", b);
        }
        else if (m == 3) {
            c = 2;
            console.log("c", c);
        }
        else if (m == 4) {
            d = 2;
            console.log("d", d);
        }
        else if (m == 5) {
            e = 2;
            console.log("e", e);
        }
        else if (m == 6) {
            f = 2;
            console.log("f", f);
        }
        else if (m == 7) {
            g = 2;
            console.log("g", g);
        }
        else if (m == 8) {
            h = 2;
            console.log("h", h);
        }
        else if (m == 9) {
            i = 2;
            console.log("i", i);
        }
    }
}
function check_result() {
    if (a == b && b == c && c == a && a != 0 && b != 0 && c != 0) {
        game_result = true;
        declare_winner(a);
    }
    else if (d == e && e == f && f == d && d != 0 && e != 0 && f != 0) {
        game_result = true;
        declare_winner(d);
    }
    else if (g == h && h == i && i == g && g != 0 && h != 0 && i != 0) {
        game_result = true;
        declare_winner(g);
    }
    else if (a == d && d == g && g == a && a != 0 && d != 0 && g != 0) {
        game_result = true;
        declare_winner(a);
    }
    else if (b == e && e == h && h == b && b != 0 && e != 0 && h != 0) {
        game_result = true;
        declare_winner(b);
    }
    else if (c == f && f == i && i == c && c != 0 && f != 0 && i != 0) {
        game_result = true;
        declare_winner(c);
    }
    else if (a == e && e == i && i == a && a != 0 && e != 0 && i != 0) {
        game_result = true;
        declare_winner(a);
    }
    else if (c == e && e == g && g == c && c != 0 && e != 0 && g != 0) {
        game_result = true;
        declare_winner(c);
    }
    else if (game_result == false && y == 9) {
        document.getElementById("final_result").innerHTML = "<h1>" + "MATCH TIE" + "</h1>";
        document.getElementById("final_result").className = "alert alert-primary mt-4";

    }

}


function declare_winner(z) {
    if (game_result == true) {
        if (z == 1) {
            console.log("winner is zero");
            document.getElementById("final_result").innerHTML = "<h1>" + "winner is zero" + "</h1>";
            document.getElementById("final_result").className = "alert alert-primary mt-4";
            disable_buttons();
            var audio = document.getElementById('win');
            audio.play();


        }
        if (z == 2) {
            console.log("winner is kaata");
            document.getElementById("final_result").innerHTML = "<h1>" + "winner is kaata" + "</h1>";
            document.getElementById("final_result").className = "alert alert-primary mt-4";
            disable_buttons();
            var audio = document.getElementById('win');
            audio.play();

        }
    }
}

function disable_buttons() {
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
}


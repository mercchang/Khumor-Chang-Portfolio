/*          MATH EXERCISE           */
$("#Sumbtn").click(function () {
    var num1 = +$("#num1").val();
    var num2 = +$("#num2").val();
    var num3 = +$("#num3").val();
    var num4 = +$("#num4").val();
    var num5 = +$("#num5").val();
    var sum, product, output, mean, largest, smallest;

    // smallest number
    smallest = Math.min(num1, num2, num3, num4, num5);
    //largest number
    largest = Math.max(num1, num2, num3, num4, num5);
    //mean
    mean = (num1 + num2 + num3 + num4 + num5) / 5;
    //sum
    sum = num1 + num2 + num3 + num4 + num5;
    //product
    product = num1 * num2 * num3 * num4 * num5;

    output = "small: " + smallest + ", large: " + largest + ", sum: " + sum + ", product: " + product + ", mean: " + mean;

    $("#result").text(output);
});

/*          FACTORIAL           */
$("#factbtn").click(function () {
    var fnum = +$("#nfact").val();
    var fact = 1;

    for (let i = 1; i <= fnum; i++) {
        fact *= i;
    }

    $("#res").text(fact);
});

/*          FIZZ BUZZ           */
$("#fbuzzbtn").click(function () {
    let fbArray = new Array();

    var fb1 = +$("#fbuzz1").val();
    var fb2 = +$("#fbuzz2").val();
    var fizz = 0, buzz = 0;

    for (let i = 1; i <= 100; i++) {
        fizz = i % fb1;
        buzz = i % fb2;
        if (fizz == 0 && buzz == 0) {
            fbArray.push("Fizz-Buzz");
        }
        else if (fizz == 0) {
            fbArray.push("Fizz");
        }
        else if (buzz == 0) {
            fbArray.push("Buzz");
        }
        else {
            fbArray.push(` ${i}`);
        }

        fbArray.join(',');
    }
    $("#fbresult").text(fbArray);

});

/*          NUMBERS ONLY           */
$("#fbuzz1, #fbuzz2, #factbtn, #Sumbtn").keypress(function (e) {
    if (! (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
        return false;
    }
});

/*          PALINDROME           */
$("#palbtn").click(function () {
    var pal = $("#palinput").val();
    var result;

    let wordArray = pal.split('');          // converts to array
    let revArray = wordArray.reverse('');   // reverses word
    result = revArray.join('');             // stores reversed word into string

    if (pal === result) {                   // compare reversed string to original
        $("#resultpal").text(pal + " is a palindrome!");
    } else {
        $("#resultpal").text(pal + " is not a palindrome.");
    }
    
});

/*          CLEAR MATH BUTTON          */
$("#clearmath").click(function () {
    $("#num1").val("");
    $("#num2").val("");
    $("#num3").val("");
    $("#num4").val("");
    $("#num5").val("");
    $("#result").text("");
    $("#nfact").val("");
    $("#res").text("");
});

/*          CLEAR FACTORIAL BUTTON          */
$("#clearfact").click(function () {
    $("#nfact").val("");
    $("#res").text("");
});

/*          CLEAR FIZZBUZZ BUTTON          */
$("#clearfb").click(function () {
    $("#fbuzz1").val("");
    $("#fbuzz2").val("");
    $("#fbresult").text("");
});

/*          CLEAR PALINDROME BUTTON          */
$("#clearpal").click(function () {
    $("#palinput").val("");
    $("#resultpal").text("");
});

//SMTP JS - for emails
$("#emailsubmit").click(function () {
    Email.send({
        SecureToken: "ba25689c-f0aa-4486-b386-11e87131022b",
        To: 'mercchang@gmail.com',
        From: $("#fromEmail").val(),
        Subject: $("#emailSubject").val(),
        Body: "<h6>From: " + $("#name").val() + ",</h6>" + "<br />" + $("#emailMsg").val()
    }).then(
        $("#sendmessage").addClass("show")
);
});


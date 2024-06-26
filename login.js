
'use strict';

const formSecure=document.getElementById('login-form');
const verifyOTP=document.getElementById('verify-otp');
const email=document.getElementById('email-value');

formSecure.addEventListener("click",function(event){
        event.preventDefault();
});

function sendOTP(){
        document.getElementById('form-inputs-1').style.display="block";
        document.getElementById('send-otp').style.display="none";
        document.getElementById('request-again').style.display="block";

        const otpInputs=document.getElementsByClassName('otp-inputs')[0];

        let OTPnumber = Math.floor(Math.random()*12345);
        let OTPNumber1=OTPnumber+2002;
        console.log(OTPNumber1);
        let emailBody = `<h2>Your Dolife login  OTP is</h2> ${OTPNumber1}`;

        Email.send({
                Host: "smtp.elasticemail.com",
                Username: "prasanthramamoorthy7@gmail.com",
                Password: "529F0845F35247E745378C060CDB266AB06B",
                To: email.value,
                From: "prasanthramamoorthy7@gmail.com",
                Subject: "Dolife Website",
                Body: emailBody,
        }).then((message) =>{
                if(message==="OK"){
                        alert("Your OTP is send to your email" +" "+ email.value);
                }
        });
        const inputOTPNumber=document.getElementById('otp-1')
        verifyOTP.addEventListener("click",function(){
                if ( inputOTPNumber.value == OTPNumber1) {
                        alert("Email verified successfully")
                }
                else{
                alert("Invalid OTP");
                };
        });
};

function requestAgain(){
        document.getElementById('send-otp').style.display="none";
        let OTPnumber = Math.floor(Math.random()*12345);
        console.log(OTPnumber);
        let OTPNumber1=OTPnumber+2002;
        let emailBody = `<h2>Your Dolife login  OTP is</h2> ${OTPNumber1}`;

        Email.send({
                Host: "smtp.elasticemail.com",
                Username: "prasanthramamoorthy7@gmail.com",
                Password: "529F0845F35247E745378C060CDB266AB06B",
                To: email.value,
                From: "prasanthramamoorthy7@gmail.com",
                Subject: "Dolife Website",
                Body: emailBody,
        }).then((message) =>{
                if(message==="OK"){
                        alert("Your OTP is send to your email" +" "+ email.value);
                }
        });
        const inputOTPNumbers=document.getElementById('otp-1')
        verifyOTP.addEventListener("click",function(){
                if ( inputOTPNumbers.value == OTPNumber1) {
                        alert("Email verified successfully");
                        window.open("https://jegathees07.github.io/blood-bank-dolife/");
                }
                else{
                        alert("Invalid OTP");
                }
        });
};

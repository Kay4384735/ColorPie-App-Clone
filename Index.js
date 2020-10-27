/*🔥Created by Kay🔥*/
/*
  🔥Coded by: Coder_Kay.
    Date of submission: 11-Oct-2020
    Day of Submission: Saturday
    ❌ Don't copy(❌) without permission
    Owner is Coder_Kay
    Everything is made manually 😌
    Made with alot of love 😍 & Delicate hands 🤗
    Hope you like it!!🔥
*/
function CopyTextFromVariable(txt){
//Save coming txt to variable
    let TheTxt = txt;
//text input
    let MyData = document.createElement("textarea");
    document.body.appendChild(MyData);
//give text input value the coming text
    MyData.value = txt;
//Select Text Befor Copy
    MyData.select();
//Copy Command
    document.execCommand("copy");
//Remove text input after copy
    document.body.removeChild(MyData);
}
//Audio of Tap to Copy
    let TaptoCopy = new Audio();
    TaptoCopy.src = 'https://www.mboxdrive.com/tap_denoised.MP.mp3';
//Audio of Copied Sucessfully
    let CopiedSucessfully = new Audio();         
    CopiedSucessfully.src = 'https://www.mboxdrive.com/copied1_denoised.MP.mp3';
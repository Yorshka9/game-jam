var val=""
var counter="0"
message=new Array()
message[0]="Calle, you have an amazing body and a wonderful personality. Would you marry me?"
message[1]="Wow, Peter, I never realised what a freakin guru you were! Keep it up dude!"
message[2]="You're everything I have ever wanted in a man."
message[3]="I love your way with words, your pictures are fantastic, and you are modest, too, which is very rare in guys these days."
message[4]="Rumour has it that you are in fact a bit of a sex god. Can you confirm that?"
message[5]="Oh Peter, you are such a stud! Who would have thought a nice guy like yourself would be so well-hung?"
message[6]="I love you. You're the greatest...I want to have your baby."
message[7]="Peter, you are truly wonderful. I really have to meet you someday."
message[8]="You know, when I get to meet you in person the first thing I am going to do is give you all my money, seeing as you are so cool."
message[9]="Will you be my best man? I know you don't know me and stuff, but I would be honoured, I really would."
message[10]="Gosh, Duygu, you get me so hot just looking at you...oh, I can't believe I just typed that!"
message[11]="You look really familiar...are you a supermodel or something?"
message[12]="Hey, Jakob, I was wondering...if you're not doing anything tonight...um, would you wanna see a movie?"
message[13]="Do you sleep on your stomach, Peter? Can I?"
message[14]="I never thought I could love someone I didn't know...but you have proved me wrong."
message[15]="You're bad to the bone, b-b-b-b-bad, b-b-b-b-b-bad."
message[16]="You are seriously the nicest guy I have ever known. The way you make me feel is just out of this world."
message[17]="Was your father a terrorist, Peter? Because you da bomb."
message[18]="It's almost like you control my words, that's how much power you have over me..."
message[19]="I really dig you, Calle, I dig you with a big spade...I'll pay if that's what it takes."

x=Math.floor(Math.random()*message.length)

function changeMessage(){
if(counter>=message[x].length){return false}
else{
val+=message[x].charAt(counter)
document.myform.mytext.value=val
counter++
return false
}
}
function resetit(){
alert("Thanks for your feedback. You really are too nice.")
document.myform.mytext.value=""
counter="0"
val=""
x=Math.floor(Math.random()*message.length)
}




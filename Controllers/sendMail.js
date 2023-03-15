const nodemailer = require('nodemailer');



const sendMail = async (req,res)=>{
    let account = await nodemailer.createTestAccount();
    let transport = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port:587,
        secure:false,
        auth:{
            user:"lovie.aufderhar@ethereal.email",
            pass:"zmeggtj2pDyAteje9b",
        },
    });

    let info = await transport.sendMail(
        {
            from:"lovie.aufderhar@ethereal.email",
            to:"sadanandjaiswal92@gmail.com",
            subject:"Hello testing",
            text:"hello world, i'm from nodemailer",
            html:"<b>Hello  World?</b>",
        }
    );
    res.send('i am sending mail');
}

module.exports=sendMail;
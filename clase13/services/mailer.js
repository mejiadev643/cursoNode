import nodemailer from 'nodemailer';
import url from "url"
import dotenv from 'dotenv'
dotenv.config({Path:"../.ENV"})
import {newToken, verify} from './token.js'


const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure: true,
        auth:{
            user:"cristianmejia643@gmail.com",
            pass: process.env.PasswordGmail,
        }

}) 
    export const sendVerificationEmail = (user) => { 
        const token  = newToken(user._id);
        const link = `localhost:8080/auth/verify/?token=${token}`
        sendEmail(user.email, "Email Verification", `{
            Muchas gracias por registrarte
            verifica tu email aqui ${link}
        }`);
    }


    const sendEmail = (toEmail, subject, body) => {
        const options = {
            from:"asdasd",
            to: toEmail,
            subject:subject,
            text:body
        }
    
        transporter.sendMail(options).then(res =>{
            console.log("Email sent");
        })
        .catch(err => {
            console.log(err)
        })
    }
sendEmail("darkmejia643@gmail.com","Hello mail","asasdsadasd")


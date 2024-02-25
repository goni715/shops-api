require('dotenv').config();
const nodemailer = require('nodemailer');

const SendEmailUtility= async (req, res) => {


    try{

        const email = req.body['email'];
        const name = req.body['name'];
        const message = req.body['message'];



        //transporter
        let transporter = await nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD
            },
        })

	
	
       let mailOptions = {
           from:process.env.SMTP_USERNAME, //sender email address
           to: email, //receiver email address
           subject: "MERN E-commerce App",
           html: ` 
             <h5>Detail Information</h5>
             <ul>
             <li><p>Name : ${name}</p></li>
             <li><p>Email : ${email}</p></li>
             <li><p>Message : ${message}</p></li>
             </ul>`
       };


	    const result = await transporter.sendMail(mailOptions);
        res.status(200).json({message:"success", data:result});
	}
	catch(e){
        res.status(500).json({message:"fail", data:e.toString()});
	}

}
module.exports=SendEmailUtility

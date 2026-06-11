import nodemailer from 'nodemailer';

// Configure your email service (Gmail example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password',
  },
});

export const sendBookingConfirmation = async (
  email: string,
  name: string,
  date: string,
  time: string,
  service: string,
  city: string
) => {
  const mailOptions = {
    from: process.env.EMAIL_USER || 'your-email@gmail.com',
    to: email,
    subject: '✨ Your Car Wash Booking Confirmed - CarWash Pro',
    html: `
      <div style="background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%); color: #e0e0e0; padding: 20px; font-family: Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: #1a1a1a; border: 2px solid #D4AF37; border-radius: 10px; padding: 30px;">
          <h2 style="color: #D4AF37; text-align: center; margin-bottom: 20px;">🚗 Booking Confirmed!</h2>
          
          <p style="font-size: 16px; margin-bottom: 20px;">Hi <strong>${name}</strong>,</p>
          
          <p style="margin-bottom: 20px;">Your car wash booking has been confirmed. Here are your details:</p>
          
          <div style="background: #2a2a2a; border-left: 4px solid #D4AF37; padding: 15px; margin: 20px 0; border-radius: 5px;">
            <p style="margin: 10px 0;"><strong style="color: #D4AF37;">Service:</strong> ${service}</p>
            <p style="margin: 10px 0;"><strong style="color: #D4AF37;">Date:</strong> ${date}</p>
            <p style="margin: 10px 0;"><strong style="color: #D4AF37;">Time:</strong> ${time}</p>
            <p style="margin: 10px 0;"><strong style="color: #D4AF37;">Location:</strong> ${city}</p>
          </div>
          
          <p style="margin-bottom: 20px;">Please arrive 10 minutes before your scheduled time. If you need to reschedule, please contact us as soon as possible.</p>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #D4AF37; font-weight: bold;">Thank you for choosing CarWash Pro!</p>
          </div>
          
          <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">CarWash Pro | Professional Car Washing Services</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Booking confirmation sent to:', email);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const sendSlotBookedNotification = async (
  email: string,
  date: string,
  time: string,
  city: string
) => {
  const mailOptions = {
    from: process.env.EMAIL_USER || 'your-email@gmail.com',
    to: email,
    subject: '⏰ Slot Unavailable - CarWash Pro',
    html: `
      <div style="background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%); color: #e0e0e0; padding: 20px; font-family: Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: #1a1a1a; border: 2px solid #D4AF37; border-radius: 10px; padding: 30px;">
          <h2 style="color: #D4AF37; text-align: center;">⏰ Slot Already Booked</h2>
          <p style="margin-top: 20px;">The time slot you requested is no longer available:</p>
          <p style="background: #2a2a2a; padding: 15px; border-left: 4px solid #D4AF37; margin: 20px 0;">
            <strong style="color: #D4AF37;">${date}</strong> at <strong style="color: #D4AF37;">${time}</strong> in <strong style="color: #D4AF37;">${city}</strong>
          </p>
          <p>Please select another available time slot to complete your booking.</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending slot notification:', error);
  }
};

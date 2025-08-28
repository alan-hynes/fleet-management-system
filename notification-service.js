const nodemailer = require('nodemailer');

class NotificationService {
  constructor() {
    // Simple console logging for now (no email setup required)
    this.enabled = process.env.EMAIL_USER && process.env.EMAIL_USER !== 'your-gmail@gmail.com';
  }

  async sendViolationAlert(violation) {
    const message = `FLEET ALERT: Vehicle ${violation.vehicleId} ${violation.violationType} ${violation.geofenceName} at ${new Date(violation.timestamp).toLocaleString()}`;
    
    if (this.enabled) {
      // Email functionality would go here
      console.log('Would send email:', message);
    } else {
      console.log('Geofence Violation Alert:', message);
    }
  }
}

module.exports = NotificationService;

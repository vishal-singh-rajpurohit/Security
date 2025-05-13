const verificationTemplate = (refreshToken) => {
  return `<body style="margin:0; padding:0; background-color:#f0f2f5; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f2f5; padding:40px 0;">
    <tr>
      <td align="center">

        <!-- Card Container -->
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:500px; background-color:#ffffff; border-radius:12px; padding:40px 30px; box-shadow:0 10px 30px rgba(0,0,0,0.1); text-align:center;">
          
          <!-- Logo -->
          <tr>
            <td style="padding-bottom:25px;">
              <img src="https://img.icons8.com/?size=100&id=38388&format=png&color=000000" alt="Wings Lens Logo" width="100" height="100" style="border-radius:50%; display:block; margin:0 auto; background-color:#e0e7ff;">
            </td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="font-size:24px; font-weight:600; color:#222222; padding-bottom:15px;">
              Verify Your Account to Continue
            </td>
          </tr>

          <!-- Paragraph -->
          <tr>
            <td style="font-size:16px; color:#555555; line-height:1.5; padding:0 10px 30px;">
              By clicking the button below, your account will be securely verified and you can continue using Wings Lens.
            </td>
          </tr>

          <!-- Button -->
          <tr>
            <td>
              <a href="http://localhost:3000/verify-account?token=${refreshToken}" style="background-color:#0066ff; color:#ffffff; padding:14px 28px; text-decoration:none; border-radius:8px; font-size:16px; font-weight:bold; display:inline-block; box-shadow:0 4px 10px rgba(0,102,255,0.3);">
                Verify
              </a>
            </td>
          </tr>

          <!-- Footer Spacing -->
          <tr>
            <td style="padding-top:30px; font-size:12px; color:#999999;">
              © 2025 Wings Lens. All rights reserved.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>`;
};

const orderVerificationTemplate = (orderId) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Confirm Your Order - Wings Lens</title>
  <style>
    /* Add responsiveness for mobile email clients */
    @media only screen and (max-width: 600px) {
      .email-container {
        width: 100% !important;
        padding: 10px !important;
      }
      .order-table th, .order-table td {
        font-size: 14px !important;
      }
      .verify-btn {
        width: 100% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f4f4f4">
    <tr>
      <td align="center">
        <table class="email-container" width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="margin: 20px auto; padding: 20px; border-radius: 8px;">
          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom: 20px;">
              <img src="https://via.placeholder.com/150x50?text=Wings+Lens" alt="Wings Lens Logo" style="max-width: 100%; height: auto;" />
            </td>
          </tr>

          <!-- Header -->
          <tr>
            <td align="center" style="padding: 10px 0; font-size: 24px; font-weight: bold; color: #333;">
              Confirm Your Order
            </td>
          </tr>

          <!-- Paragraphs -->
          <tr>
            <td style="padding: 10px 30px; font-size: 16px; color: #555;">
              It's just a security check.
            </td>
          </tr>
          <tr>
            <td style="padding: 0 30px 20px; font-size: 16px; color: #555;">
              By clicking the button below, your order will be confirmed.
            </td>
          </tr>

          <!-- Order Details Table -->
          <tr>
            <td style="padding: 0 30px;">
              <table class="order-table" width="100%" cellpadding="10" cellspacing="0" border="1" style="border-collapse: collapse; text-align: left; font-size: 16px; color: #333;">
                <tr style="background-color: #f0f0f0;">
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Delivery Location</th>
                </tr>
                <tr>
                  <td>Wireless CCTV Camera</td>
                  <td>2</td>
                  <td>$120</td>
                  <td>New York, NY</td>
                </tr>
                <!-- Add more rows as needed -->
              </table>
            </td>
          </tr>

          <!-- Button -->
          <tr>
            <td align="center" style="padding: 30px;">
              <a href="http://localhost:3000/verify-order?orderId=${orderId}" class="verify-btn" style="background-color: #007BFF; color: white; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-size: 16px;">
                Verify Order
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="font-size: 12px; color: #aaa; padding: 10px 30px;">
              &copy; 2025 Wings Lens. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};

const cancelOrderTemplate = (orderId) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cancel Your Order - Wings Lens</title>
  <style>
    @media only screen and (max-width: 600px) {
      .email-container {
        width: 100% !important;
        padding: 10px !important;
      }
      .order-table th, .order-table td {
        font-size: 14px !important;
      }
      .cancel-btn {
        width: 100% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f4f4f4">
    <tr>
      <td align="center">
        <table class="email-container" width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="margin: 20px auto; padding: 20px; border-radius: 8px;">
          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom: 20px;">
              <img src="https://via.placeholder.com/150x50?text=Wings+Lens" alt="Wings Lens Logo" style="max-width: 100%; height: auto;" />
            </td>
          </tr>

          <!-- Header -->
          <tr>
            <td align="center" style="padding: 10px 0; font-size: 24px; font-weight: bold; color: #c0392b;">
              Cancel Your Order
            </td>
          </tr>

          <!-- Paragraphs -->
          <tr>
            <td style="padding: 10px 30px; font-size: 16px; color: #555;">
              This is a security check to make sure you want to cancel your order.
            </td>
          </tr>
          <tr>
            <td style="padding: 0 30px 20px; font-size: 16px; color: #555;">
              By clicking the button below, your order will be canceled.
            </td>
          </tr>

          <!-- Order Details Table -->
          <tr>
            <td style="padding: 0 30px;">
              <table class="order-table" width="100%" cellpadding="10" cellspacing="0" border="1" style="border-collapse: collapse; text-align: left; font-size: 16px; color: #333;">
                <tr style="background-color: #f0f0f0;">
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Delivery Location</th>
                </tr>
                <tr>
                  <td>Wireless CCTV Camera</td>
                  <td>2</td>
                  <td>$120</td>
                  <td>New York, NY</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Button -->
          <tr>
            <td align="center" style="padding: 30px;">
              <a href="http://localhost:3000/verify-order?orderId=${orderId}" class="cancel-btn" style="background-color: #e74c3c; color: white; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-size: 16px;">
                Cancel Order
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="font-size: 12px; color: #aaa; padding: 10px 30px;">
              &copy; 2025 Wings Lens. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};

module.exports = {
  verificationTemplate,
  orderVerificationTemplate,
  cancelOrderTemplate,
};

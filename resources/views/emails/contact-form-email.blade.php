<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>New Contact Message</title>
</head>
<body style="background-color: #f6f9fc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
        <tr>
            <td align="center" style="padding: 40px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    <!-- Header -->
                    <tr>
                        <td style="background-color: #1a202c; padding: 40px; text-align: center;">
                            <h1 style="color: #ffffff; font-size: 24px; font-weight: 700; margin: 0; letter-spacing: -0.5px;">
                                New Inquiry Received
                            </h1>
                            <p style="color: #a0aec0; font-size: 14px; margin-top: 8px; margin-bottom: 0;">
                                DevLux Estate Website
                            </p>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding: 40px;">
                            <p style="color: #4a5568; font-size: 16px; line-height: 24px; margin-bottom: 24px;">
                                Hello Admin, <br>
                                You have received a new message through the website contact form. Here are the details:
                            </p>

                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 24px; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7; color: #718096; font-size: 14px; width: 120px;"><strong>Name:</strong></td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7; color: #2d3748; font-size: 14px;">{{ $user['name'] }}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7; color: #718096; font-size: 14px;"><strong>Email:</strong></td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7; color: #2d3748; font-size: 14px;">
                                        <a href="mailto:{{ $user['email'] }}" style="color: #3182ce; text-decoration: none;">{{ $user['email'] }}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7; color: #718096; font-size: 14px;"><strong>Subject:</strong></td>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7; color: #2d3748; font-size: 14px;">{{ $user['subject'] }}</td>
                                </tr>
                            </table>

                            <div style="background-color: #f7fafc; border-left: 4px solid #cbd5e0; padding: 20px; border-radius: 4px;">
                                <p style="color: #718096; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; margin-bottom: 10px; font-weight: bold;">
                                    Message Content
                                </p>
                                <p style="color: #2d3748; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-line;">
                                    {{ $user['message'] }}
                                </p>
                            </div>

                            <div style="margin-top: 40px; text-align: center;">
                                <a href="mailto:{{ $user['email'] }}" style="background-color: #3182ce; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block;">
                                    Reply to Sender
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #edf2f7;">
                            <p style="color: #a0aec0; font-size: 12px; margin: 0;">
                                This email was generated automatically by the DevLux Estate system.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
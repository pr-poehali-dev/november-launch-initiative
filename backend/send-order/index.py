import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта и отправляет уведомление на почту владельца."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    appliance = body.get('appliance', '').strip()
    problem = body.get('problem', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'}, ensure_ascii=False)
        }

    smtp_user = 'npytin88@gmail.com'
    smtp_password = os.environ['SMTP_PASSWORD']
    to_email = 'npytin88@gmail.com'

    subject = f'Новая заявка на ремонт — {name}'
    html_body = f"""
    <h2>Новая заявка с сайта МастерФикс</h2>
    <table style="border-collapse:collapse; width:100%; max-width:500px;">
      <tr><td style="padding:8px; font-weight:bold; background:#f5f5f5;">Имя</td><td style="padding:8px;">{name}</td></tr>
      <tr><td style="padding:8px; font-weight:bold; background:#f5f5f5;">Телефон</td><td style="padding:8px;"><a href="tel:{phone}">{phone}</a></td></tr>
      <tr><td style="padding:8px; font-weight:bold; background:#f5f5f5;">Техника</td><td style="padding:8px;">{appliance or 'не указано'}</td></tr>
      <tr><td style="padding:8px; font-weight:bold; background:#f5f5f5;">Проблема</td><td style="padding:8px;">{problem or 'не описана'}</td></tr>
    </table>
    <p style="color:#888; font-size:12px; margin-top:20px;">Заявка поступила с сайта МастерФикс</p>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = smtp_user
    msg['To'] = to_email
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
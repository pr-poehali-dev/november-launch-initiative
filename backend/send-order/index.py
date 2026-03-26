import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта и отправляет уведомление в Telegram владельцу."""

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
    address = body.get('address', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'}, ensure_ascii=False)
        }

    bot_token = '8512128260:AAGaYdFxHvlyf1Hpchflds92AYEi_tUOSRc'
    chat_id = '-5169249001'

    text = (
        f"🔧 *Новая заявка с сайта МастерФикс*\n\n"
        f"👤 *Имя:* {name}\n"
        f"📞 *Телефон:* {phone}\n"
        f"🏠 *Техника:* {appliance or 'не указано'}\n"
        f"📍 *Адрес:* {address or 'не указан'}\n"
        f"📝 *Проблема:* {problem or 'не описана'}"
    )

    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown'
    }).encode('utf-8')

    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
    urllib.request.urlopen(req)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }
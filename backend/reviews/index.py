"""Получение и добавление отзывов клиентов МастерФикс"""
import json
import os
import psycopg2


def get_conn():
    return psycopg2.connect(os.environ['DATABASE_URL'])


def handler(event: dict, context) -> dict:
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    method = event.get('httpMethod', 'GET')

    if method == 'GET':
        conn = get_conn()
        cur = conn.cursor()
        cur.execute("SELECT id, name, text, rating, created_at FROM reviews ORDER BY created_at DESC")
        rows = cur.fetchall()
        cur.close()
        conn.close()
        reviews = [
            {
                'id': r[0],
                'name': r[1],
                'text': r[2],
                'rating': r[3],
                'created_at': r[4].isoformat()
            }
            for r in rows
        ]
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'reviews': reviews}, ensure_ascii=False)
        }

    if method == 'POST':
        body = json.loads(event.get('body') or '{}')
        name = (body.get('name') or '').strip()
        text = (body.get('text') or '').strip()
        rating = int(body.get('rating') or 5)

        if not name or not text:
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Имя и текст обязательны'}, ensure_ascii=False)
            }

        if rating < 1 or rating > 5:
            rating = 5

        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO reviews (name, text, rating) VALUES (%s, %s, %s) RETURNING id, created_at",
            (name, text, rating)
        )
        row = cur.fetchone()
        conn.commit()
        cur.close()
        conn.close()

        return {
            'statusCode': 201,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({
                'id': row[0],
                'name': name,
                'text': text,
                'rating': rating,
                'created_at': row[1].isoformat()
            }, ensure_ascii=False)
        }

    return {
        'statusCode': 405,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': 'Method Not Allowed'
    }

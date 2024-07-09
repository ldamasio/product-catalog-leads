import boto3
from botocore.exceptions import NoCredentialsError, PartialCredentialsError

AWS_REGION = 'us-east-2'
ses_client = boto3.client('ses', region_name=AWS_REGION)

def send_admin_notification(user):
    SENDER = 'info@rbxrobotica.com.br'
    RECIPIENT = 'cromofinanciamentos@gmail.com'
    SUBJECT = 'Novo Usuário Registrado'
    BODY_TEXT = f'Um novo usuário foi registrado: {user.username} ({user.email})'
    BODY_HTML = f"""<html>
    <head></head>
    <body>
      <h1>Novo Usuário Registrado</h1>
      <p>Um novo usuário foi registrado: {user.username} ({user.email})</p>
    </body>
    </html>
    """
    CHARSET = 'UTF-8'

    print('Tentando enviar o seguinte email:')
    print(BODY_HTML)

    try:
        response = ses_client.send_email(
            Destination={
                'ToAddresses': [
                    RECIPIENT,
                ],
            },
            Message={
                'Body': {
                    'Html': {
                        'Charset': CHARSET,
                        'Data': BODY_HTML,
                    },
                    'Text': {
                        'Charset': CHARSET,
                        'Data': BODY_TEXT,
                    },
                },
                'Subject': {
                    'Charset': CHARSET,
                    'Data': SUBJECT,
                },
            },
            Source=SENDER,
        )
        print("Email enviado! Message ID:", response['MessageId'])
    except NoCredentialsError:
        print("Credenciais não encontradas.")
    except PartialCredentialsError:
        print("Credenciais incompletas.")
    except Exception as e:
        print("Erro ao enviar email:", str(e))

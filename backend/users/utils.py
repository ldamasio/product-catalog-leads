import boto3
from botocore.exceptions import NoCredentialsError, PartialCredentialsError
from .models import CustomUser, Detalhes

AWS_REGION = 'us-east-2'
ses_client = boto3.client('ses', region_name=AWS_REGION)

def send_admin_notification(user):
    SENDER = 'info@rbxrobotica.com.br'
    RECIPIENT = 'ldamasio@gmail.com'
    # RECIPIENT = 'cromofinanciamentos@gmail.com'
    SUBJECT = 'Novo Usuário Registrado'

    dbuser = CustomUser.objects.get(username=user.username)
    details = dbuser.detalhes

    BODY_TEXT = f'Um novo usuário foi registrado: {user.username} ({user.email})'
    BODY_HTML = f"""<html>
    <head></head>
    <body>
      <h1>Novo Usuário Registrado</h1>
      <p>Um novo usuário foi registrado: {user.username} ({user.email})</p>
      <h2>Dados do Usuário</h2>
      <ul>
        <li><b>Nome Completo:</b> {user.first_name} {user.last_name} (se preenchido)</li>
        <li><b>Username:</b> {user.username}</li>
        <li><b>Email:</b> {user.email}</li>
        <li><b>Parceiro:</b> {user.is_parceiro}</li>
      </ul>
      <h2>Dados Pessoais</h2>
      <ul>
        <li><b>Nome Completo:</b> {details.nome}</li>
        <li><b>Estado Civil:</b> {details.estado_civil} (se preenchido)</li>
        <li><b>RG:</b> {details.rg_numero} ({details.rg_orgexp} - se preenchido)</li>
        <li><b>CPF:</b> {details.cpf}</li>
        <li><b>Data de Nascimento:</b> {details.datanasc.strftime('%d/%m/%Y') if details.datanasc else 'Não informado'}</li>
        <li><b>Celular:</b> {details.celular}</li>
        <li><b>Renda:</b> {details.renda:.2f} (se preenchido)</li>
        <li><b>Nome da Mãe:</b> {details.mae} (se preenchido)</li>
        <li><b>Nome do Pai:</b> {details.pai} (se preenchido)</li>
        <li><b>Nacionalidade:</b> {details.nacionalidade} (se preenchido)</li>
        <li><b>Estado de Residência:</b> {details.residencia_estado} (se preenchido)</li>
        <li><b>Cidade de Residência:</b> {details.residencial_cidade} (se preenchido)</li>
        <li><b>Classe Profissional:</b> {details.classe_profissional} (se preenchido)</li>
        <li><b>Profissão:</b> {details.profissao} (se preenchido)</li>
        <li><b>Valor Patrimonial:</b> {details.valor_patrimonio:.2f} (se preenchido)</li>
        <li><b>PEP:</b> {details.pep}</li>
        <li><b>FATCA:</b> {details.fatca}</li>
        <li><b>Telefones Adicionais:</b> {details.telefones_adicionais} (se preenchido)</li>
        <li><b>Nome da Referência:</b> {details.nome_referencia} (se preenchido)</li>
        <li><b>Telefone da Referência:</b> {details.telefone_referencia} (se preenchido)</li>
      </ul>
    </body>
    </html>
    """
    CHARSET = 'UTF-8'

    with open('superdebug.log', "a") as arquivo:
        arquivo.write(f"passou pelo utils {BODY_HTML}\n")

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
        with open('superdebug.log', "a") as arquivo:
            arquivo.write(f"Email enviado! Message ID: {response['MessageId']}\n")
    except NoCredentialsError:
        with open('superdebug.log', "a") as arquivo:
            arquivo.write(f"Credenciais não encontradas.\n")
    except PartialCredentialsError:
        with open('superdebug.log', "a") as arquivo:
            arquivo.write(f"Credenciais incompletas.\n")
    except Exception as e:
        with open('superdebug.log', "a") as arquivo:
            arquivo.write(f"Erro ao enviar email: {str(e)}\n")



import boto3
from botocore.exceptions import NoCredentialsError, PartialCredentialsError
from .models import CustomUser, Detalhes

AWS_REGION = 'us-east-2'
ses_client = boto3.client('ses', region_name=AWS_REGION)

with open('superdebug.log', "a") as arquivo:
    arquivo.write("Entrei no utils.py\n")

def send_admin_notification(user):

    with open('superdebug.log', "a") as arquivo:
        arquivo.write(f"Peguei o user: {user}\n")

    with open('superdebug.log', "a") as arquivo:
        arquivo.write(f"Testei o id: {user.id}\n")

    SENDER = 'info@rbxrobotica.com.br'
    RECIPIENT = 'ldamasio@gmail.com'
    # RECIPIENT = 'cromofinanciamentos@gmail.com'
    SUBJECT = 'Novo Usuário Registrado'

    dbuser = CustomUser.objects.get(username=user.username)

    with open('superdebug.log', "a") as arquivo:
        arquivo.write(f"Peguei o dbuser: {dbuser}\n")

    with open('superdebug.log', "a") as arquivo:
        arquivo.write(f"Testei o id do dbuser: {dbuser.id}\n")

    details = Detalhes.objects.get(user=dbuser.id)

    with open('superdebug.log', "a") as arquivo:
        arquivo.write(f"Testei o details: {details}\n")


    BODY_TEXT = f'Um novo usuário foi registrado: {user.username} ({user.email})'
    BODY_HTML = f"""<html>
    <head></head>
    <body>
      <h1>Novo Usuário Registrado</h1>
      <p>Um novo usuário foi registrado: {user.username} ({user.email})</p>
      <h2>Dados do Usuário</h2>
      <ul>
        <li><b>Nome Completo:</b> {user.first_name} {user.last_name}</li>
        <li><b>Username:</b> {user.username}</li>
        <li><b>Email:</b> {user.email}</li>
        <li><b>Parceiro:</b> {'Sim' if user.is_parceiro else 'Não'}</li>
      </ul>
      <h2>Dados Pessoais</h2>
      <ul>
        <li><b>Nome do Parceiro:</b> {details.parceiro_fullname}</li>
        <li><b>Email do Parceiro:</b> {details.parceiro_email}</li>
        <li><b>Cpf ou CNPJ do Parceiro:</b> {details.parceiro_cpf_cnpj}</li>
        <li><b>Nome Completo:</b> {details.nome}</li>
        <li><b>Estado Civil:</b> {details.estado_civil}</li>
        <li><b>RG:</b> {details.rg_numero} ({details.rg_orgexp}</li>
        <li><b>CPF:</b> {details.cpf}</li>
        <li><b>Data de Nascimento:</b> {details.datanasc.strftime('%d/%m/%Y') if details.datanasc else 'Não informado'}</li>
        <li><b>Celular:</b> {details.celular}</li>
        <li><b>Renda:</b> {details.renda:.2f}</li>
        <li><b>Nome da Mãe:</b> {details.mae}</li>
        <li><b>Nome do Pai:</b> {details.pai}</li>
        <li><b>Nacionalidade:</b> {details.nacionalidade}</li>
        <li><b>Estado de Residência:</b> {details.residencia_estado}</li>
        <li><b>Cidade de Residência:</b> {details.residencial_cidade}</li>
        <li><b>Classe Profissional:</b> {details.classe_profissional}</li>
        <li><b>Profissão:</b> {details.profissao}</li>
        <li><b>Valor Patrimonial:</b> {details.valor_patrimonio:.2f}</li>
        <li><b>PEP:</b> {'Sim' if details.pep else 'Não'}</li>
        <li><b>FATCA:</b> {'Sim' if details.fatca else 'Não'}</li>
        <li><b>Telefones Adicionais:</b> {details.telefones_adicionais}</li>
        <li><b>Telefones Comercial:</b> {details.telefone_comercial}</li>
        <li><b>Nome da Referência:</b> {details.nome_referencia}</li>
        <li><b>Telefone da Referência:</b> {details.telefone_referencia}</li>
        <li><b>É autônomo:</b> {'Sim' if details.is_autonomo else 'Não'}</li>
        <li><b>Nome da Referência Comercial:</b> {details.nome_referencia_comercial}</li>
        <li><b>Telefone da Referência Comercial:</b> {details.telefone_referencia_comercial}</li>
        <li><b>Valor do Financiamento:</b> {details.valor_financiamento}</li>
        <li><b>Marca do Veículo:</b> {details.marca_veiculo}</li>
        <li><b>Modelo do Veículo:</b> {details.modelo_veiculo}</li>
        <li><b>Ano de Fabricação do Veículo:</b> {details.ano_fabricacao_veiculo}</li>
        <li><b>Placa do Veículo:</b> {details.placa_veiculo}</li>
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



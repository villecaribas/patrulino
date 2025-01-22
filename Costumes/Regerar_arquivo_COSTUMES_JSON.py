import os
import json

def generate_image_metadata(directory_path, output_file):
    # Lista para armazenar os dados dos arquivos
    image_metadata = []

    # Iterar pelos arquivos na pasta especificada
    for file_name in os.listdir(directory_path):
        # Verificar se o arquivo é .svg ou .png
        if file_name.endswith(('.svg', '.png')):
            # Formatar o nome
            name = os.path.splitext(file_name)[0].replace('-', ' ')
            # Adicionar o dicionário à lista
            image_metadata.append({
                "fileName": file_name,
                "name": name
            })

    # Gerar o arquivo JSON
    with open(output_file, 'w', encoding='utf-8') as json_file:
        json.dump(image_metadata, json_file, indent=2, ensure_ascii=False)

    print(f"Arquivo JSON gerado com sucesso em {output_file}")

# Caminho para a pasta com os arquivos de imagem
input_directory = "./"
# Nome do arquivo JSON de saída
output_json = "COSTUMES.json"

# Gerar o arquivo JSON
generate_image_metadata(input_directory, output_json)

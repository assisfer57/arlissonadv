# Configuração antes de publicar

A estrutura técnica está pronta. Antes de colocar o site no domínio definitivo, substitua os campos abaixo.

## Dados obrigatórios

- `www.SEUDOMINIO.com.br` em `index.html`, `robots.txt` e `sitemap.xml` pelo domínio real.
- `OAB/UF nº [PREENCHER]` em `index.html` pelo número e UF corretos do profissional.
- Confirme telefone, WhatsApp, e-mail e cidade antes da publicação.

## Google Tag Manager, GA4 e Google Ads

No início do `index.html`, o objeto `window.SITE_TRACKING` contém marcadores de posição:

- `GTM-XXXXXXX`
- `G-XXXXXXXXXX`
- `AW-XXXXXXXXX`
- rótulo da conversão do Google Ads

Insira os IDs reais. O carregamento do GTM permanece desativado enquanto o marcador `GTM-XXXXXXX` não for substituído.

Os seguintes eventos já entram no `dataLayer`:

- `click_whatsapp` — evento geral para todos os acessos ao WhatsApp;
- `click_phone` — evento geral para todos os cliques em telefone;
- `click_whatsapp_header`
- `click_cta_hero_analysis`
- `click_cta_hero_lawyer`
- `click_area_bancario`
- `click_area_consumidor`
- `click_area_empresarial`
- `click_area_consultoria`
- `click_cta_about`
- `click_cta_final_whatsapp`
- `click_phone_final`
- `click_whatsapp_contact`
- `click_phone_contact`
- `click_whatsapp_floating`
- `click_whatsapp_mobile_bar`
- `click_phone_mobile_bar`
- `generate_lead`

No GTM, crie acionadores de Evento Personalizado com esses nomes e vincule às tags do GA4 e às conversões do Google Ads escolhidas. Não conte dois eventos como a mesma conversão primária.

Antes de ativar métricas e mídia, configure também a política de consentimento/cookies e o Consent Mode de acordo com a implantação e os serviços efetivamente utilizados.

## Publicação e validação

1. Publique todos os arquivos mantendo a pasta `assets`.
2. Teste `robots.txt` e `sitemap.xml` no domínio real.
3. Valide o Schema no Rich Results Test.
4. Cadastre o domínio no Google Search Console e envie o sitemap.
5. Verifique todos os links e eventos no modo Preview do GTM.
6. Faça uma revisão final dos textos e dados profissionais pelo advogado responsável.

## Observação ética

O texto foi revisado para caráter informativo e sem promessa de resultado. A conformidade final depende da veracidade dos dados, dos anúncios e das palavras-chave efetivamente utilizados, devendo ser confirmada pelo profissional responsável e, quando necessário, pelo Tribunal de Ética e Disciplina competente.

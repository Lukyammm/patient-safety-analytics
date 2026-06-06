const PLANILHAS = {
  principal: '1XUtI9TSMJmTpbtfLjZbJ-uarRN94lu_Aqpsc46Lxmt4',
  relatorios: '1DjE-1Gx33RfWPkUtUW883-5SM2NVdeuDsq4wQ0XxGUw'
};
const ABA_CAMINHADAS = 'BASE DE DADOS CAMINHADAS';
const ABA_NOTIFICA = 'NOTIFICA - BASE';
const ABA_RELATORIO_CRP = 'BASE_DADOS(NÃOEDITAR)';
const ABA_RELATORIO_CRO = 'CRO';
const META_INSTITUCIONAL = 80;
const FUSO_HORARIO = 'America/Fortaleza';
const CACHE_FILTROS_BOLETIM_KEY = 'boletim:filtros:v2';
const CACHE_FILTROS_BOLETIM_TTL = 900;
const ORDEM_MESES = {
  'JANEIRO': 1,
  'FEVEREIRO': 2,
  'MARÇO': 3,
  'MARCO': 3,
  'ABRIL': 4,
  'MAIO': 5,
  'JUNHO': 6,
  'JULHO': 7,
  'AGOSTO': 8,
  'SETEMBRO': 9,
  'OUTUBRO': 10,
  'NOVEMBRO': 11,
  'DEZEMBRO': 12,
  'JAN': 1,
  'JAN.': 1,
  'FEV': 2,
  'FEV.': 2,
  'MAR': 3,
  'MAR.': 3,
  'ABR': 4,
  'ABR.': 4,
  'MAI': 5,
  'MAI.': 5,
  'JUN': 6,
  'JUN.': 6,
  'JUL': 7,
  'JUL.': 7,
  'AGO': 8,
  'AGO.': 8,
  'SET': 9,
  'SET.': 9,
  'OUT': 10,
  'OUT.': 10,
  'NOV': 11,
  'NOV.': 11,
  'DEZ': 12,
  'DEZ.': 12
};
const MESES_CANONICOS = {
  1: 'Janeiro',
  2: 'Fevereiro',
  3: 'Março',
  4: 'Abril',
  5: 'Maio',
  6: 'Junho',
  7: 'Julho',
  8: 'Agosto',
  9: 'Setembro',
  10: 'Outubro',
  11: 'Novembro',
  12: 'Dezembro'
};

const CLASSIFICACOES_META_5_DIAS = [
  'EVENTO ADVERSO GRAVE',
  'EVENTO ADVERSO ÓBITO',
  'EVENTO ADVERSO OBITO',
  'NEVER EVENT'
];

const METAS_CAMINHADAS = [
  {
    codigo: '1',
    nome: 'Identificação Segura',
    observacaoIdx: 19,
    itens: [
      { codigo: '1.1', nome: 'Paciente com pulseira padrão legível', idx: 14 },
      { codigo: '1.2', nome: 'Placa de leito', idx: 15 },
      { codigo: '1.3', nome: 'Dieta', idx: 16 },
      { codigo: '1.4', nome: 'Medicamentos', idx: 17 },
      { codigo: '1.5', nome: 'Hemocomponentes', idx: 18 }
    ]
  },
  {
    codigo: '2',
    nome: 'Comunicação Efetiva',
    observacaoIdx: 24,
    itens: [
      { codigo: '2.1', nome: 'Reuniões rápidas de segurança', idx: 20 },
      { codigo: '2.2', nome: 'Comunicação de resultados críticos laboratoriais', idx: 21 },
      { codigo: '2.3', nome: 'Registros da transferência de cuidados', idx: 22 },
      { codigo: '2.4', nome: 'Registros da passagem de plantão', idx: 23 }
    ]
  },
  {
    codigo: '3',
    nome: 'Segurança da Cadeia Medicamentosa',
    observacaoIdx: 32,
    itens: [
      { codigo: '3.1', nome: 'Geladeira (temperatura e uso exclusivo)', idx: 25 },
      { codigo: '3.2', nome: 'Validade dos medicamentos da geladeira', idx: 26 },
      { codigo: '3.3', nome: 'Medicamentos multidoses', idx: 27 },
      { codigo: '3.4', nome: 'Eletrólitos', idx: 28 },
      { codigo: '3.5', nome: 'Farmacovigilância', idx: 29 },
      { codigo: '3.6', nome: 'Medicamentos via sonda', idx: 30 },
      { codigo: '3.7', nome: 'MPPs (dupla checagem)', idx: 31 }
    ]
  },
  {
    codigo: '4',
    nome: 'Cirurgia Segura',
    observacaoIdx: 39,
    itens: [
      { codigo: '4.1', nome: 'Demarcação do sítio', idx: 33 },
      { codigo: '4.2', nome: 'Tricotomia', idx: 34 },
      { codigo: '4.3', nome: 'Reserva cirúrgica', idx: 35 },
      { codigo: '4.4', nome: 'Antibioticoprofilaxia', idx: 36 },
      { codigo: '4.5', nome: 'Amostras identificadas', idx: 37 },
      { codigo: '4.6', nome: 'Avaliação anestésica', idx: 38 }
    ]
  },
  {
    codigo: '5',
    nome: 'Higienização das Mãos',
    observacaoIdx: 43,
    itens: [
      { codigo: '5.1', nome: 'Higienização correta', idx: 40 },
      { codigo: '5.2', nome: 'Dispensadores abastecidos', idx: 41 },
      { codigo: '5.3', nome: 'Sem adornos', idx: 42 }
    ]
  },
  {
    codigo: '6',
    nome: 'Prevenção de Lesão por Pressão',
    observacaoIdx: 50,
    itens: [
      { codigo: '6.1', nome: 'Avaliação na admissão', idx: 44 },
      { codigo: '6.2', nome: 'Avaliação diária', idx: 45 },
      { codigo: '6.3', nome: 'Mudança de decúbito', idx: 46 },
      { codigo: '6.4', nome: 'Cuidados com a pele', idx: 47 },
      { codigo: '6.5', nome: 'Hidratação', idx: 48 },
      { codigo: '6.6', nome: 'Monitoramento da pele', idx: 49 }
    ]
  },
  {
    codigo: '7',
    nome: 'Prevenção de Quedas',
    observacaoIdx: 57,
    itens: [
      { codigo: '7.1', nome: 'Avaliação na admissão', idx: 51 },
      { codigo: '7.2', nome: 'Avaliação diária', idx: 52 },
      { codigo: '7.3', nome: 'Grades e rodas', idx: 53 },
      { codigo: '7.4', nome: 'Calçado antiderrapante', idx: 54 },
      { codigo: '7.5', nome: 'Ambiente seguro', idx: 55 },
      { codigo: '7.6', nome: 'Sinalização de risco', idx: 56 }
    ]
  }
];

/* ============================================================
   CONFIGURAÇÃO SELF-SERVICE (Fase 1)
   A configuração editável fica em Script Properties (fonte única),
   com fallback para os padrões definidos acima. Sem nada salvo, o
   comportamento é idêntico ao histórico (zero regressão).
   Edição feita pela tela "Administração" do app (google.script.run).
   ============================================================ */
const CONFIG_PROP_KEY = 'COSEP_CONFIG_V1';
const CONFIG_ADMINS_PROP_KEY = 'COSEP_ADMINS';
const CONFIG_LOG_SHEET = 'COSEP_CONFIG_LOG';

function configPadrao() {
  return {
    metaInstitucional: META_INSTITUCIONAL,
    prazoMeta5Dias: 5,
    prazoMeta10Dias: 10,
    classificacoesMeta5Dias: CLASSIFICACOES_META_5_DIAS.slice(),
    metasCaminhadas: METAS_CAMINHADAS.map(meta => ({
      codigo: meta.codigo,
      nome: meta.nome,
      ativa: true,
      observacaoIdx: meta.observacaoIdx,
      itens: meta.itens.map(item => ({ codigo: item.codigo, nome: item.nome, idx: item.idx }))
    })),
    atualizadoEm: '',
    atualizadoPor: ''
  };
}

function obterConfig() {
  const padrao = configPadrao();
  try {
    const raw = PropertiesService.getScriptProperties().getProperty(CONFIG_PROP_KEY);
    if (!raw) return padrao;
    return mesclarConfig(padrao, JSON.parse(raw));
  } catch (erro) {
    registrarErro('obter-config', erro);
    return padrao;
  }
}

function mesclarConfig(padrao, salvo) {
  if (!salvo || typeof salvo !== 'object') return padrao;
  const cfg = JSON.parse(JSON.stringify(padrao));

  const metaInst = Number(salvo.metaInstitucional);
  if (!Number.isNaN(metaInst) && metaInst >= 0 && metaInst <= 100) cfg.metaInstitucional = metaInst;

  const p5 = Number(salvo.prazoMeta5Dias);
  if (!Number.isNaN(p5) && p5 > 0) cfg.prazoMeta5Dias = Math.round(p5);
  const p10 = Number(salvo.prazoMeta10Dias);
  if (!Number.isNaN(p10) && p10 > 0) cfg.prazoMeta10Dias = Math.round(p10);

  if (Array.isArray(salvo.classificacoesMeta5Dias)) {
    const lista = salvo.classificacoesMeta5Dias.map(t => String(t || '').trim()).filter(Boolean);
    if (lista.length) cfg.classificacoesMeta5Dias = lista;
  }

  if (Array.isArray(salvo.metasCaminhadas) && salvo.metasCaminhadas.length) {
    // Mescla por código: preserva idx/estrutura dos padrões e aplica nome/ativa salvos.
    const porCodigo = {};
    salvo.metasCaminhadas.forEach(m => { if (m && m.codigo != null) porCodigo[String(m.codigo)] = m; });
    cfg.metasCaminhadas = cfg.metasCaminhadas.map(metaPadrao => {
      const ms = porCodigo[String(metaPadrao.codigo)];
      if (!ms) return metaPadrao;
      const itensSalvos = {};
      (Array.isArray(ms.itens) ? ms.itens : []).forEach(it => { if (it && it.codigo != null) itensSalvos[String(it.codigo)] = it; });
      return {
        codigo: metaPadrao.codigo,
        nome: String(ms.nome || '').trim() || metaPadrao.nome,
        ativa: ms.ativa !== false,
        observacaoIdx: metaPadrao.observacaoIdx,
        itens: metaPadrao.itens.map(itemPadrao => {
          const is = itensSalvos[String(itemPadrao.codigo)];
          return {
            codigo: itemPadrao.codigo,
            nome: is && String(is.nome || '').trim() ? String(is.nome).trim() : itemPadrao.nome,
            idx: itemPadrao.idx
          };
        })
      };
    });
  }

  cfg.atualizadoEm = salvo.atualizadoEm || '';
  cfg.atualizadoPor = salvo.atualizadoPor || '';
  return cfg;
}

function emailUsuarioAtual() {
  try {
    const ativo = Session.getActiveUser() && Session.getActiveUser().getEmail();
    if (ativo) return ativo;
    return (Session.getEffectiveUser() && Session.getEffectiveUser().getEmail()) || '';
  } catch (erro) {
    return '';
  }
}

function listaAdmins() {
  try {
    const raw = PropertiesService.getScriptProperties().getProperty(CONFIG_ADMINS_PROP_KEY) || '';
    return raw.split(/[;,]/).map(s => String(s || '').trim().toLowerCase()).filter(Boolean);
  } catch (erro) {
    return [];
  }
}

function usuarioPodeEditarConfig() {
  const admins = listaAdmins();
  if (!admins.length) return true; // sem allowlist configurada → liberado (proprietário)
  const email = emailUsuarioAtual().toLowerCase();
  return !!email && admins.indexOf(email) !== -1;
}

function obterConfigCosep() {
  return executarRota('rpc-config-get', () => ({
    success: true,
    config: obterConfig(),
    podeEditar: usuarioPodeEditarConfig(),
    usuario: emailUsuarioAtual(),
    geradoEm: Utilities.formatDate(new Date(), FUSO_HORARIO, "dd/MM/yyyy 'às' HH:mm")
  }));
}

function salvarConfigCosep(novaConfig) {
  return executarRota('rpc-config-save', () => {
    if (!usuarioPodeEditarConfig()) {
      return { success: false, mensagem: 'Você não tem permissão para alterar as configurações.' };
    }
    const merged = mesclarConfig(configPadrao(), novaConfig || {});
    merged.atualizadoEm = Utilities.formatDate(new Date(), FUSO_HORARIO, "dd/MM/yyyy 'às' HH:mm");
    merged.atualizadoPor = emailUsuarioAtual() || 'desconhecido';
    PropertiesService.getScriptProperties().setProperty(CONFIG_PROP_KEY, JSON.stringify(merged));
    registrarLogConfig(merged.atualizadoPor, 'Configuração atualizada');
    return { success: true, config: merged, mensagem: 'Configurações salvas com sucesso.' };
  });
}

function restaurarConfigPadraoCosep() {
  return executarRota('rpc-config-reset', () => {
    if (!usuarioPodeEditarConfig()) {
      return { success: false, mensagem: 'Você não tem permissão para alterar as configurações.' };
    }
    PropertiesService.getScriptProperties().deleteProperty(CONFIG_PROP_KEY);
    registrarLogConfig(emailUsuarioAtual() || 'desconhecido', 'Configuração restaurada para o padrão');
    return { success: true, config: obterConfig(), mensagem: 'Configurações restauradas para o padrão.' };
  });
}

function registrarLogConfig(usuario, acao) {
  try {
    const ss = abrirPlanilhaLeitura('principal');
    let sh = ss.getSheetByName(CONFIG_LOG_SHEET);
    if (!sh) {
      sh = ss.insertSheet(CONFIG_LOG_SHEET);
      sh.appendRow(['Data/Hora', 'Usuário', 'Ação']);
    }
    sh.appendRow([Utilities.formatDate(new Date(), FUSO_HORARIO, 'dd/MM/yyyy HH:mm:ss'), usuario || '', acao || '']);
  } catch (erro) {
    registrarErro('config-log', erro);
  }
}

function doGet(e) {
  const params = (e && e.parameter) || {};

  if (params.api === '1') {
    return responderJson(executarRota('api-boletim', () => {
      return executarComPlanilha('principal', ss => montarPayload(ss, extrairFiltros(params)));
    }));
  }

  if (params.api === 'filtros') {
    return responderJson(executarRota('api-boletim-filtros', () => {
      return executarComPlanilha('principal', ss => montarPayloadFiltros(ss));
    }));
  }

  if (params.api === 'relatorios') {
    return responderJson(executarRota('api-relatorios', () => {
      return executarComPlanilha('relatorios', ss => montarPayloadRelatorios(ss, extrairFiltrosRelatorios(params)));
    }));
  }

  if (params.api === 'config') {
    return responderJson(obterConfigCosep());
  }

  try {
    const pagina = normalizarTexto(params.page || params.pagina || '');
    const telaInicial = pagina === 'RELATORIOS' || pagina === 'RELATÓRIOS' ? 'relatorios' : 'boletim';
    const titulo = telaInicial === 'relatorios' ? 'Relatórios COSEP' : 'Boletim COSEP';

    const template = HtmlService.createTemplateFromFile('Index');
    template.appUrl = ScriptApp.getService().getUrl();
    template.currentPage = telaInicial;

    return template
      .evaluate()
      .setTitle(titulo)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } catch (erro) {
    registrarErro('html-route', erro);
    return HtmlService
      .createHtmlOutput('<!doctype html><meta charset="utf-8"><title>Erro</title><body style="font-family:Inter,Arial,sans-serif;padding:32px;background:#f8fafc;color:#0f172a"><h1>Não foi possível abrir o aplicativo.</h1><p>Tente novamente em instantes ou acione o administrador.</p></body>')
      .setTitle('Erro ao abrir aplicativo');
  }
}

function responderJson(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function executarRota(nomeRota, callback) {
  try {
    return callback();
  } catch (erro) {
    registrarErro(nomeRota, erro);
    return montarPayloadErro('Não foi possível carregar os dados agora.', nomeRota, erro);
  }
}

function montarPayloadErro(mensagem, origem, erro) {
  return {
    success: false,
    origem: origem || 'apps-script',
    mensagem: mensagem || 'Falha inesperada no Apps Script.',
    detalhe: erro && erro.message ? erro.message : String(erro || ''),
    geradoEm: Utilities.formatDate(new Date(), FUSO_HORARIO, "dd/MM/yyyy 'às' HH:mm")
  };
}

function registrarErro(origem, erro) {
  const detalhe = erro && erro.stack ? erro.stack : (erro && erro.message ? erro.message : String(erro || 'Erro desconhecido'));
  console.error(`[${origem}] ${detalhe}`);
}

function abrirPlanilhaLeitura(chavePlanilha) {
  const id = PLANILHAS[chavePlanilha];
  if (!id) {
    throw new Error(`Planilha não parametrizada para a chave "${chavePlanilha}".`);
  }

  try {
    return SpreadsheetApp.openById(id);
  } catch (erro) {
    throw new Error(`Falha ao abrir a planilha "${chavePlanilha}" para leitura: ${erro.message || erro}`);
  }
}

function executarComPlanilha(chavePlanilha, callback) {
  const ss = abrirPlanilhaLeitura(chavePlanilha);
  return callback(ss);
}

function extrairFiltros(params) {
  const bruto = params || {};
  return {
    caminhadas: {
      anos: extrairListaFiltros(bruto.anosCosep || bruto.anoCosep || bruto.ano || '', normalizarAno),
      meses: extrairListaFiltros(bruto.mesesCosep || bruto.mesCosep || bruto.mes || '', normalizarMes),
      unidades: extrairListaFiltros(bruto.unidadesCosep || bruto.unidadeCosep || bruto.unidade || '', value => String(value || '').trim())
    },
    notificacoes: {
      anos: extrairListaFiltros(bruto.anosNotifica || bruto.anoNotifica || bruto.ano || '', normalizarAno),
      meses: extrairListaFiltros(bruto.mesesNotifica || bruto.mesNotifica || bruto.mes || '', normalizarMes),
      unidades: extrairListaFiltros(bruto.unidadesNotifica || bruto.unidadeNotifica || bruto.unidade || '', value => String(value || '').trim())
    }
  };
}

function extrairListaFiltros(rawValue, normalizerFn) {
  const brutoLista = Array.isArray(rawValue) ? rawValue : String(rawValue || '').split(/[|,]/);

  const valores = brutoLista
    .map(item => String(item || '').trim())
    .filter(Boolean)
    .map(item => normalizerFn ? normalizerFn(item) : item)
    .filter(Boolean);

  return [...new Set(valores)];
}

function montarPayloadFiltros(ss) {
  return {
    success: true,
    geradoEm: Utilities.formatDate(new Date(), FUSO_HORARIO, "dd/MM/yyyy 'às' HH:mm"),
    filtros: getFiltros(ss)
  };
}

function montarPayload(ss, filtros) {
  const filtrosAplicados = filtros || { caminhadas: {}, notificacoes: {} };
  const cfg = obterConfig();
  return {
    success: true,
    geradoEm: Utilities.formatDate(new Date(), FUSO_HORARIO, "dd/MM/yyyy 'às' HH:mm"),
    filtros: getFiltros(ss),
    aplicado: filtrosAplicados,
    config: { metaInstitucional: cfg.metaInstitucional, atualizadoEm: cfg.atualizadoEm },
    caminhadas: processarCaminhadas(ss, filtrosAplicados.caminhadas || {}, cfg),
    notificacoes: processarNotificacoes(ss, filtrosAplicados.notificacoes || {}, cfg)
  };
}

function obterFiltrosBoletim() {
  return executarRota('rpc-boletim-filtros', () => {
    return executarComPlanilha('principal', ss => montarPayloadFiltros(ss));
  });
}

function obterPayload(filtros) {
  return executarRota('rpc-boletim', () => {
    return executarComPlanilha('principal', ss => montarPayload(ss, extrairFiltros(filtros || {})));
  });
}

function normalizarTexto(valor) {
  return String(valor == null ? '' : valor)
    .trim()
    .replace(/\s+/g, ' ')
    .toUpperCase();
}

function normalizarCabecalho(valor) {
  return normalizarTexto(valor)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Z0-9]+/g, ' ')
    .trim();
}

function colunaParaLetra(indiceZeroBased) {
  let numero = Number(indiceZeroBased) + 1;
  let letra = '';

  while (numero > 0) {
    const resto = (numero - 1) % 26;
    letra = String.fromCharCode(65 + resto) + letra;
    numero = Math.floor((numero - 1) / 26);
  }

  return letra;
}

function normalizarMes(valor) {
  const texto = normalizarTexto(valor);
  if (!texto) return '';

  if (ORDEM_MESES[texto]) {
    return MESES_CANONICOS[ORDEM_MESES[texto]];
  }

  const numero = Number(texto);
  if (!Number.isNaN(numero) && numero >= 1 && numero <= 12) {
    return MESES_CANONICOS[numero];
  }

  const base = String(valor == null ? '' : valor).trim().toLowerCase();
  return base ? base.charAt(0).toUpperCase() + base.slice(1) : '';
}

function normalizarAno(valor) {
  return String(valor == null ? '' : valor).trim();
}

function mesParaOrdem(valor) {
  const texto = normalizarTexto(valor);
  if (!texto) return 99;
  if (ORDEM_MESES[texto]) return ORDEM_MESES[texto];

  const numero = Number(texto);
  if (!Number.isNaN(numero) && numero >= 1 && numero <= 12) return numero;
  return 99;
}

function ordenarMeses(a, b) {
  const ordemA = mesParaOrdem(a);
  const ordemB = mesParaOrdem(b);
  if (ordemA !== ordemB) return ordemA - ordemB;
  return String(a).localeCompare(String(b), 'pt-BR');
}

function ehSim(valor) {
  const v = normalizarTexto(valor);
  return ['SIM', 'S', 'CONFORME', 'OK', 'ADEQUADO'].includes(v);
}

function ehNao(valor) {
  const v = normalizarTexto(valor);
  return ['NÃO', 'NAO', 'N', 'INCONFORME', 'INADEQUADO', 'NÃO CONFORME', 'NAO CONFORME'].includes(v);
}

function incrementarMapa(mapa, chave) {
  const valor = String(chave == null ? '' : chave).trim() || 'Não informado';
  mapa[valor] = (mapa[valor] || 0) + 1;
}

function getUnidade(row) {
  const indices = [4, 68, 69, 70, 71, 72, 73, 74, 75, 76];
  for (let i = 0; i < indices.length; i++) {
    const valor = String(row[indices[i]] == null ? '' : row[indices[i]]).trim();
    if (valor) return valor;
  }
  return 'Não informado';
}

function coletarFiltros(dados, config) {
  const anos = {};
  const meses = {};
  const unidades = {};

  dados.forEach(row => {
    const ano = normalizarAno(row[config.anoIdx]);
    const mes = normalizarMes(row[config.mesIdx]);
    const unidade = config.unidadeFn(row);

    if (ano) anos[ano] = true;
    if (mes) meses[mes] = true;
    if (unidade) unidades[unidade] = true;
  });

  return {
    anos: Object.keys(anos).sort((a, b) => Number(a) - Number(b) || a.localeCompare(b, 'pt-BR')),
    meses: Object.keys(meses).sort(ordenarMeses),
    unidades: Object.keys(unidades).sort((a, b) => a.localeCompare(b, 'pt-BR'))
  };
}

function getFiltros(ss) {
  const cache = CacheService.getScriptCache();
  const cached = cache.get(CACHE_FILTROS_BOLETIM_KEY);

  if (cached) {
    try {
      const filtrosCache = JSON.parse(cached);
      if (filtrosCache && filtrosCache.caminhadas && filtrosCache.notificacoes) {
        return filtrosCache;
      }
    } catch (erro) {
      registrarErro('cache-filtros-boletim-parse', erro);
    }
  }

  const filtros = montarFiltrosOtimizados(ss);

  try {
    cache.put(CACHE_FILTROS_BOLETIM_KEY, JSON.stringify(filtros), CACHE_FILTROS_BOLETIM_TTL);
  } catch (erro) {
    registrarErro('cache-filtros-boletim-put', erro);
  }

  return filtros;
}

function montarFiltrosOtimizados(ss) {
  const shCaminhadas = ss.getSheetByName(ABA_CAMINHADAS);
  const shNotifica = ss.getSheetByName(ABA_NOTIFICA);

  if (!shCaminhadas) {
    throw new Error(`Aba obrigatória não encontrada: ${ABA_CAMINHADAS}`);
  }
  if (!shNotifica) {
    throw new Error(`Aba obrigatória não encontrada: ${ABA_NOTIFICA}`);
  }

  return {
    caminhadas: coletarFiltrosCaminhadasRapido(shCaminhadas),
    notificacoes: coletarFiltrosNotificacoesRapido(shNotifica)
  };
}

function montarResultadoFiltros(anos, meses, unidades) {
  return {
    anos: Object.keys(anos).sort((a, b) => Number(a) - Number(b) || a.localeCompare(b, 'pt-BR')),
    meses: Object.keys(meses).sort(ordenarMeses),
    unidades: Object.keys(unidades).sort((a, b) => a.localeCompare(b, 'pt-BR'))
  };
}

function marcarFiltro(mapa, valor) {
  const texto = String(valor == null ? '' : valor).trim();
  if (texto) mapa[texto] = true;
}

function getUnidadeCaminhadasPorBlocos(base, setoresExtras) {
  const candidatos = [base && base[2]].concat(setoresExtras || []);
  for (let i = 0; i < candidatos.length; i++) {
    const valor = String(candidatos[i] == null ? '' : candidatos[i]).trim();
    if (valor) return valor;
  }
  return 'Não informado';
}

function coletarFiltrosCaminhadasRapido(sh) {
  const numRows = Math.max(sh.getLastRow() - 1, 0);
  const anos = {};
  const meses = {};
  const unidades = {};

  if (!numRows) return montarResultadoFiltros(anos, meses, unidades);

  const periodoEUnidade = sh.getRange(2, 3, numRows, 3).getValues();
  const unidadesExtras = sh.getRange(2, 69, numRows, 9).getValues();

  periodoEUnidade.forEach((row, index) => {
    marcarFiltro(anos, normalizarAno(row[1]));
    marcarFiltro(meses, normalizarMes(row[0]));
    marcarFiltro(unidades, getUnidadeCaminhadasPorBlocos(row, unidadesExtras[index]));
  });

  return montarResultadoFiltros(anos, meses, unidades);
}

function coletarFiltrosNotificacoesRapido(sh) {
  const numRows = Math.max(sh.getLastRow() - 2, 0);
  const anos = {};
  const meses = {};
  const unidades = {};

  if (!numRows) return montarResultadoFiltros(anos, meses, unidades);

  const dados = sh.getRange(3, 3, numRows, 5).getValues();

  dados.forEach(row => {
    marcarFiltro(anos, normalizarAno(row[1]));
    marcarFiltro(meses, normalizarMes(row[0]));
    marcarFiltro(unidades, String(row[4] || '').trim() || 'Não informado');
  });

  return montarResultadoFiltros(anos, meses, unidades);
}


function ehMesmoSetor(nomeSetor, referencia) {
  return normalizarTexto(nomeSetor) === normalizarTexto(referencia);
}

function montarSetoresExcecaoMeta4(setoresSelecionados) {
  const setoresExcecao = [];

  if (setoresSelecionados.some(setor => ehMesmoSetor(setor, 'B2 - Centro Cirúrgico'))) {
    setoresExcecao.push(
      'A6 - Clínica Cirúrgica (Geral/Digestiva)',
      'B5 - Clínica Cirúrgica Oncológica',
      'B6 - Cabeça e Pescoço',
      'B6 - Urologia',
      'C7 - Clínica Ortopédica'
    );
  }

  if (setoresSelecionados.some(setor => ehMesmoSetor(setor, 'B6 - Clínica Cirúrgica Vascular'))) {
    setoresExcecao.push('Hemodinâmica');
  }

  if (setoresSelecionados.some(setor => ehMesmoSetor(setor, 'C3 - Centro Cirúrgico Obstétrico'))) {
    setoresExcecao.push(
      'C6 - Clínica Ginecológica',
      'C6 - Clínica Obstétrica'
    );
  }

  const mapaSetores = {};
  setoresExcecao.forEach(setor => {
    if (setor) mapaSetores[normalizarTexto(setor)] = setor;
  });

  return mapaSetores;
}

function aplicarExcecaoMeta4CentroCirurgico(metas, linhas, filtros, metaDefs) {
  metaDefs = metaDefs || METAS_CAMINHADAS;
  const setoresSelecionados = (filtros.unidades || []).map(item => String(item || '').trim()).filter(Boolean);
  const setoresExcecao = montarSetoresExcecaoMeta4(setoresSelecionados);
  const chavesSetoresExcecao = Object.keys(setoresExcecao);
  if (!chavesSetoresExcecao.length) return;

  const meta4 = metas.find(meta => meta.codigo === '4');
  if (!meta4) return;

  const meta4Def = metaDefs.find(metaDef => String(metaDef.codigo) === '4');
  if (!meta4Def) return;

  const anoFiltro = new Set((filtros.anos || []).map(normalizarAno).filter(Boolean));
  const mesFiltro = new Set((filtros.meses || []).map(normalizarMes).filter(Boolean));

  meta4.avaliados = 0;
  meta4.conformes = 0;
  meta4.naoConformes = 0;
  meta4.itens.forEach(item => {
    item.avaliados = 0;
    item.conformes = 0;
    item.naoConformes = 0;
  });

  linhas
    .filter(row => !anoFiltro.size || anoFiltro.has(normalizarAno(row[3])))
    .filter(row => !mesFiltro.size || mesFiltro.has(normalizarMes(row[2])))
    .filter(row => chavesSetoresExcecao.includes(normalizarTexto(getUnidade(row))))
    .forEach(row => {
      meta4Def.itens.forEach((itemDef, itemIndex) => {
        const valor = row[itemDef.idx];
        const item = meta4.itens[itemIndex];

        if (ehSim(valor)) {
          item.conformes++;
          item.avaliados++;
          meta4.conformes++;
          meta4.avaliados++;
        } else if (ehNao(valor)) {
          item.naoConformes++;
          item.avaliados++;
          meta4.naoConformes++;
          meta4.avaliados++;
        }
      });
    });

  meta4.percentual = meta4.avaliados ? Number(((meta4.conformes / meta4.avaliados) * 100).toFixed(1)) : null;
  meta4.itens.forEach(item => {
    item.percentual = item.avaliados ? Number(((item.conformes / item.avaliados) * 100).toFixed(1)) : null;
  });
}

function processarCaminhadas(ss, filtros, cfg) {
  cfg = cfg || obterConfig();
  const META_DEF = (cfg.metasCaminhadas || METAS_CAMINHADAS).filter(meta => meta && meta.ativa !== false);
  const metaInstitucional = cfg.metaInstitucional;

  const sh = ss.getSheetByName(ABA_CAMINHADAS);
  const linhas = sh.getDataRange().getValues().slice(1);

  const metas = META_DEF.map(meta => ({
    codigo: meta.codigo,
    nome: meta.nome,
    avaliados: 0,
    conformes: 0,
    naoConformes: 0,
    percentual: 0,
    totalObservacoes: 0,
    observacoes: [],
    itens: meta.itens.map(item => ({
      codigo: item.codigo,
      nome: item.nome,
      avaliados: 0,
      conformes: 0,
      naoConformes: 0,
      percentual: 0
    }))
  }));

  const porUnidade = {};
  const observacoesGerais = [];
  const avaliadores = {};
  const metasAcionadas = {};

  let totalAvaliacoes = 0;
  let geralConformes = 0;
  let geralNaoConformes = 0;
  let totalComObservacao = 0;
  let totalComFoto = 0;

  const anosFiltro = new Set((filtros.anos || []).map(normalizarAno).filter(Boolean));
  const mesesFiltro = new Set((filtros.meses || []).map(normalizarMes).filter(Boolean));
  const unidadesFiltro = new Set((filtros.unidades || []).map(item => String(item || '').trim()).filter(Boolean));

  const linhasFiltradas = linhas.filter(row => {
    const ano = normalizarAno(row[3]);
    const mes = normalizarMes(row[2]);
    const unidade = getUnidade(row);

    if (!anosFiltro.size || !mesesFiltro.size || !unidadesFiltro.size) return false;
    if (!anosFiltro.has(ano)) return false;
    if (!mesesFiltro.has(mes)) return false;
    if (!unidadesFiltro.has(unidade)) return false;
    return true;
  });

  totalAvaliacoes = linhasFiltradas.length;

  linhasFiltradas.forEach(row => {
    const unidade = getUnidade(row);
    const observacaoGeral = String(row[59] || '').trim();
    const temFoto = String(row[58] || '').trim();
    const avaliador = String(row[9] || '').trim();
    const metaPrincipal = String(row[13] || '').trim();

    incrementarMapa(porUnidade, unidade);
    if (avaliador) avaliadores[avaliador] = true;
    if (metaPrincipal) metasAcionadas[metaPrincipal] = true;
    if (temFoto) totalComFoto++;

    if (observacaoGeral) {
      totalComObservacao++;
      observacoesGerais.push({ unidade: unidade, texto: observacaoGeral });
    }

    META_DEF.forEach((metaDef, metaIndex) => {
      metaDef.itens.forEach((itemDef, itemIndex) => {
        const valor = row[itemDef.idx];
        const item = metas[metaIndex].itens[itemIndex];

        if (ehSim(valor)) {
          item.conformes++;
          item.avaliados++;
          metas[metaIndex].conformes++;
          metas[metaIndex].avaliados++;
          geralConformes++;
        } else if (ehNao(valor)) {
          item.naoConformes++;
          item.avaliados++;
          metas[metaIndex].naoConformes++;
          metas[metaIndex].avaliados++;
          geralNaoConformes++;
        }
      });

      const observacaoMeta = String(row[metaDef.observacaoIdx] || '').trim();
      if (observacaoMeta) {
        metas[metaIndex].totalObservacoes++;
        metas[metaIndex].observacoes.push({ unidade: unidade, texto: observacaoMeta });
      }
    });
  });

  metas.forEach(meta => {
    meta.percentual = meta.avaliados ? Number(((meta.conformes / meta.avaliados) * 100).toFixed(1)) : null;
    meta.itens.forEach(item => {
      item.percentual = item.avaliados ? Number(((item.conformes / item.avaliados) * 100).toFixed(1)) : null;
    });
    meta.observacoes = meta.observacoes.slice(0, 3);
  });

  const totalAvaliado = geralConformes + geralNaoConformes;
  const conformidadeGeral = totalAvaliado ? Number(((geralConformes / totalAvaliado) * 100).toFixed(1)) : 0;

  const mesLimiteEvolucao = mesesFiltro.size
    ? Math.max(...Array.from(mesesFiltro).map(mesParaOrdem))
    : null;

  const evolucaoMensalMap = {};
  linhas
    .filter(row => !anosFiltro.size || anosFiltro.has(normalizarAno(row[3])))
    .filter(row => !unidadesFiltro.size || unidadesFiltro.has(getUnidade(row)))
    .filter(row => {
      if (mesLimiteEvolucao == null) return true;
      const ordemMesLinha = mesParaOrdem(normalizarMes(row[2]));
      return ordemMesLinha <= mesLimiteEvolucao;
    })
    .forEach(row => {
      const mes = normalizarMes(row[2]) || 'Sem mês';
      if (!evolucaoMensalMap[mes]) {
        evolucaoMensalMap[mes] = { conformes: 0, naoConformes: 0 };
      }

      META_DEF.forEach(meta => {
        meta.itens.forEach(item => {
          const valor = row[item.idx];
          if (ehSim(valor)) evolucaoMensalMap[mes].conformes++;
          else if (ehNao(valor)) evolucaoMensalMap[mes].naoConformes++;
        });
      });
    });

  const evolucaoMensal = Object.keys(evolucaoMensalMap)
    .sort(ordenarMeses)
    .map(mes => {
      const item = evolucaoMensalMap[mes];
      const total = item.conformes + item.naoConformes;
      return {
        mes: mes,
        percentual: total ? Number(((item.conformes / total) * 100).toFixed(1)) : 0
      };
    });

  const unidadesOrdenadas = Object.entries(porUnidade)
    .sort((a, b) => b[1] - a[1])
    .map(([nome, quantidade]) => ({ nome, quantidade }));

  aplicarExcecaoMeta4CentroCirurgico(metas, linhas, filtros, META_DEF);

  const metasCriticas = metas
    .slice()
    .sort((a, b) => a.percentual - b.percentual)
    .slice(0, 3)
    .map(meta => ({ codigo: meta.codigo, nome: meta.nome, percentual: meta.percentual }));

  const rankingSetoresConformidade = Object.values(linhasFiltradas.reduce((acc, row) => {
    const unidade = getUnidade(row);
    if (!acc[unidade]) {
      acc[unidade] = {
        setor: unidade,
        conformes: 0,
        naoConformes: 0,
        avaliados: 0,
        percentual: 0
      };
    }

    META_DEF.forEach(meta => {
      meta.itens.forEach(item => {
        const valor = row[item.idx];
        if (ehSim(valor)) {
          acc[unidade].conformes++;
          acc[unidade].avaliados++;
        } else if (ehNao(valor)) {
          acc[unidade].naoConformes++;
          acc[unidade].avaliados++;
        }
      });
    });

    return acc;
  }, {}))
    .map(item => ({
      setor: item.setor,
      conformes: item.conformes,
      naoConformes: item.naoConformes,
      avaliados: item.avaliados,
      percentual: item.avaliados ? Number(((item.conformes / item.avaliados) * 100).toFixed(1)) : 0
    }))
    .sort((a, b) => b.percentual - a.percentual || a.setor.localeCompare(b.setor, 'pt-BR'));

  const baseComparativaMelhorSetor = linhas
    .filter(row => !anosFiltro.size || anosFiltro.has(normalizarAno(row[3])))
    .filter(row => !mesesFiltro.size || mesesFiltro.has(normalizarMes(row[2])));

  const desempenhoSetorMeta = {};
  baseComparativaMelhorSetor.forEach(row => {
    const unidade = getUnidade(row);
    if (!desempenhoSetorMeta[unidade]) desempenhoSetorMeta[unidade] = {};

    META_DEF.forEach(metaDef => {
      if (!desempenhoSetorMeta[unidade][metaDef.nome]) {
        desempenhoSetorMeta[unidade][metaDef.nome] = { conformes: 0, avaliados: 0 };
      }
      metaDef.itens.forEach(itemDef => {
        const valor = row[itemDef.idx];
        if (ehSim(valor)) {
          desempenhoSetorMeta[unidade][metaDef.nome].conformes++;
          desempenhoSetorMeta[unidade][metaDef.nome].avaliados++;
        } else if (ehNao(valor)) {
          desempenhoSetorMeta[unidade][metaDef.nome].avaliados++;
        }
      });
    });
  });

  const melhoresSetoresPorMeta = {};
  META_DEF.forEach(metaDef => {
    const candidatos = Object.keys(desempenhoSetorMeta)
      .map(unidade => {
        const registro = desempenhoSetorMeta[unidade][metaDef.nome] || { conformes: 0, avaliados: 0 };
        const percentual = registro.avaliados ? Number(((registro.conformes / registro.avaliados) * 100).toFixed(1)) : null;
        return {
          setor: unidade,
          percentual: percentual,
          avaliados: registro.avaliados
        };
      })
      .filter(item => item.avaliados > 0 && item.percentual != null);

    if (!candidatos.length) {
      melhoresSetoresPorMeta[metaDef.nome] = { percentual: null, setores: [] };
      return;
    }

    const melhorPercentual = Math.max(...candidatos.map(item => item.percentual));
    melhoresSetoresPorMeta[metaDef.nome] = {
      percentual: melhorPercentual,
      setores: candidatos
        .filter(item => item.percentual === melhorPercentual)
        .map(item => item.setor)
        .sort((a, b) => a.localeCompare(b, 'pt-BR'))
    };
  });

  return {
    totalAvaliacoes: totalAvaliacoes,
    totalUnidades: unidadesOrdenadas.length,
    totalAvaliadores: Object.keys(avaliadores).length,
    totalComObservacao: totalComObservacao,
    totalComFoto: totalComFoto,
    metasSelecionadas: Object.keys(metasAcionadas).length,
    geralConformes: geralConformes,
    geralNaoConformes: geralNaoConformes,
    conformidadeGeral: conformidadeGeral,
    metaInstitucional: metaInstitucional,
    diferencaMeta: Number((conformidadeGeral - metaInstitucional).toFixed(1)),
    metas: metas,
    porUnidade: unidadesOrdenadas,
    rankingSetoresConformidade: rankingSetoresConformidade,
    melhoresSetoresPorMeta: melhoresSetoresPorMeta,
    evolucaoMensal: evolucaoMensal,
    metasCriticas: metasCriticas,
    observacoesGerais: observacoesGerais.slice(0, 5)
  };
}

function processarNotificacoes(ss, filtros, cfg) {
  cfg = cfg || obterConfig();
  const setClassCriticas = new Set((cfg.classificacoesMeta5Dias || CLASSIFICACOES_META_5_DIAS).map(normalizarTexto));

  const sh = ss.getSheetByName(ABA_NOTIFICA);
  const linhas = sh.getDataRange().getValues().slice(2);

  const desempenhoResposta = {
    meta5: criarResumoPrazoResposta(cfg.prazoMeta5Dias),
    meta10: criarResumoPrazoResposta(cfg.prazoMeta10Dias)
  };

  const anosFiltro = new Set((filtros.anos || []).map(normalizarAno).filter(Boolean));
  const mesesFiltro = new Set((filtros.meses || []).map(normalizarMes).filter(Boolean));
  const unidadesFiltro = new Set((filtros.unidades || []).map(item => String(item || '').trim()).filter(Boolean));

  const filtradas = linhas.filter(row => {
    const mes = normalizarMes(row[2]);
    const ano = normalizarAno(row[3]);
    const setor = String(row[6] || '').trim();

    if (!anosFiltro.size || !mesesFiltro.size || !unidadesFiltro.size) return false;
    if (!anosFiltro.has(ano)) return false;
    if (!mesesFiltro.has(mes)) return false;
    if (!unidadesFiltro.has(setor)) return false;
    return true;
  });

  const porTipo = {};
  const porSetor = {};
  const porNatureza = {};
  const porStatus = {};
  const porStatusResposta = {};

  let afetouSim = 0;
  let afetouNao = 0;
  let concluidas = 0;
  let pendentes = 0;

  filtradas.forEach(row => {
    const tipo = String(row[8] || '').trim() || 'Não informado';
    const setor = String(row[6] || '').trim() || 'Não informado';
    const natureza = String(row[10] || '').trim() || 'Não informado';
    const status = String(row[13] || '').trim() || 'Não informado';
    const statusResposta = String(row[15] || '').trim() || 'Não informado';
    const afetou = normalizarTexto(row[11]);

    incrementarMapa(porTipo, tipo);
    incrementarMapa(porSetor, setor);
    incrementarMapa(porNatureza, natureza);
    incrementarMapa(porStatus, status);
    incrementarMapa(porStatusResposta, statusResposta);

    const classificacao = normalizarTexto(row[8]);
    const dataClassificacao = converterEmData(row[14]);
    const dataResposta = converterEmData(row[16]);
    const diasResposta = calcularDiferencaDias(dataClassificacao, dataResposta);
    const grupoPrazo = setClassCriticas.has(classificacao) ? desempenhoResposta.meta5 : desempenhoResposta.meta10;

    atualizarResumoPrazoResposta(grupoPrazo, dataClassificacao, diasResposta);

    if (afetou === 'SIM') afetouSim++;
    else afetouNao++;

    if (normalizarTexto(status).indexOf('CONCLU') === 0) concluidas++;
    else pendentes++;
  });

  const tabela = filtradas.slice(0, 12).map(row => ({
    numeroNotivisa: row[0],
    link: row[1],
    mes: normalizarMes(row[2]),
    ano: row[3],
    codigo: row[4],
    dataOcorrencia: formatarData(row[5]),
    setorNotificado: row[6],
    localOcorrencia: row[7],
    tipoClassificacao: row[8],
    codInteracao: row[9],
    natureza: row[10],
    afetouPaciente: row[11],
    prontuario: row[12],
    status: row[13],
    dataClassificacao: formatarData(row[14]),
    statusResposta: row[15],
    dataResposta: formatarData(row[16]),
    dataConclusao: formatarData(row[17])
  }));

  return {
    total: filtradas.length,
    afetouSim: afetouSim,
    afetouNao: afetouNao,
    percentualAfetouPaciente: filtradas.length ? Number(((afetouSim / filtradas.length) * 100).toFixed(1)) : 0,
    concluidas: concluidas,
    pendentes: pendentes,
    totalSetores: Object.keys(porSetor).length,
    porTipo: ordenarMapaPorValor(porTipo),
    porSetor: ordenarMapaPorValor(porSetor),
    porNatureza: ordenarMapaPorValor(porNatureza),
    porStatus: ordenarMapaPorValor(porStatus),
    porStatusResposta: ordenarMapaPorValor(porStatusResposta),
    desempenhoResposta: {
      meta5: finalizarResumoPrazoResposta(desempenhoResposta.meta5),
      meta10: finalizarResumoPrazoResposta(desempenhoResposta.meta10)
    },
    tabela: tabela
  };
}

function criarResumoPrazoResposta(metaDias) {
  return {
    metaDias: metaDias,
    dentroPrazo: 0,
    foraPrazo: 0,
    totalComResposta: 0,
    somaDias: 0,
    mediaDias: 0
  };
}

function atualizarResumoPrazoResposta(resumo, dataClassificacao, diasResposta) {
  if (!resumo || !dataClassificacao) return;

  if (diasResposta == null) {
    return;
  }

  resumo.totalComResposta++;
  resumo.somaDias += diasResposta;

  if (diasResposta <= resumo.metaDias) resumo.dentroPrazo++;
  else resumo.foraPrazo++;
}

function finalizarResumoPrazoResposta(resumo) {
  const base = resumo || criarResumoPrazoResposta(0);
  const total = Number(base.totalComResposta || 0);
  return {
    metaDias: base.metaDias,
    dentroPrazo: Number(base.dentroPrazo || 0),
    foraPrazo: Number(base.foraPrazo || 0),
    totalComResposta: total,
    mediaDias: total ? Number((base.somaDias / total).toFixed(1)) : 0
  };
}

function ordenarMapaPorValor(mapa) {
  const ordenado = {};
  Object.keys(mapa)
    .sort((a, b) => mapa[b] - mapa[a] || a.localeCompare(b, 'pt-BR'))
    .forEach(chave => {
      ordenado[chave] = mapa[chave];
    });
  return ordenado;
}

function formatarData(valor) {
  if (!valor) return '';
  if (Object.prototype.toString.call(valor) === '[object Date]' && !Number.isNaN(valor.getTime())) {
    return Utilities.formatDate(valor, FUSO_HORARIO, 'dd/MM/yyyy');
  }
  return String(valor).trim();
}

function converterEmData(valor) {
  if (!valor) return null;

  if (Object.prototype.toString.call(valor) === '[object Date]' && !Number.isNaN(valor.getTime())) {
    return new Date(valor.getFullYear(), valor.getMonth(), valor.getDate());
  }

  const texto = String(valor).trim();
  if (!texto) return null;

  const partes = texto.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (partes) {
    return new Date(Number(partes[3]), Number(partes[2]) - 1, Number(partes[1]));
  }

  const data = new Date(texto);
  if (Number.isNaN(data.getTime())) return null;

  return new Date(data.getFullYear(), data.getMonth(), data.getDate());
}

function calcularDiferencaDias(dataInicial, dataFinal) {
  if (!dataInicial || !dataFinal) return null;

  const inicio = new Date(dataInicial.getFullYear(), dataInicial.getMonth(), dataInicial.getDate());
  const fim = new Date(dataFinal.getFullYear(), dataFinal.getMonth(), dataFinal.getDate());
  const diferenca = Math.round((fim.getTime() - inicio.getTime()) / 86400000);

  return diferenca < 0 ? 0 : diferenca;
}

const RELATORIO_CRP_CAMPOS_FIXOS = [
  { chave: 'ano', letra: 'A', idx: 0, nome: 'Ano' },
  { chave: 'mes', letra: 'B', idx: 1, nome: 'Mês' },
  { chave: 'avaliacaoTerminada', letra: 'C', idx: 2, nome: 'Avaliação Terminada? Se não, falta avaliação de:' },
  { chave: 'enviadoEm', letra: 'D', idx: 3, nome: 'DATA E HORA DE ENVIO DO FORMS' },
  { chave: 'email', letra: 'E', idx: 4, nome: 'Endereço de e-mail' },
  { chave: 'prontuario', letra: 'F', idx: 5, nome: 'Inserir nº do prontuário:' },
  { chave: 'unidade', letra: 'G', idx: 6, nome: 'Unidade:' },
  { chave: 'eixo', letra: 'H', idx: 7, nome: 'Eixo' },
  { chave: 'paciente', letra: 'I', idx: 8, nome: 'Nome do paciente (completo e sem abreviaturas)' },
  { chave: 'categoria', letra: 'J', idx: 9, nome: 'Categoria de avaliação' },
  { chave: 'satisfacao', letra: 'K', idx: 10, nome: 'NÍVEL DE SATISFAÇÃO' }
];

const RELATORIO_CRP_INDICADORES = [
  'REG. INTER',
  'ID.PACIENTE',
  'LEGIBILIDADE',
  'Admissão Médica',
  'Admissão de Enfermagem',
  'Controle Hemodinâmico',
  'Evolução Médica',
  'Evolução de Enfermagem',
  'Plano Terapêutico',
  'Transferência Interna',
  'Termo de Consentimento para exames de Imagem e laudo',
  'Registro de Transporte',
  'Relatório de Alta ou Óbito ou SVO ou IML',
  'Termo de Consentimento Cirúrgico',
  'Formulário da SAEP',
  'Evolução pós-cirúrgica',
  'Descrição Cirúrgica',
  'Termo de Consentimento Anestésico',
  'Formulário de avaliação pré anestésica',
  'Ficha de Anestesia',
  'Ficha de Avaliação Social',
  'Avaliação Nutricional ou Diagnóstico de Risco nutricional',
  'Admissão de Fisioterapia',
  'Evolução de Fisioterapia',
  'Avaliação Admissional Fonoaudiológica',
  'Evolução Fonoaudiológica',
  'Conciliação Medicamentosa',
  'Admissão Psicologia',
  'Evolução Psicologia'
];

const RELATORIO_CRP_CAMPOS_RESULTADO = [
  { chave: 'numerador', letra: 'AO', idx: 40, nome: 'NUMERADOR' },
  { chave: 'denominador', letra: 'AP', idx: 41, nome: 'DENOMINADOR' },
  { chave: 'resultado', letra: 'AQ', idx: 42, nome: 'RESULTADO' }
];

const RELATORIO_CRP_ESTRUTURA = RELATORIO_CRP_CAMPOS_FIXOS
  .concat(RELATORIO_CRP_INDICADORES.map((nome, offset) => ({
    chave: `indicador${offset + 1}`,
    letra: colunaParaLetra(11 + offset),
    idx: 11 + offset,
    nome: nome,
    indicador: true
  })))
  .concat(RELATORIO_CRP_CAMPOS_RESULTADO);

const RELATORIO_CRP_COLUNAS = RELATORIO_CRP_ESTRUTURA.reduce((acc, campo) => {
  acc[campo.chave] = campo.idx;
  return acc;
}, {
  inicioIndicadores: 11,
  fimIndicadores: 39
});

const RELATORIO_ABAS_POR_COMISSAO = {
  CRP: [ABA_RELATORIO_CRP, 'BASE_DADOS(NAOEDITAR)', 'BASE CRP', 'CRP - BASE', 'RELATÓRIO CRP', 'RELATORIO CRP'],
  CRO: [ABA_RELATORIO_CRO, 'BASE CRO', 'CRO - BASE', 'RELATÓRIO CRO', 'RELATORIO CRO']
};

function extrairFiltrosRelatorios(params) {
  const bruto = params || {};
  return {
    comissao: normalizarComissaoRelatorio(bruto.comissao || bruto.tipo || 'CRP'),
    anos: extrairListaFiltros(bruto.anos || bruto.ano || '', normalizarAno),
    meses: extrairListaFiltros(bruto.meses || bruto.mes || '', normalizarMes),
    unidades: extrairListaFiltros(bruto.unidades || bruto.unidade || '', value => String(value || '').trim()),
    eixos: extrairListaFiltros(bruto.eixos || bruto.eixo || '', value => String(value || '').trim()),
    categorias: extrairListaFiltros(bruto.categorias || bruto.categoria || '', value => String(value || '').trim()),
    satisfacoes: extrairListaFiltros(bruto.satisfacoes || bruto.satisfacao || '', value => String(value || '').trim()),
    status: extrairListaFiltros(bruto.status || bruto.avaliacaoTerminada || '', value => String(value || '').trim())
  };
}

function normalizarComissaoRelatorio(valor) {
  const texto = normalizarTexto(valor);
  if (texto === 'CRO') return 'CRO';
  return 'CRP';
}

function obterAbaRelatorio(ss, comissao) {
  const nomes = RELATORIO_ABAS_POR_COMISSAO[normalizarComissaoRelatorio(comissao)] || RELATORIO_ABAS_POR_COMISSAO.CRP;
  for (let i = 0; i < nomes.length; i++) {
    const sh = ss.getSheetByName(nomes[i]);
    if (sh) return sh;
  }
  return null;
}

function obterLinhasRelatorio(ss, comissao) {
  const sh = obterAbaRelatorio(ss, comissao);
  if (!sh) {
    return { abaEncontrada: '', headers: [], linhas: [], estrutura: RELATORIO_CRP_ESTRUTURA, alertasEstrutura: ['Aba da CRP não encontrada.'] };
  }
  const range = sh.getDataRange();
  const values = range.getValues();
  const headers = values.length ? values[0].map(item => String(item || '').trim()) : [];
  const comissaoNormalizada = normalizarComissaoRelatorio(comissao);

  return {
    abaEncontrada: sh.getName(),
    headers: headers,
    linhas: values.slice(1).filter(row => row.some(cell => String(cell == null ? '' : cell).trim() !== '')),
    estrutura: comissaoNormalizada === 'CRP' ? RELATORIO_CRP_ESTRUTURA : [],
    alertasEstrutura: comissaoNormalizada === 'CRP' ? validarEstruturaCRP(headers) : []
  };
}

function obterCampoCRPPorIndice(idx) {
  return RELATORIO_CRP_ESTRUTURA.find(campo => campo.idx === idx) || null;
}

function validarEstruturaCRP(headers) {
  const alertas = [];
  const totalColunasEsperado = RELATORIO_CRP_COLUNAS.resultado + 1;

  if ((headers || []).length < totalColunasEsperado) {
    alertas.push(`A base CRP deve ir de A até AQ (${totalColunasEsperado} colunas), mas o cabeçalho possui ${(headers || []).length} colunas preenchidas.`);
  }

  RELATORIO_CRP_ESTRUTURA.forEach(campo => {
    const encontrado = String((headers || [])[campo.idx] || '').trim();
    if (!encontrado) {
      alertas.push(`Coluna ${campo.letra} sem cabeçalho. Esperado: ${campo.nome}.`);
      return;
    }

    if (normalizarCabecalho(encontrado) !== normalizarCabecalho(campo.nome)) {
      alertas.push(`Coluna ${campo.letra}: encontrado "${encontrado}"; esperado "${campo.nome}".`);
    }
  });

  return alertas;
}

function getRelatoriosFiltros(ss) {
  const base = obterLinhasRelatorio(ss, 'CRP');
  return coletarFiltrosRelatorio(base.linhas, base.abaEncontrada);
}

function coletarFiltrosRelatorio(linhas, abaEncontrada) {
  const col = RELATORIO_CRP_COLUNAS;
  const filtros = {
    comissoes: [{ codigo: 'CRP', nome: 'CRP', disponivel: true }, { codigo: 'CRO', nome: 'CRO', disponivel: false }],
    abaEncontrada: abaEncontrada || '',
    anos: {},
    meses: {},
    unidades: {},
    eixos: {},
    categorias: {},
    satisfacoes: {},
    status: {}
  };

  linhas.forEach(row => {
    const ano = normalizarAno(row[col.ano]);
    const mes = normalizarMes(row[col.mes]);
    const unidade = String(row[col.unidade] || '').trim() || 'Não informado';
    const eixo = String(row[col.eixo] || '').trim() || 'Não informado';
    const categoria = String(row[col.categoria] || '').trim() || 'Não informado';
    const satisfacao = String(row[col.satisfacao] || '').trim() || 'Não informado';
    const status = String(row[col.avaliacaoTerminada] || '').trim() || 'Não informado';

    if (ano) filtros.anos[ano] = true;
    if (mes) filtros.meses[mes] = true;
    if (unidade) filtros.unidades[unidade] = true;
    if (eixo) filtros.eixos[eixo] = true;
    if (categoria) filtros.categorias[categoria] = true;
    if (satisfacao) filtros.satisfacoes[satisfacao] = true;
    if (status) filtros.status[status] = true;
  });

  return {
    comissoes: filtros.comissoes,
    abaEncontrada: filtros.abaEncontrada,
    anos: Object.keys(filtros.anos).sort((a, b) => Number(a) - Number(b) || a.localeCompare(b, 'pt-BR')),
    meses: Object.keys(filtros.meses).sort(ordenarMeses),
    unidades: Object.keys(filtros.unidades).sort((a, b) => a.localeCompare(b, 'pt-BR')),
    eixos: Object.keys(filtros.eixos).sort((a, b) => a.localeCompare(b, 'pt-BR')),
    categorias: Object.keys(filtros.categorias).sort((a, b) => a.localeCompare(b, 'pt-BR')),
    satisfacoes: Object.keys(filtros.satisfacoes).sort((a, b) => a.localeCompare(b, 'pt-BR')),
    status: Object.keys(filtros.status).sort((a, b) => a.localeCompare(b, 'pt-BR'))
  };
}

function montarPayloadRelatorios(ss, filtros) {
  const filtrosAplicados = extrairFiltrosRelatorios(filtros || {});
  return {
    success: true,
    geradoEm: Utilities.formatDate(new Date(), FUSO_HORARIO, "dd/MM/yyyy 'às' HH:mm"),
    filtros: getRelatoriosFiltros(ss),
    aplicado: filtrosAplicados,
    relatorio: processarRelatorioCRP(ss, filtrosAplicados)
  };
}

function obterPayloadRelatorios(filtros) {
  return executarRota('rpc-relatorios', () => {
    return executarComPlanilha('relatorios', ss => montarPayloadRelatorios(ss, extrairFiltrosRelatorios(filtros || {})));
  });
}

function atendeFiltroRelatorio(valor, setFiltro, normalizerFn) {
  if (!setFiltro || !setFiltro.size) return true;
  const valorNormalizado = normalizerFn ? normalizerFn(valor) : String(valor || '').trim();
  return setFiltro.has(valorNormalizado);
}

function classificarValorIndicador(valor) {
  const texto = normalizarTexto(valor);
  if (!texto || texto === '-') return 'vazio';
  if (texto === 'CONFORME') return 'conforme';
  if (texto === 'NÃO CONFORME' || texto === 'NAO CONFORME') return 'naoConforme';
  if (texto === 'NÃO SE APLICA' || texto === 'NAO SE APLICA' || texto === 'N/A' || texto === 'NA') return 'naoSeAplica';
  return 'outro';
}

function nomeIndicadorRelatorio(header, fallback) {
  const texto = String(header || '').replace(/\s+/g, ' ').trim();
  if (!texto) return fallback;
  return texto.split(/\s{2,}| - /)[0].trim() || texto.substring(0, 90);
}

function percentualRelatorio(conformes, naoConformes) {
  const denominador = Number(conformes || 0) + Number(naoConformes || 0);
  return denominador ? Number(((Number(conformes || 0) / denominador) * 100).toFixed(1)) : null;
}

function processarRelatorioCRP(ss, filtros) {
  const base = obterLinhasRelatorio(ss, filtros.comissao || 'CRP');
  const col = RELATORIO_CRP_COLUNAS;
  const anosFiltro = new Set((filtros.anos || []).map(normalizarAno).filter(Boolean));
  const mesesFiltro = new Set((filtros.meses || []).map(normalizarMes).filter(Boolean));
  const unidadesFiltro = new Set((filtros.unidades || []).map(item => String(item || '').trim()).filter(Boolean));
  const eixosFiltro = new Set((filtros.eixos || []).map(item => String(item || '').trim()).filter(Boolean));
  const categoriasFiltro = new Set((filtros.categorias || []).map(item => String(item || '').trim()).filter(Boolean));
  const satisfacoesFiltro = new Set((filtros.satisfacoes || []).map(item => String(item || '').trim()).filter(Boolean));
  const statusFiltro = new Set((filtros.status || []).map(item => String(item || '').trim()).filter(Boolean));

  const linhasFiltradas = base.linhas.filter(row => {
    if (!atendeFiltroRelatorio(row[col.ano], anosFiltro, normalizarAno)) return false;
    if (!atendeFiltroRelatorio(row[col.mes], mesesFiltro, normalizarMes)) return false;
    if (!atendeFiltroRelatorio(String(row[col.unidade] || '').trim() || 'Não informado', unidadesFiltro)) return false;
    if (!atendeFiltroRelatorio(String(row[col.eixo] || '').trim() || 'Não informado', eixosFiltro)) return false;
    if (!atendeFiltroRelatorio(String(row[col.categoria] || '').trim() || 'Não informado', categoriasFiltro)) return false;
    if (!atendeFiltroRelatorio(String(row[col.satisfacao] || '').trim() || 'Não informado', satisfacoesFiltro)) return false;
    if (!atendeFiltroRelatorio(String(row[col.avaliacaoTerminada] || '').trim() || 'Não informado', statusFiltro)) return false;
    return true;
  });

  const indicadores = [];
  for (let idx = col.inicioIndicadores; idx <= col.fimIndicadores; idx++) {
    const campo = obterCampoCRPPorIndice(idx);
    indicadores.push({
      idx: idx,
      coluna: campo ? campo.letra : colunaParaLetra(idx),
      nome: campo ? campo.nome : nomeIndicadorRelatorio(base.headers[idx], `Indicador ${idx + 1}`),
      cabecalhoPlanilha: nomeIndicadorRelatorio(base.headers[idx], campo ? campo.nome : `Indicador ${idx + 1}`),
      conformes: 0,
      naoConformes: 0,
      naoSeAplica: 0,
      vazios: 0,
      outros: 0,
      avaliados: 0,
      percentual: null
    });
  }

  const porUnidade = {};
  const porEixo = {};
  const porCategoria = {};
  const porSatisfacao = {};
  const porStatus = {};
  const evolucaoMap = {};
  let conformes = 0;
  let naoConformes = 0;
  let naoSeAplica = 0;
  let vazios = 0;
  let outros = 0;
  let numeradorPlanilha = 0;
  let denominadorPlanilha = 0;
  let somaResultadoPlanilha = 0;
  let totalResultadoPlanilha = 0;

  linhasFiltradas.forEach(row => {
    const unidade = String(row[col.unidade] || '').trim() || 'Não informado';
    const eixo = String(row[col.eixo] || '').trim() || 'Não informado';
    const categoria = String(row[col.categoria] || '').trim() || 'Não informado';
    const satisfacao = String(row[col.satisfacao] || '').trim() || 'Não informado';
    const status = String(row[col.avaliacaoTerminada] || '').trim() || 'Não informado';
    const mes = normalizarMes(row[col.mes]) || 'Sem mês';

    incrementarMapa(porUnidade, unidade);
    incrementarMapa(porEixo, eixo);
    incrementarMapa(porCategoria, categoria);
    incrementarMapa(porSatisfacao, satisfacao);
    incrementarMapa(porStatus, status);
    if (!evolucaoMap[mes]) evolucaoMap[mes] = { conformes: 0, naoConformes: 0 };

    const num = Number(row[col.numerador]);
    const den = Number(row[col.denominador]);
    const res = Number(row[col.resultado]);
    if (!Number.isNaN(num)) numeradorPlanilha += num;
    if (!Number.isNaN(den)) denominadorPlanilha += den;
    if (!Number.isNaN(res)) {
      somaResultadoPlanilha += res > 1 ? res : res * 100;
      totalResultadoPlanilha++;
    }

    indicadores.forEach(indicador => {
      const classe = classificarValorIndicador(row[indicador.idx]);
      if (classe === 'conforme') {
        indicador.conformes++;
        indicador.avaliados++;
        conformes++;
        evolucaoMap[mes].conformes++;
      } else if (classe === 'naoConforme') {
        indicador.naoConformes++;
        indicador.avaliados++;
        naoConformes++;
        evolucaoMap[mes].naoConformes++;
      } else if (classe === 'naoSeAplica') {
        indicador.naoSeAplica++;
        naoSeAplica++;
      } else if (classe === 'vazio') {
        indicador.vazios++;
        vazios++;
      } else {
        indicador.outros++;
        outros++;
      }
    });
  });

  indicadores.forEach(item => {
    item.percentual = percentualRelatorio(item.conformes, item.naoConformes);
  });

  const totalAuditavel = conformes + naoConformes;
  const conformidadeGeral = percentualRelatorio(conformes, naoConformes) || 0;
  const indicadoresOrdenados = indicadores.slice().sort((a, b) => {
    const pa = a.percentual == null ? 101 : a.percentual;
    const pb = b.percentual == null ? 101 : b.percentual;
    return pa - pb || b.naoConformes - a.naoConformes || a.nome.localeCompare(b.nome, 'pt-BR');
  });

  const evolucaoMensal = Object.keys(evolucaoMap).sort(ordenarMeses).map(mes => ({
    mes: mes,
    conformes: evolucaoMap[mes].conformes,
    naoConformes: evolucaoMap[mes].naoConformes,
    percentual: percentualRelatorio(evolucaoMap[mes].conformes, evolucaoMap[mes].naoConformes) || 0
  }));

  const rankingSetores = Object.keys(porUnidade).sort((a, b) => a.localeCompare(b, 'pt-BR')).map(setor => {
    const resumo = linhasFiltradas.filter(row => (String(row[col.unidade] || '').trim() || 'Não informado') === setor).reduce((acc, row) => {
      indicadores.forEach(ind => {
        const classe = classificarValorIndicador(row[ind.idx]);
        if (classe === 'conforme') acc.conformes++;
        if (classe === 'naoConforme') acc.naoConformes++;
      });
      return acc;
    }, { conformes: 0, naoConformes: 0 });
    return {
      setor: setor,
      avaliacoes: porUnidade[setor],
      conformes: resumo.conformes,
      naoConformes: resumo.naoConformes,
      percentual: percentualRelatorio(resumo.conformes, resumo.naoConformes)
    };
  }).sort((a, b) => (a.percentual == null ? 101 : a.percentual) - (b.percentual == null ? 101 : b.percentual));

  const amostra = linhasFiltradas.slice(0, 25).map(row => ({
    prontuario: String(row[col.prontuario] || '').trim(),
    unidade: String(row[col.unidade] || '').trim(),
    eixo: String(row[col.eixo] || '').trim(),
    categoria: String(row[col.categoria] || '').trim(),
    satisfacao: String(row[col.satisfacao] || '').trim(),
    status: String(row[col.avaliacaoTerminada] || '').trim(),
    resultado: row[col.resultado]
  }));

  return {
    comissao: normalizarComissaoRelatorio(filtros.comissao),
    abaEncontrada: base.abaEncontrada,
    totalRegistrosBase: base.linhas.length,
    totalAvaliacoes: linhasFiltradas.length,
    totalAuditavel: totalAuditavel,
    conformes: conformes,
    naoConformes: naoConformes,
    naoSeAplica: naoSeAplica,
    vazios: vazios,
    outros: outros,
    conformidadeGeral: conformidadeGeral,
    metaInstitucional: META_INSTITUCIONAL,
    diferencaMeta: Number((conformidadeGeral - META_INSTITUCIONAL).toFixed(1)),
    numeradorPlanilha: numeradorPlanilha,
    denominadorPlanilha: denominadorPlanilha,
    resultadoPlanilha: denominadorPlanilha ? Number(((numeradorPlanilha / denominadorPlanilha) * 100).toFixed(1)) : (totalResultadoPlanilha ? Number((somaResultadoPlanilha / totalResultadoPlanilha).toFixed(1)) : null),
    estruturaColunas: base.estrutura || RELATORIO_CRP_ESTRUTURA,
    alertasEstrutura: base.alertasEstrutura || [],
    indicadores: indicadores,
    indicadoresCriticos: indicadoresOrdenados.filter(item => item.avaliados > 0).slice(0, 8),
    indicadoresExcelencia: indicadores.slice().filter(item => item.avaliados > 0).sort((a, b) => b.percentual - a.percentual || b.avaliados - a.avaliados).slice(0, 5),
    porUnidade: ordenarMapaPorValor(porUnidade),
    porEixo: ordenarMapaPorValor(porEixo),
    porCategoria: ordenarMapaPorValor(porCategoria),
    porSatisfacao: ordenarMapaPorValor(porSatisfacao),
    porStatus: ordenarMapaPorValor(porStatus),
    rankingSetores: rankingSetores,
    evolucaoMensal: evolucaoMensal,
    amostra: amostra
  };
}

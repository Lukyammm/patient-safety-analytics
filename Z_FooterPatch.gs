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
    const telaInicial = pagina === 'RELATORIOS' || pagina === 'RELATORIOS' ? 'relatorios' : 'boletim';
    const titulo = telaInicial === 'relatorios' ? 'Relatorios COSEP' : 'Boletim COSEP';

    const template = HtmlService.createTemplateFromFile('Index');
    template.appUrl = ScriptApp.getService().getUrl();
    template.currentPage = telaInicial;

    const html = aplicarCorrecaoRodapePrimeiraPagina(template.evaluate().getContent());

    return HtmlService
      .createHtmlOutput(html)
      .setTitle(titulo)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } catch (erro) {
    registrarErro('html-route', erro);
    return HtmlService
      .createHtmlOutput('<!doctype html><meta charset="utf-8"><title>Erro</title><body style="font-family:Inter,Arial,sans-serif;padding:32px;background:#f8fafc;color:#0f172a"><h1>Nao foi possivel abrir o aplicativo.</h1><p>Tente novamente em instantes ou acione o administrador.</p></body>')
      .setTitle('Erro ao abrir aplicativo');
  }
}

function aplicarCorrecaoRodapePrimeiraPagina(html) {
  const cssAtual = `    #pagina-cosep {
      display: grid;
      align-content: start;
      overflow: visible;
    }

    #pagina-cosep .footer-note {
      margin-top: 0;
    }
`;

  const cssCorrigido = `    #pagina-cosep {
      display: grid;
      align-content: start;
      position: relative;
      padding-bottom: 24mm;
      overflow: visible;
    }

    #pagina-cosep .footer-note {
      position: absolute;
      left: 10mm;
      right: 10mm;
      bottom: 10mm;
      margin-top: 0;
    }
`;

  return String(html || '').replace(cssAtual, cssCorrigido);
}

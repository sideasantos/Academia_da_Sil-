// ============ BIBLIOTECA DE EXERCÍCIOS ============
const BIBLIOTECA = [
  // QUADRÍCEPS
  { id:'leg_press_45', nome:'Leg press 45°', grupo:'Quadríceps', tipo:'maquina', img:'leg_press_45.jpg' },
  { id:'cadeira_extensora', nome:'Cadeira extensora', grupo:'Quadríceps', tipo:'maquina', img:'cadeira_extensora.jpg' },
  { id:'hack_squat', nome:'Hack squat', grupo:'Quadríceps', tipo:'maquina', img:'hack_squat.jpg' },
  { id:'agachamento_livre', nome:'Agachamento livre com barra', grupo:'Quadríceps', tipo:'livre', img:'agachamento_livre.jpg' },
  { id:'afundo_halteres', nome:'Afundo com halteres', grupo:'Quadríceps', tipo:'livre', img:'afundo_halteres.jpg' },
  { id:'agachamento_bulgaro', nome:'Agachamento búlgaro', grupo:'Quadríceps', tipo:'livre', img:'agachamento_bulgaro.jpg' },
  { id:'agachamento_smith', nome:'Agachamento Smith', grupo:'Quadríceps', tipo:'maquina', img:'agachamento_smith.jpg' },
  { id:'passada_caminhando', nome:'Passada caminhando', grupo:'Quadríceps', tipo:'livre', img:'passada_caminhando.jpg' },

  // COSTAS
  { id:'puxada_frontal', nome:'Puxada frontal na polia', grupo:'Costas', tipo:'maquina', img:'puxada_frontal.jpg' },
  { id:'remada_baixa', nome:'Remada baixa na polia', grupo:'Costas', tipo:'maquina', img:'remada_baixa.jpg' },
  { id:'remada_curvada', nome:'Remada curvada com barra', grupo:'Costas', tipo:'livre', img:'remada_curvada.jpg' },
  { id:'remada_unilateral', nome:'Remada unilateral com halter', grupo:'Costas', tipo:'livre', img:'remada_unilateral.jpg' },
  { id:'puxada_supinada', nome:'Puxada supinada', grupo:'Costas', tipo:'maquina', img:'puxada_supinada.jpg' },
  { id:'pulldown', nome:'Pull-down articulado', grupo:'Costas', tipo:'maquina', img:'pulldown.jpg' },
  { id:'remada_cavalinho', nome:'Remada cavalinho', grupo:'Costas', tipo:'maquina', img:'remada_cavalinho.jpg' },
  { id:'barra_fixa', nome:'Barra fixa (ou assistida)', grupo:'Costas', tipo:'livre', img:'barra_fixa.jpg' },

  // BÍCEPS
  { id:'rosca_direta', nome:'Rosca direta com barra', grupo:'Bíceps', tipo:'livre', img:'rosca_direta.jpg' },
  { id:'rosca_alternada', nome:'Rosca alternada com halteres', grupo:'Bíceps', tipo:'livre', img:'rosca_alternada.jpg' },
  { id:'rosca_scott', nome:'Rosca Scott', grupo:'Bíceps', tipo:'maquina', img:'rosca_scott.jpg' },
  { id:'rosca_martelo', nome:'Rosca martelo', grupo:'Bíceps', tipo:'livre', img:'rosca_martelo.jpg' },
  { id:'rosca_polia', nome:'Rosca na polia', grupo:'Bíceps', tipo:'maquina', img:'rosca_polia.jpg' },

  // POSTERIOR + GLÚTEO
  { id:'mesa_flexora', nome:'Mesa flexora', grupo:'Posterior/Glúteo', tipo:'maquina', img:'mesa_flexora.jpg' },
  { id:'cadeira_flexora', nome:'Cadeira flexora', grupo:'Posterior/Glúteo', tipo:'maquina', img:'cadeira_flexora.jpg' },
  { id:'stiff', nome:'Stiff com barra', grupo:'Posterior/Glúteo', tipo:'livre', img:'stiff.jpg' },
  { id:'elevacao_pelvica', nome:'Elevação pélvica com barra', grupo:'Posterior/Glúteo', tipo:'livre', img:'elevacao_pelvica.jpg' },
  { id:'hip_thrust', nome:'Hip thrust na máquina', grupo:'Posterior/Glúteo', tipo:'maquina', img:'hip_thrust.jpg' },
  { id:'coice_polia', nome:'Coice na polia', grupo:'Posterior/Glúteo', tipo:'maquina', img:'coice_polia.jpg' },
  { id:'abducao', nome:'Abdução de quadril na máquina', grupo:'Posterior/Glúteo', tipo:'maquina', img:'abducao.jpg' },
  { id:'gluteo_4apoios', nome:'Glúteo 4 apoios', grupo:'Posterior/Glúteo', tipo:'livre', img:'gluteo_4apoios.jpg' },

  // PEITO
  { id:'supino_reto', nome:'Supino reto com barra', grupo:'Peito', tipo:'livre', img:'supino_reto.jpg' },
  { id:'supino_inclinado', nome:'Supino inclinado com halteres', grupo:'Peito', tipo:'livre', img:'supino_inclinado.jpg' },
  { id:'supino_maquina', nome:'Supino máquina', grupo:'Peito', tipo:'maquina', img:'supino_maquina.jpg' },
  { id:'crucifixo_polia', nome:'Crucifixo na polia', grupo:'Peito', tipo:'maquina', img:'crucifixo_polia.jpg' },
  { id:'peck_deck', nome:'Peck deck (voador)', grupo:'Peito', tipo:'maquina', img:'peck_deck.jpg' },
  { id:'crossover', nome:'Crossover', grupo:'Peito', tipo:'maquina', img:'crossover.jpg' },
  { id:'flexao', nome:'Flexão de braço', grupo:'Peito', tipo:'livre', img:'flexao.jpg' },
  { id:'supino_declinado', nome:'Supino declinado', grupo:'Peito', tipo:'livre', img:'supino_declinado.jpg' },

  // OMBRO
  { id:'desenvolvimento_halteres', nome:'Desenvolvimento com halteres', grupo:'Ombro', tipo:'livre', img:'desenvolvimento_halteres.jpg' },
  { id:'desenvolvimento_maquina', nome:'Desenvolvimento máquina', grupo:'Ombro', tipo:'maquina', img:'desenvolvimento_maquina.jpg' },
  { id:'elevacao_lateral', nome:'Elevação lateral com halteres', grupo:'Ombro', tipo:'livre', img:'elevacao_lateral.jpg' },
  { id:'elevacao_lateral_polia', nome:'Elevação lateral na polia', grupo:'Ombro', tipo:'maquina', img:'elevacao_lateral_polia.jpg' },
  { id:'elevacao_frontal', nome:'Elevação frontal', grupo:'Ombro', tipo:'livre', img:'elevacao_frontal.jpg' },
  { id:'face_pull', nome:'Face pull', grupo:'Ombro', tipo:'maquina', img:'face_pull.jpg' },
  { id:'crucifixo_inverso', nome:'Crucifixo inverso (peck deck)', grupo:'Ombro', tipo:'maquina', img:'crucifixo_inverso.jpg' },

  // TRÍCEPS
  { id:'triceps_corda', nome:'Tríceps na polia com corda', grupo:'Tríceps', tipo:'maquina', img:'triceps_corda.jpg' },
  { id:'triceps_testa', nome:'Tríceps testa com barra', grupo:'Tríceps', tipo:'livre', img:'triceps_testa.jpg' },
  { id:'triceps_frances', nome:'Tríceps francês', grupo:'Tríceps', tipo:'livre', img:'triceps_frances.jpg' },
  { id:'triceps_coice', nome:'Tríceps coice com halter', grupo:'Tríceps', tipo:'livre', img:'triceps_coice.jpg' },
  { id:'mergulho_banco', nome:'Mergulho no banco', grupo:'Tríceps', tipo:'livre', img:'mergulho_banco.jpg' },
  { id:'triceps_maquina', nome:'Tríceps máquina', grupo:'Tríceps', tipo:'maquina', img:'triceps_maquina.jpg' },

  // PANTURRILHA
  { id:'panturrilha_pe', nome:'Panturrilha em pé na máquina', grupo:'Panturrilha', tipo:'maquina', img:'panturrilha_pe.jpg' },
  { id:'panturrilha_sentada', nome:'Panturrilha sentada', grupo:'Panturrilha', tipo:'maquina', img:'panturrilha_sentada.jpg' },
  { id:'panturrilha_leg', nome:'Panturrilha no leg press', grupo:'Panturrilha', tipo:'maquina', img:'panturrilha_leg.jpg' },
  { id:'panturrilha_halteres', nome:'Panturrilha livre com halteres', grupo:'Panturrilha', tipo:'livre', img:'panturrilha_halteres.jpg' },
  { id:'panturrilha_step', nome:'Panturrilha no step (unilateral)', grupo:'Panturrilha', tipo:'livre', img:'panturrilha_step.jpg' }
];

// ============ PROGRAMA PADRÃO (4 DIAS) ============
const PROGRAMA_PADRAO = {
  nome: 'Programa Inicial',
  dias: [
    { nome:'Dia 1 — Quadríceps', exercicios:['leg_press_45','cadeira_extensora','agachamento_bulgaro','hack_squat'], panturrilha:['panturrilha_pe','panturrilha_sentada'] },
    { nome:'Dia 2 — Costas + Bíceps', exercicios:['puxada_frontal','remada_baixa','remada_curvada','rosca_direta'], panturrilha:['panturrilha_pe','panturrilha_leg'] },
    { nome:'Dia 3 — Posterior + Glúteo', exercicios:['mesa_flexora','stiff','elevacao_pelvica','hip_thrust'], panturrilha:['panturrilha_sentada','panturrilha_halteres'] },
    { nome:'Dia 4 — Peito + Ombro + Tríceps', exercicios:['supino_reto','supino_inclinado','desenvolvimento_halteres','elevacao_lateral'], panturrilha:['panturrilha_pe','panturrilha_step'] }
  ]
};

let programa = null;
let diaAtualIndex = 0;

// ============ NAVEGAÇÃO ============
function mostrarTela(nome) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('ativo'));
  document.getElementById('tela-' + nome).classList.add('ativa');
  document.getElementById('nav-' + nome).classList.add('ativo');
  if (nome === 'hoje') renderHoje();
  if (nome === 'programa') renderPrograma();
  if (nome === 'biblioteca') renderBiblioteca();
  if (nome === 'medidas') renderMedidas();
  if (nome === 'calendario') renderCalendario();
}

// ============ BUSCAR EXERCÍCIO ============
function buscarExercicio(id) {
  return BIBLIOTECA.find(e => e.id === id);
}

// ============ TELA HOJE ============
async function renderHoje() {
  const div = document.getElementById('hoje-conteudo');
  const acoes = document.getElementById('hoje-acoes');
  if (!programa) programa = JSON.parse(localStorage.getItem('programa')) || PROGRAMA_PADRAO;

  const dia = programa.dias[diaAtualIndex];
  if (!dia) { div.innerHTML = '<p>Nenhum treino configurado.</p>'; return; }

  const hoje = new Date().toISOString().split('T')[0];
  const registros = await listar('registros');
  const regHoje = registros.find(r => r.data === hoje && r.diaIndex === diaAtualIndex);

  let html = `<div class="card"><div class="titulo">${dia.nome}</div>
    <div class="info">${dia.exercicios.length} exercícios + panturrilha</div></div>`;

  dia.exercicios.forEach((exId, i) => {
    const ex = buscarExercicio(exId);
    if (!ex) return;
    const feito = regHoje && regHoje.feitos && regHoje.feitos.includes(exId);
    html += `<div class="card">
      <div class="linha">
        <input type="checkbox" class="check" ${feito?'checked':''} onchange="marcarFeito('${exId}', this.checked)">
        <div style="flex:1">
          <div class="titulo">${i+1}. ${ex.nome} <span class="badge">${ex.tipo}</span></div>
          <div class="info">3 séries × 10 repetições</div>
        </div>
      </div>
      <button class="secundario trocar" onclick="trocarExercicio(${i})">🔄 Trocar</button>
    </div>`;
  });

  html += `<h3>Panturrilha</h3>`;
  dia.panturrilha.forEach(exId => {
    const ex = buscarExercicio(exId);
    if (!ex) return;
    const feito = regHoje && regHoje.feitos && regHoje.feitos.includes(exId);
    html += `<div class="card"><div class="linha">
      <input type="checkbox" class="check" ${feito?'checked':''} onchange="marcarFeito('${exId}', this.checked)">
      <div style="flex:1"><div class="titulo">${ex.nome}</div>
      <div class="info">2 séries × 15 repetições (leve)</div></div>
    </div></div>`;
  });

  div.innerHTML = html;
  acoes.innerHTML = `<button onclick="proximoDia()">➡ Próximo dia do programa</button>
    <button class="perigo" onclick="pularTreino()">Pulei hoje</button>`;
}

async function marcarFeito(exId, feito) {
  const hoje = new Date().toISOString().split('T')[0];
  const registros = await listar('registros');
  let reg = registros.find(r => r.data === hoje && r.diaIndex === diaAtualIndex);
  if (!reg) {
    reg = { data: hoje, diaIndex: diaAtualIndex, feitos: [], status: 'em andamento' };
    await salvar('registros', reg);
    const novos = await listar('registros');
    reg = novos.find(r => r.data === hoje && r.diaIndex === diaAtualIndex);
  }
  if (feito && !reg.feitos.includes(exId)) reg.feitos.push(exId);
  if (!feito) reg.feitos = reg.feitos.filter(id => id !== exId);
  await salvar('registros', reg);
  renderHoje();
}

async function pularTreino() {
  const hoje = new Date().toISOString().split('T')[0];
  await salvar('registros', { data: hoje, diaIndex: diaAtualIndex, feitos: [], status: 'pulado' });
  alert('Treino marcado como pulado.');
  proximoDia();
}

function proximoDia() {
  diaAtualIndex = (diaAtualIndex + 1) % programa.dias.length;
  renderHoje();
}

function trocarExercicio(index) {
  const dia = programa.dias[diaAtualIndex];
  const exAtual = buscarExercicio(dia.exercicios[index]);
  const opcoes = BIBLIOTECA.filter(e => e.grupo === exAtual.grupo && e.id !== exAtual.id);
  const nomes = opcoes.map(e => e.nome).join('\n');
  const escolha = prompt(`Trocar "${exAtual.nome}" por qual?\n\n${opcoes.map((e,i)=>`${i+1}. ${e.nome} (${e.tipo})`).join('\n')}\n\nDigite o número:`);
  const num = parseInt(escolha) - 1;
  if (num >= 0 && num < opcoes.length) {
    dia.exercicios[index] = opcoes[num].id;
    localStorage.setItem('programa', JSON.stringify(programa));
    renderHoje();
  }
}

// ============ TELA PROGRAMA ============
function renderPrograma() {
  const div = document.getElementById('programa-conteudo');
  let html = '';
  programa.dias.forEach((dia, di) => {
    html += `<div class="card"><div class="titulo">${dia.nome}</div>`;
    dia.exercicios.forEach((exId, i) => {
      const ex = buscarExercicio(exId);
      if (ex) html += `<div class="info">${i+1}. ${ex.nome} (${ex.tipo}) 
        <button class="secundario trocar" onclick="removerExercicio(${di},${i})">✖</button></div>`;
    });
    html += `<button class="secundario" onclick="adicionarExercicio(${di})">➕ Adicionar exercício</button></div>`;
  });
  html += `<button onclick="expandir8Dias()">Expandir para 8 dias</button>`;
  div.innerHTML = html;
}

function removerExercicio(di, i) {
  programa.dias[di].exercicios.splice(i, 1);
  localStorage.setItem('programa', JSON.stringify(programa));
  renderPrograma();
}

function adicionarExercicio(di) {
  const opcoes = BIBLIOTECA.map((e, i) => `${i+1}. ${e.nome} (${e.grupo}/${e.tipo})`).join('\n');
  const num = parseInt(prompt(`Qual exercício adicionar?\n\n${opcoes}\n\nDigite o número:`)) - 1;
  if (num >= 0 && num < BIBLIOTECA.length) {
    programa.dias[di].exercicios.push(BIBLIOTECA[num].id);
    localStorage.setItem('programa', JSON.stringify(programa));
    renderPrograma();
  }
}

function expandir8Dias() {
  if (programa.dias.length >= 8) { alert('Já tem 8 dias.'); return; }
  const extras = [
    { nome:'Dia 5 — Quadríceps (B)', exercicios:['agachamento_livre','afundo_halteres','passada_caminhando','agachamento_smith'], panturrilha:['panturrilha_pe','panturrilha_sentada'] },
    { nome:'Dia 6 — Costas (B) + Bíceps', exercicios:['remada_unilateral','puxada_supinada','pulldown','rosca_alternada'], panturrilha:['panturrilha_pe','panturrilha_leg'] },
    { nome:'Dia 7 — Posterior (B) + Glúteo', exercicios:['cadeira_flexora','coice_polia','abducao','gluteo_4apoios'], panturrilha:['panturrilha_sentada','panturrilha_halteres'] },
    { nome:'Dia 8 — Peito (B) + Ombro + Tríceps', exercicios:['supino_maquina','peck_deck','desenvolvimento_maquina','triceps_corda'], panturrilha:['panturrilha_pe','panturrilha_step'] }
  ];
  programa.dias = programa.dias.concat(extras);
  localStorage.setItem('programa', JSON.stringify(programa));
  renderPrograma();
}

// ============ TELA BIBLIOTECA ============
function renderBiblioteca() {
  const div = document.getElementById('biblioteca-conteudo');
  const filtroGrupo = document.getElementById('filtro-grupo').value;
  const filtroTipo = document.getElementById('filtro-tipo').value;
  const grupos = [...new Set(BIBLIOTECA.map(e => e.grupo))];
  const sel = document.getElementById('filtro-grupo');
  if (sel.options.length === 1) {
    grupos.forEach(g => { const o = document.createElement('option'); o.value = g; o.textContent = g; sel.appendChild(o); });
  }
  let lista = BIBLIOTECA;
  if (filtroGrupo) lista = lista.filter(e => e.grupo === filtroGrupo);
  if (filtroTipo) lista = lista.filter(e => e.tipo === filtroTipo);
  div.innerHTML = lista.map(e => `
    <div class="card">
      <img class="exercicio-img" src="imagens/${e.img}" onerror="this.style.display='none'" alt="${e.nome}">
      <div class="titulo">${e.nome} <span class="badge">${e.tipo}</span></div>
      <div class="info">${e.grupo}</div>
    </div>`).join('');
}
document.getElementById('filtro-grupo').addEventListener('change', renderBiblioteca);
document.getElementById('filtro-tipo').addEventListener('change', renderBiblioteca);

// ============ TELA MEDIDAS ============
async function salvarMedida() {
  const medida = {
    data: new Date().toISOString().split('T')[0],
    peso: parseFloat(document.getElementById('m-peso').value) || null,
    cintura: parseFloat(document.getElementById('m-cintura').value) || null,
    quadril: parseFloat(document.getElementById('m-quadril').value) || null,
    peito: parseFloat(document.getElementById('m-peito').value) || null,
    bracoD: parseFloat(document.getElementById('m-braco-d').value) || null,
    bracoE: parseFloat(document.getElementById('m-braco-e').value) || null,
    coxaD: parseFloat(document.getElementById('m-coxa-d').value) || null,
    coxaE: parseFloat(document.getElementById('m-coxa-e').value) || null
  };
  await salvar('medidas', medida);
  alert('Medição salva!');
  document.querySelectorAll('#tela-medidas input').forEach(i => i.value = '');
  renderMedidas();
}

async function renderMedidas() {
  const div = document.getElementById('medidas-historico');
  const medidas = (await listar('medidas')).sort((a,b) => b.data.localeCompare(a.data));
  if (!medidas.length) { div.innerHTML = '<p class="info">Nenhuma medição registrada.</p>'; return; }
  div.innerHTML = '<h3>Histórico</h3>' + medidas.map(m => `
    <div class="card">
      <div class="titulo">${m.data}</div>
      <div class="info">Peso: ${m.peso||'-'}kg | Cintura: ${m.cintura||'-'}cm | Quadril: ${m.quadril||'-'}cm | Peito: ${m.peito||'-'}cm</div>
      <div class="info">Braço D: ${m.bracoD||'-'} | Braço E: ${m.bracoE||'-'} | Coxa D: ${m.coxaD||'-'} | Coxa E: ${m.coxaE||'-'}</div>
    </div>`).join('');
}

// ============ TELA CALENDÁRIO ============
async function renderCalendario() {
  const div = document.getElementById('calendario-conteudo');
  const hoje = new Date();
  const ano = hoje.getFullYear(), mes = hoje.getMonth();
  const primeiroDia = new Date(ano, mes, 1).getDay();
  const diasNoMes = new Date(ano, mes + 1, 0).getDate();
  const registros = await listar('registros');

  let html = `<h3>${hoje.toLocaleDateString('pt-BR', { month:'long', year:'numeric' })}</h3>
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center;font-size:12px">`;
  ['D','S','T','Q','Q','S','S'].forEach(d => html += `<div style="font-weight:bold;color:var(--magenta)">${d}</div>`);
  for (let i = 0; i < primeiroDia; i++) html += `<div></div>`;
  for (let d = 1; d <= diasNoMes; d++) {
    const dataStr = `${ano}-${String(mes+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const reg = registros.find(r => r.data === dataStr);
    let bg = '#fff', cor = '#212121';
    if (reg && reg.status === 'pulado') { bg = '#FFCDD2'; cor = '#C62828'; }
    else if (reg && reg.feitos && reg.feitos.length > 0) { bg = '#C8E6C9'; cor = '#2E7D32'; }
    html += `<div style="padding:8px 2px;border-radius:6px;background:${bg};color:${cor}">${d}</div>`;
  }
  html += `</div><h3>Próximos treinos</h3>`;
  for (let i = 0; i < 4; i++) {
    const data = new Date(hoje); data.setDate(hoje.getDate() + i);
    const idx = (diaAtualIndex + i) % programa.dias.length;
    html += `<div class="card"><div class="titulo">${data.toLocaleDateString('pt-BR')}</div>
      <div class="info">${programa.dias[idx].nome}</div></div>`;
  }
  div.innerHTML = html;
}

// ============ INICIALIZAÇÃO ============
window.addEventListener('load', async () => {
  await abrirDB();
  if (!localStorage.getItem('programa')) {
    localStorage.setItem('programa', JSON.stringify(PROGRAMA_PADRAO));
  }
  programa = JSON.parse(localStorage.getItem('programa'));
  renderHoje();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => console.log('SW falhou:', err));
  }
});
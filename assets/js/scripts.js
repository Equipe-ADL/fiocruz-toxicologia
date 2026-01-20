// Stick Header

window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	const titleHeight = document.querySelector('.header').scrollHeight;

	if (window.scrollY > 150) {
		header.classList.add('header--sticky');
	} else {
		header.classList.remove('header--sticky');
	}
});

// (function () {
// 	// Popover
// 	$(function () {
// 		$('[data-toggle="popover"]').popover(options);
// 	});

// 	// Tooltip
// 	$(function () {
// 		$('[data-toggle="tooltip"]').tooltip(options);
// 	});
// })();

// Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});

// Botão de copiar podcast

const copyButton = document.querySelectorAll('.copy-to-clip');

copyButton.forEach(btn => {
	btn.addEventListener('click', () => {
		copyToClipboard(btn);
		// tooltipShow(btn);

		tooltipFeedback(btn);
	});
});

function copyToClipboard(e) {
	const textToCopy = e.getAttribute('data-link');
	const textarea = document.createElement('textarea');
	textarea.setAttribute('readonly', '');
	textarea.style.position = 'absolute';
	textarea.value = textToCopy;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
}
function tooltipFeedback(b) {
	let feedback = $('[data-toggle="tooltip"]');

	// feedback.tooltip('show');

	b.addEventListener('mouseout', () => {
		feedback.tooltip('hide');
	});
}

// Lightbox (insert the class "lightbox" into <figure>)

const imageToLightbox = document.querySelectorAll('.lightbox');

imageToLightbox.forEach(image => {
	image.addEventListener('click', () => {
		if (!image.classList.contains('lightbox--show')) {
			const getImage = image.querySelector('img');
			const getImageSrc = getImage.getAttribute('src');
			const imageLightbox = document.createElement('div');

			imageLightbox.classList.add('lightbox__image');

			document.body.appendChild(imageLightbox);
			imageLightbox.innerHTML = `<img src="${getImageSrc}"/>`;
			console.log(getImageSrc);

			image.classList.add('lightbox--show');

			document.body.style.overflow = 'hidden';
			document.body.style.userSelect = 'none';

			closeLightbox(imageLightbox);
		}

		function closeLightbox(e) {
			const lightboxOpen = document.querySelector('.lightbox__image');
			e.addEventListener('click', () => {
				document.body.removeChild(e);
				image.classList.remove('lightbox--show');
				document.body.style.overflow = 'auto';
				document.body.style.userSelect = 'auto';
			});
		}
	});
});

// Lightbox Scroll (insert the class "lightbox-scroll" into <figure>)

const imageToLightboxWithScroll = document.querySelectorAll(".lightbox-scroll");

imageToLightboxWithScroll.forEach((imageScroll) => {
	imageScroll.addEventListener("click", () => {
		if (!imageScroll.classList.contains("lightbox-scroll--show")) {
			const getImageScroll = imageScroll.querySelector("img");
			const getImageScrollSrc = getImageScroll.getAttribute("src");
			const imageLightboxScroll = document.createElement("div");

			imageLightboxScroll.classList.add("lightbox-scroll__image");

			document.body.appendChild(imageLightboxScroll);
			imageLightboxScroll.innerHTML = `<img src="${getImageScrollSrc}"/>`;
			console.log(getImageScrollSrc);

			imageScroll.classList.add("lightbox-scroll--show");

			document.body.style.overflow = "hidden";
			document.body.style.userSelect = "none";

			closeLightboxScroll(imageLightboxScroll);
		}

		function closeLightboxScroll(s) {
			const lightboxScrollOpen = document.querySelector(".lightbox-scroll__image");
			s.addEventListener("click", () => {
				document.body.removeChild(s);
				imageScroll.classList.remove("lightbox-scroll--show");
				document.body.style.overflow = "auto";
				document.body.style.userSelect = "auto";
			});
		}
	});
});

// Boxes - inserir o título de acordo com o atributo

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
	const boxAttribute = box.getAttribute('data-box');

	const boxLabel = box.querySelector('.label');

	boxLabel.innerHTML = boxAttribute;
});



// Modal - Criação dos modais principais
const modalInfos = {
	creditos: {
		ariaLabel: 'creditos',
		modalSize: 'modal-lg',
		modalTitle: 'Créditos',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<span class="h5 mb-3 d-block">Ministério da Saúde</span>

					<div class="mb-5">
						<p class="mb-1">Alexandre Padilha</p>
						<p class="small text-muted"><em>Ministro</em></p>
					</div>

					<span class="h5 mb-3 d-block">Fundação Oswaldo Cruz – Fiocruz</span>
					
					<div class="mb-5">
						<p class="mb-1">Mario Moreira</p>
						<p class="small text-muted"><em>Presidente</em></p>

						<p class="mb-1">Marly Cruz</p>
						<p class="small text-muted"><em>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</em></p>
					</div>

					<span class="h5 mb-3 d-block">Campus Virtual Fiocruz</span>

					<div class="mb-5">

						<p class="mb-1">Ana Cristina da Matta Furniel</p>
						<p class="small text-muted"><em>Coordenadora geral</em></p>

						<p class="mb-1">Rosane Mendes</p>
						<p class="small text-muted"><em>Coordenadora adjunta</em></p>

						<p class="mb-1">Renata Bernardes David</p>
						<p class="small text-muted"><em>Coordenadora de produção</em></p>

						<p class="mb-1">Juliana Dutra</p>
						<p class="small text-muted"><em>Gerente de produção</em></p>

						<p class="mb-1">Isabela Schincariol</p>
						<p class="small text-muted"><em>Assessora de comunicação</em></p>
					
						<p class="mb-1">Roberta Saboya</p>
						<p class="small text-muted"><em>Designer Educacional</em></p>
					
						<span class="h6 mb-3 d-block">Design de Interface</span>
						
						<p class="mb-1">Aline Polycarpo</p>
						<p class="small text-muted"><em>Designer de Interface e Interação</em></p>

						<p class="mb-1">Danilo Blum</p>
						<p class="small text-muted"><em>Designer de Interface e Front-end</em></p>

						<p class="mb-1">Luciana Nunes</p>
						<p class="small text-muted"><em>Designer de Interface e Interação</em></p>
					
						
						<span class="h6 mb-3 d-block">Recursos Audiovisuais</span>
						
						<p class="mb-1">Cynthia Macedo Dias</p>
						<p class="small text-muted"><em>Locução</em></p>

						<p class="mb-1">Francisco de Assis Menezes Vignolo Lucas</p>
						<p class="small text-muted"><em>Animação, videografismo, edição, sonorização e locução</em></p>

						<p class="mb-1">Hugo Rodrigues Marins</p>
						<p class="small text-muted"><em>Mixagem e edição de som</em></p>

						<p class="mb-1">Teo Venerando</p>
						<p class="small text-muted"><em>Edição audiovisual</em></p>

						<span class="h6 mb-3 d-block">Recursos Educacionais</span>

						<p class="mb-1">Maria Clara Pontes</p>
						<p class="small text-muted"><em>Desenhista instrucional</em></p>

						<p class="mb-1">Carmélia Brito</p>
						<p class="small text-muted"><em>Bibliotecária</em></p>

						<p class="mb-1">Natália Rasina</p>
						<p class="small text-muted"><em>Audiodescrição</em></p>

						<p class="mb-1">Maria Angélica Marcondes Drska</p>
						<p class="small text-muted"><em>Revisão de Português</em></p>
						
						<span class="h6 mb-3 d-block">Suporte Técnico de Tecnologia da Informação</span>
					
						<p class="mb-1">Bruno Alexandre de Oliveira</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>

						<p class="mb-1">Eduardo Xavier da Silva</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>

						<p class="mb-1">Adriano Lourenço</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>

						<p class="mb-1">Orlando Terra</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>

						<p class="mb-1">Fábio Carneiro</p>
						<p class="small text-muted"><em>Designer gráfico e web designer</em></p>

						<p class="mb-1">Flávia Garcia de Carvalho</p>
						<p class="small text-muted"><em>Direção de arte</em></p>

						<p class="mb-1">Francisco de Assis Menezes Vignolo Lucas</p>
						<p class="small text-muted"><em>Ilustração</em></p>
					</div>

					<span class="h5 mb-3 d-block">Coordenação do projeto</span>
					
					<div class="mb-5">
						<p class="mb-1">Maurício Monken</p>
						<p class="small text-muted"><em>Professor-pesquisador da EPSJV</em></p>

						<p class="mb-1">Fernanda de Oliveira Bottino Ribeiro</p>
						<p class="small text-muted"><em>Professora-pesquisadora da EPSJV</em></p>

						<p class="mb-1">Carlos Eduardo Colpo Batistella</p>
						<p class="small text-muted"><em>Professor-pesquisador da EPSJV</em></p>

						
						<span class="h6 mb-3 d-block">Conteudistas</span>
						<p class="mb-1">Anamaria D'Andrea Corbo</p>
						<p class="small text-muted"><em>Professora-pesquisadora da EPSJV</em></p>

						<p class="mb-1">Bianca Borges da Silva Leandro</p>
						<p class="small text-muted"><em>Professora-pesquisadora da EPSJV</em></p>

						<p class="mb-1">Camila Furlanetti Borges</p>
						<p class="small text-muted"><em>Professora-pesquisadora da EPSJV</em></p>

						<p class="mb-1">Carlos Eduardo Colpo Batistella</p>
						<p class="small text-muted"><em>Professor-pesquisador da EPSJV</em></p>

						<p class="mb-1">Cynthia Macedo Dias</p>
						<p class="small text-muted"><em>Professora-pesquisadora da EPSJV</em></p>

						<p class="mb-1">Edilene Menezes Pereira</p>
						<p class="small text-muted"><em>Professora-pesquisadora da EPSJV</em></p>

						<p class="mb-1">Fernanda de Oliveira Bottino Ribeiro</p>
						<p class="small text-muted"><em>Professora-pesquisadora da EPSJV</em></p>

						<p class="mb-1">Ingrid D'avilla Freire Pereira</p>
						<p class="small text-muted"><em>Professora-pesquisadora da EPSJV</em></p>

						<p class="mb-1">João Roberto Cavalcante</p>
						<p class="small text-muted"><em>Pesquisador do Centro Brasil de Saúde Global</em></p>

						<p class="mb-1">José Mauro da Conceição Pinto</p>
						<p class="small text-muted"><em>Professor-pesquisador da EPSJV</em></p>

						<p class="mb-1">Marcia Cavalcanti Raposo Lopes</p>
						<p class="small text-muted"><em>Professora-pesquisadora da EPSJV</em></p>

						<p class="mb-1">Maurício Monken</p>
						<p class="small text-muted"><em>Professor-pesquisador da EPSJV</em></p>

						<p class="mb-1">Pedro Henrique Mattos Ferreira</p>
						<p class="small text-muted"><em>Assessor técnico do Ministério da Saúde</em></p>

						<p class="mb-1">Reinaldo de Araujo Dantas Lopes</p>
						<p class="small text-muted"><em>Professor-pesquisador da EPSJV</em></p>
					</div>
					
					<span class="h6 mb-3 d-block">Apoio em Tecnologia Educacional</span>
						<p class="mb-1">Tarcisio Pereira de Souza</p>
						<p class="small text-muted"><em>Tecnologista da EPSJV</em></p>

					<span class="h6 mb-3 d-block">Revisão Técnica</span>
						<p class="mb-1">Martha Peçanha Sharapin</p>
						<p class="small text-muted"><em>Professora-pesquisadora da EPSJV </em></p>

						<p class="mb-1">Mayara Secco Torres da Silva </p>
						<p class="small text-muted"><em>Pesquisadora do INI</em></p>

						<p class="mb-1">Matheus Oliveira Bastos</p>
						<p class="small text-muted"><em>Pesquisador do INI</em></p>
				</div>
			</div>
		`,
	},
	bibliografia: {
		ariaLabel: 'bibliografia',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia',
		modalBody: `
			<div class="row justify-content-center pt-5">
    <div class="col-12 col-md-11">
        <div class="mb-5">
            <!-- Accordion -->
            <div class="accordion accordion-flush" id="accordionBibliografia">
                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-item1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item1" aria-expanded="true" aria-controls="collapse1-item1">Módulo 1</button>
                    </h5>
                    <div id="collapse1-item1" class="accordion-collapse collapse" aria-labelledby="heading1-item1" data-bs-parent="">
                        <div class="accordion-body">
    <span class='d-block'><strong>Aula 1</strong></span>
    <span class='d-block'><em>Obrigatórias</em></span>
    <div class="list mb-5">
        <ul class="list-group">
            <li class="list-group-item">ALMEIDA FILHO, Naomar de; BARRETO, Maurício Lima (Ed.). <strong>Epidemiologia & saúde:</strong> Fundamentos, métodos, aplicações. reimpr. Rio de Janeiro: Guanabara Koogan, 2017. xxiv, 699 p. ISBN 8527716194.</li>

            <li class="list-group-item">BARATA, R. B. Vigilância epidemiológica: breve histórico e a experiência dos Estados Unidos e do estado de São Paulo. <strong>Epidemiol. Serv. Saúde</strong>, v. 31, n. 2, e2021115. 2022. DOI 10.1590/s2237-962220220002000028.</li>

            <li class="list-group-item">BARCELLOS, C.; QUITÉRIO, L. A. D. Vigilância ambiental em saúde e sua implantação no Sistema Único de Saúde. <strong>Rev Saude Publica</strong>, v. 40, n. 1. p. 170-177. 2006. DOI 10.1590/S0034-89102006000100025.</li>

            <li class="list-group-item">Brasil. Ministério da Saúde. Portaria nº 1.378, de 9 de julho de 2013. Regulamenta as responsabilidades e define diretrizes para execução e financiamento das ações de Vigilância em Saúde pela União, Estados, Distrito Federal e Municípios, relativos ao Sistema Nacional de Vigilância em Saúde e Sistema Nacional de Vigilância Sanitária. <strong>Diário Oficial da União</strong>, v. 131, Seção 1. p. 48-50, 2013. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt1378_09_07_2013.html' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt1378_09_07_2013.html</a>. Acesso em: 31 ago. 2025.</li>

            <li class="list-group-item">Brasil. Ministério da Saúde. Portaria nº 3.252, de 22 de dezembro de 2009. <strong>Diário Oficial da União</strong>, v. 245, Seção 1. p. 65-69, 2009. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2009/prt3252_22_12_2009_comp.html' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2009/prt3252_22_12_2009_comp.html</a>. Acesso em: 6 set. 2025.</li>

            <li class="list-group-item">Brasil. <strong>Mudanças climáticas para profissionais de saúde:</strong> guia de bolso [recurso eletrônico]. Brasília: Ministério da Saúde, 2024. <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2024/guia-mudancas-climaticas-para-profissionais-da-saude.pdf' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2024/guia-mudancas-climaticas-para-profissionais-da-saude.pdf</a>. ISBN 978-65-5993-649-6.</li>

            <li class="list-group-item">CHOI, B. C. K. The past, present, and future of public health surveillance. <strong>Scientifica</strong>, v. 2012. p. 875253. 2012. DOI 10.6064/2012/875253.</li>

            <li class="list-group-item">ESCOREL, S.; TEIXEIRA, L. A. História das Políticas de Saúde no Brasil de 1822 a 1963: do império ao desenvolvimentismo populista. In: GIOVANELLA, L.; ESCOREL, S.; LOBATO, L. d. V. C.; NORONHA, L. d. V. C.; CARVALHO, J. C. de. <strong>Políticas e sistema de saúde no Brasil</strong>. Tradução: , [S. l.]: Editora FIOCRUZ, 2012. p. 279-321. ISBN 9788575413494.</li>

            <li class="list-group-item">GIOVANELLA, L.; ESCOREL, S.; LOBATO, L. d. V. C.; NORONHA, L. d. V. C.; CARVALHO, J. C. de. <strong>Sistema de saúde brasileiro: história e configuração atual</strong>. [S.l.]: Editora FIOCRUZ, 2012. 180 p. ISBN 9788575413494. DOI 10.7476/9788575413494.</li>

            <li class="list-group-item">MEDRONHO, Roberto de Andrade; BLOCH, Kátia Vergetti; LUIZ, Ronir Raggio; WERNECK, Guilherme Loureiro (Ed.). <strong>Epidemiologia</strong>. 2. ed. São Paulo: Atheneu, 2009. [xxiv], 685 p. ISBN 978-8573799996.</li>

            <li class="list-group-item">OUQUAYROL, Maria Zélia; DA SILVA, Marcelo Gurgel Carlos (Ed.). <strong>Rouquayrol:</strong> Epidemiologia & saúde. 8. ed. Rio de Janeiro: MedBook, 2018. xxi, 719 p. ISBN 978-8583690290.</li>
        </ul>
    </div>

    <span class='d-block'><em>Complementares</em></span>
    <div class="list">
        <ul class="list-group">
            <li class="list-group-item">AVANCI, J. Q.; OLIVEIRA, Q. B. M.; ASSIS, S. G. de. Ações de vigilância das violências em serviços da atenção primária, hospitalar e de reabilitação no Brasil. <strong>Cien Saude Colet</strong>, v. 30, n. 3. e17372024. 2025. DOI 10.1590/1413-81232025303.17372024.</li>

            <li class="list-group-item">BAQUI, P.; BICA, I.; MARRA, V.; ERCOLE, A.; VAN DER SCHAAR, M. Ethnic and regional variations in hospital mortality from COVID-19 in Brazil: a cross-sectional observational study. <strong>Lancet Glob Health</strong>, v. 8, n. 8. e1018-e1026. 2020. DOI 10.1016/S2214-109X(20)30285-0.</li>

            <li class="list-group-item">BARATA, R. B. Investigação de surtos e epidemias: transformações na teoria, nos conceitos e nas práticas do século XVIII ao século XXI. <strong>Saúde soc.</strong>, v. 33, n. 1, e220310pt. 2024. DOI 10.1590/s0104-12902024220310pt.</li>

            <li class="list-group-item">BRASIL (ED.). <strong>Saúde ambiental:</strong> Guia básico para construção de indicadores. 1ª edição. Brasília DF: Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância em Saúde Ambiental e Saúde do Trabalhador, 2011. 128 pages. (Série B. Textos básicos de saúde). ISBN 9788533417779.</li>

            <li class="list-group-item">Brasil. <strong>1ª Conferência Nacional de Vigilância em Saúde:</strong> Vigilância em Saúde: Direito, Conquistas e Defesa de um SUS Público de Qualidade. Brasília, 2018. Disponível em: <a href='http://ces.saude.mg.gov.br/wp-content/uploads/2016/06/Documento-Orientador-1%C2%AA-CEVS.pdf' target='_blank' rel='noopener noreferrer'>http://ces.saude.mg.gov.br/wp-content/uploads/2016/06/Documento-Orientador-1%C2%AA-CEVS.pdf</a>.</li>

            <li class="list-group-item">CAIRUS, H. F.; RIBEIRO, W. A. <strong>Textos hipocráticos:</strong> O doente, o médico e a doença. Rio de Janeiro: Editora FIOCRUZ, 2005. 1 online resource (251 pages). (Coleção História e saúde). ISBN 9788575413753.</li>

            <li class="list-group-item">CAMPOS, G. W. d. S.; MINAYO, M. C. d. S.; AKERMAN, M. <strong>Tratado de saúde coletiva</strong>. 2.ed., rev. aum. São Paulo: HUCITEC, 2012. 968 p. (Saúde em debate, v.170). ISBN 978-8564806566.</li>

            <li class="list-group-item">DA SÁ, G. R. S. e.; NUNES, P. d. C.; OLIVEIRA, O. M. A. de; GONDIM, G. M. d. M. Políticas públicas de saúde e a organização do SUS. <em>In:</em> SILVA, M. d. N.; FLAUZINO, R. F.; GONDIM, G. M. d. M. <strong>Rede de frio: fundamentos para a compreensão do trabalho.</strong> Tradução: , [S. l.]: Editora FIOCRUZ, 2017. p. 51-83. ISBN 9786557080917. Disponível em: <a href='DA SÁ, G. R. S. e.; NUNES, P. d. C.; OLIVEIRA, O. M. A. de; GONDIM, G. M. d. M. Políticas públicas de saúde e a organização do SUS. In: SILVA, M. d. N.; FLAUZINO, R. F.; GONDIM, G. M. d. M. Rede de frio: fundamentos para a compreensão do trabalho. Tradução: , [S. l.]: Editora FIOCRUZ, 2017. p. 51-83. ISBN 9786557080917. Disponível em: https://books.scielo.org/id/m4kn3/pdf/silva-9786557080917-04.pdf.' target='_blank' rel='noopener noreferrer'>https://books.scielo.org/id/m4kn3/pdf/silva-9786557080917-04.pdf</a>.</li>

            <li class="list-group-item">DA SILVA JUNIOR, J. B. A nova face da vigilância epidemiológica. <strong>Epidemiol. Serv. Saúde</strong>, v. 12, n. 1. 2003. DOI 10.5123/S1679-49742003000100001.</li>

            <li class="list-group-item">DA SILVA, A. C. P.; PEPE, V. L. E. Vigilância sanitária: campo da promoção e proteção da saúde. <em>In:</em> GIOVANELLA, L.; ESCOREL, S.; LOBATO, L. d. V. C.; NORONHA, L. d. V. C.; CARVALHO, J. C. de. <strong>Políticas e sistema de saúde no Brasil</strong>. Tradução: , [S. l.]: Editora FIOCRUZ, 2012. p. 709-738. ISBN 9788575413494. Disponível em: <a href='https://books.scielo.org/id/c5nm2/pdf/giovanella-9788575413494-30.pdf' target='_blank' rel='noopener noreferrer'>https://books.scielo.org/id/c5nm2/pdf/giovanella-9788575413494-30.pdf</a>.</li>

            <li class="list-group-item">DA SILVA, J. A. A.; COSTA, E. A.; LUCCHESE, G. SUS 30 anos: Vigilância Sanitária. <strong>Cien Saude Colet</strong>, v. 23, n. 6. p. 1953-1961. 2018. DOI 10.1590/1413-81232018236.04972018.</li>

            <li class="list-group-item">DUMITH, S. C.; FETER, N. Demographic shifts and health dynamics: Exploring the impact of aging rates on health outcomes in Brazilian capitals. <strong>Archives of Gerontology and Geriatrics Plus</strong>, v. 1, n. 3. p. 100044. 2024. DOI 10.1016/j.aggp.2024.100044.</li>

            <li class="list-group-item">FREITAS, C. M. de; BARCELLOS, C.; ASMUS, C. I. R. F.; DA SILVA, M. A.; XAVIER, D. R. Da Samarco em Mariana à Vale em Brumadinho: desastres em barragens de mineração e Saúde Coletiva. <strong>Cadernos De Saúde Pública</strong>, v. 35, n. 5. e00052519. 2019. DOI 10.1590/0102-311X00052519.</li>

            <li class="list-group-item">HENRIQUES, C. M. P.; MOURA, N. F. O. de; SOUZA, P. B. de. Desafios e lições da pandemia de COVID-19 para a Vigilância em Saúde no Brasil: reflexões sobre tecnologias, modelos e organização do sistema. <strong>Rev. bras. epidemiol.</strong>, v. 27, e240049. 2024. DOI 10.1590/1980-549720240049.2.</li>

            <li class="list-group-item">LEE, L. M.; TEUTSCH, S. M.; THACKER, S. B.; ST. LOUIS, M. E. <strong>Principles & Practice of Public Health Surveillance</strong>. [S.l.]: Oxford University Press, 2010. 766 p. ISBN 9780195372922. DOI 10.1093/acprof:oso/9780195372922.001.0001.</li>

            <li class="list-group-item">MACIEL, E. L. N. 20 anos da Secretaria de Vigilância em Saúde e Ambiente: análise de duas décadas e perspectivas: análise de duas décadas e perspectivas. <strong>Epidemiol. Serv. Saúde</strong>, v. 32, n. 4, e2023373. 2023. DOI 10.1590/s2237-962220230004000016.pt.</li>

            <li class="list-group-item">Ministério da Saúde. <strong>Intoxicação por metanol:</strong> casos e óbitos - 13.10.2025. [S.l.]: Ministério da Saúde, 2025. Disponível em: <a href='https://www.gov.br/saude/pt-br/assuntos/noticias/2025/outubro/arquivos/casos-e-obitos-13-10-2025-1.pdf/@@download/file' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/assuntos/noticias/2025/outubro/arquivos/casos-e-obitos-13-10-2025-1.pdf/@@download/file</a>.</li>

            <li class="list-group-item">Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. <strong>Boletim Epidemiológico Especial:</strong> Doença pelo Novo Coronavírus – COVID-19. Brasília, 19 fev. 2024. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/boletins/epidemiologicos/covid-19/2023/boletim-epidemiologico-no-158-boletim-coe-coronavirus.pdf' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/boletins/epidemiologicos/covid-19/2023/boletim-epidemiologico-no-158-boletim-coe-coronavirus.pdf</a>.</li>

            <li class="list-group-item">OKUMOTO, O.; BRITO, S. M. F.; GARCIA, L. P. A Política Nacional de Vigilância em Saúde. <strong>Epidemiol. Serv. Saúde</strong>, v. 27, n. 3. e2018318. 2018.</li>

            <li class="list-group-item">OLIVEIRA, C. M. de; CRUZ, M. M. Sistema de Vigilância em Saúde no Brasil: avanços e desafios. <strong>Saúde debate</strong>, v. 39, n. 104. p. 255-267. 2015. DOI 10.1590/0103-110420151040385.</li>

            <li class="list-group-item">OLIVEIRA, W. K. de; FRANÇA, G. V. A. de; CARMO, E. H.; DUNCAN, B. B.; SOUZA KUCHENBECKER, R. de; SCHMIDT, M. I. Infection-related microcephaly after the 2015 and 2016 Zika virus outbreaks in Brazil: a surveillance-based analysis. <strong>Lancet</strong>, v. 390, n. 10097. p. 861-870. 2017. DOI 10.1016/S0140-6736(17)31368-5.</li>

            <li class="list-group-item">PAIM, J. S. <strong>Desafios para a saúde coletiva no século XXI</strong>. Salvador BA: EDUFBA, 2006. 153 ;. ISBN 9788523203955.</li>

            <li class="list-group-item">RAMOS, F. L. d. P.; DA HORA, Á. L.; SOUZA, C. T. V. de; PEREIRA, L. O.; DA HORA, D. L. As contribuições da epidemiologia social para a pesquisa clínica em doenças infecciosas. <strong>Revista Pan-Amazônica de Saúde</strong>, v. 7, esp. p. 221-229. 2016. DOI 10.5123/S2176-62232016000500025.</li>

            <li class="list-group-item">RECKTENWALDT, M.; JUNGES, J. R. A organização e a prática da Vigilância em Saúde em municípios de pequeno porte. <strong>Saúde soc.</strong>, v. 26, n. 2. p. 367-381. 2017. DOI 10.1590/s0104-12902017171916.</li>

            <li class="list-group-item">ROHLFS, D. B.; GRIGOLETTO, J. C.; NETTO, G. F.; RANGEL, C. d. F. A construção da Vigilância em Saúde Ambiental no Brasil. <strong>Revista de Saúde Coletiva</strong>, v. 19, n. 4. p. 391-398. 2011.</li>

            <li class="list-group-item">ROSEN, G. <strong>Uma história da saúde pública.</strong> São Paulo: HUCITEC, 1994. 423 p. (Saúde em debate). ISBN 978-8527102629.</li>

            <li class="list-group-item">Secretária de Estado de Saúde de Minas Gerais. <strong>Nota Informativa - Intoxicação por dietilenoglicol</strong>. Belo Horizonte: Secretária de Estado de Saúde de Minas Gerais, 2020. Disponível em: <a href='https://www.saude.mg.gov.br/wp-content/uploads/2020/01/Nota_Informativa_DEG_10_06_2020-2b5.pdf' target='_blank' rel='noopener noreferrer'>https://www.saude.mg.gov.br/wp-content/uploads/2020/01/Nota_Informativa_DEG_10_06_2020-2b5.pdf</a>.</li>

            <li class="list-group-item">TEIXEIRA, M. G.; DA COSTA, M. C. N. Vigilância epidemiológica: políticas, sistemas e serviços. <em>In:</em> GIOVANELLA, L.; ESCOREL, S.; LOBATO, L. d. V. C.; NORONHA, L. d. V. C.; CARVALHO, J. C. de. <strong>Políticas e sistema de saúde no Brasil</strong>. Tradução: , [S. l.]: Editora FIOCRUZ, 2012. p. 687-707. ISBN 9788575413494. Disponível em: <a href='https://books.scielo.org/id/c5nm2/pdf/giovanella-9788575413494-29.pdf' target='_blank' rel='noopener noreferrer'>https://books.scielo.org/id/c5nm2/pdf/giovanella-9788575413494-29.pdf</a>.</li>

            <li class="list-group-item">TEIXEIRA, M. G.; DA COSTA, M. C. N.; CARMO, E. H.; OLIVEIRA, W. K. de; PENNA, G. O. Vigilância em Saúde no SUS - construção, efeitos e perspectivas. <strong>Cien Saude Colet</strong>, v. 23, n. 6. p. 1811-1818. 2018. DOI 10.1590/1413-81232018236.09032018.</li>

            <li class="list-group-item">WHO. <strong>Noncommunicable diseases:</strong> Progress monitor 2025. Geneva: World Health Organization, 2025. Disponível em: <a href='https://iris.who.int/server/api/core/bitstreams/7a228681-a190-4c29-b2a8-9d4255dc49d1/content' target='_blank' rel='noopener noreferrer'>https://iris.who.int/server/api/core/bitstreams/7a228681-a190-4c29-b2a8-9d4255dc49d1/content</a></li>
        </ul>
    </div>

    <span class='d-block'><em>Materiais multimídia complementares (recursos “Saiba Mais”)</em></span>
    <div class="list">
        <ul class="list-group">
            <li class="list-group-item">LEANDRO KARNAL. História das Epidemias. YouTube, 2021. Disponível em: <a href='https://www.youtube.com/watch?v=vt8d0FKj7k4 ' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=vt8d0FKj7k4 </a> </li>

            <li class="list-group-item">CANAL USP. Da colonização à abolição: a história das epidemias no Brasil. YouTube, 2020. Disponível em: <a href='https://www.youtube.com/watch?v=HRTkFCe7xwI' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=HRTkFCe7xwI</a> </li>

            <li class="list-group-item">TV SENADO. A Revolta da Vacina. YouTube, 2017. Disponível em: <a href='https://www.youtube.com/watch?v=6i6v9f_aWjg' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=6i6v9f_aWjg</a> </li>

            <li class="list-group-item">FIOCRUZ. A história da saúde pública no Brasil: 500 anos na busca de soluções. VideoSaúde Distribuidora, 2016. Disponível em: <a href='https://www.youtube.com/watch?v=7ouSg6oNMe8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=7ouSg6oNMe8</a> </li>

            <li class="list-group-item">METEORO BRASIL. A história da Vigilância em Saúde no Brasil. YouTube, 2021. Disponível em: <a href='https://www.youtube.com/watch?v=DXXL4EBwxZo' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=DXXL4EBwxZo</a> </li>

            <li class="list-group-item">CONASEMS. Vigilância em Saúde – Parte 1 e Parte 2. YouTube, 2022. Disponível em: <a href='https://www.youtube.com/watch?v=zszLy8ckb0E' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=zszLy8ckb0E</a> e <a href='https://www.youtube.com/watch?v=Q0hYz3lKrG8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=Q0hYz3lKrG8</a> </li>
        </ul>
    </div>

    <span class='d-block'><em>Imagens</em></span>
    <div class="list">
        <ol class="list-group">
            <li class="list-group-item">G<strong>ravura de Hipócrates e página de título do seu trabalho sobre os Ares, Águas e Lugares</strong> (1734). Disponível em: <a href='https://commons.wikimedia.org/wiki/File:Hippocrates_bust_and_title_page_Wellcome_L0041093.jpg?uselang=pt-br' target='_blank' rel='noopener noreferrer'>https://commons.wikimedia.org/wiki/File:Hippocrates_bust_and_title_page_Wellcome_L0041093.jpg?uselang=pt-br</a>.</li>

            <li class="list-group-item">Furst, P. <strong>“Doktor Schnabel von Rom” (“Doutor Bico de Roma”). Traje médico utilizado para proteção contra a Peste Negra</strong>. (1656). Disponível em: <a href='https://upload.wikimedia.org/wikipedia/commons/5/57/Paul_F%C3%BCrst%2C_Der_Doctor_Schnabel_von_Rom_%28Holl%C3%A4nder_version%29.png' target='_blank' rel='noopener noreferrer'>https://upload.wikimedia.org/wikipedia/commons/5/57/Paul_F%C3%BCrst%2C_Der_Doctor_Schnabel_von_Rom_%28Holl%C3%A4nder_version%29.png</a></li>

            <li class="list-group-item"><strong>Bills of Mortality de 21 a 28 de fevereiro de 1664</strong> (1664). Disponível em: <a href='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bills_of_Mortality_Feb_21_-_28_1664_Wellcome_L0043358.jpg/640px-Bills_of_Mortality_Feb_21_-_28_1664_Wellcome_L0043358.jpg' target='_blank' rel='noopener noreferrer'>https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bills_of_Mortality_Feb_21_-_28_1664_Wellcome_L0043358.jpg/640px-Bills_of_Mortality_Feb_21_-_28_1664_Wellcome_L0043358.jpg</a>.</li>

            <li class="list-group-item"><strong>Dr. John Snow (1813-1858), Médico Britânico</strong> (1856). Disponível em: <a href='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/John_Snow.jpg/640px-John_Snow.jpg' target='_blank' rel='noopener noreferrer'>https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/John_Snow.jpg/640px-John_Snow.jpg</a>.</li>

            <li class="list-group-item">Snow, J. <strong>Mapa dos casos de cólera de John Snow</strong> (1854). Disponível em: <a href='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Snow-cholera-map-1.jpg/640px-Snow-cholera-map-1.jpg' target='_blank' rel='noopener noreferrer'>https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Snow-cholera-map-1.jpg/640px-Snow-cholera-map-1.jpg</a>.</li>

            <li class="list-group-item">CDC. <strong>Dr. Alexander Langmuir, Epidemiologista</strong> (1961). Disponível em: <a href='https://upload.wikimedia.org/wikipedia/commons/2/24/Alexander_Langmuir.jpg' target='_blank' rel='noopener noreferrer'>https://upload.wikimedia.org/wikipedia/commons/2/24/Alexander_Langmuir.jpg</a></li>

            <li class="list-group-item">7.	Câmara dos Deputados. <strong>Idosos no Brasil</strong>. Brasília: Câmara dos Deputados, 2023. Disponível em: <a href='https://www.camara.leg.br/noticias/1178523-comissao-discute-transicao-demografica-e-envelhecimento-da-populacao-brasileira/' target='_blank' rel='noopener noreferrer'>https://www.camara.leg.br/noticias/1178523-comissao-discute-transicao-demografica-e-envelhecimento-da-populacao-brasileira/</a>.</li>

            <li class="list-group-item"><strong>Dr. Oswaldo Cruz (1872-1917)</strong>. Disponível em: <a href='https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Osvaldo_Gon%C3%A7alves_Cruz.tif/lossy-page1-640px-Osvaldo_Gon%C3%A7alves_Cruz.tif.jpg' target='_blank' rel='noopener noreferrer'>https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Osvaldo_Gon%C3%A7alves_Cruz.tif/lossy-page1-640px-Osvaldo_Gon%C3%A7alves_Cruz.tif.jpg</a>.</li>

            <li class="list-group-item">Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. <strong>Infográfico: Intoxicação por Metanol: causas riscos e cuidado com bebidas adulteradas</strong>. Brasília: Ministério da Saúde, 2025. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/svsa/infograficos/infografico-metanol.png' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/composicao/svsa/infograficos/infografico-metanol.png</a>.</li>

            <li class="list-group-item">Franco, G.; Villardi, J. W. R.; Machado, J. M. H.; Souza, M. d. S. de; Brito, I. F.; Santorum, J. A.; Ocké-Reis, C. O.; Fenner, A. L. D. <strong>Vigilância em Saúde brasileira: reflexões e contribuição ao debate da 1ª Conferência Nacional de Vigilância em Saúde</strong>. Cien Saude Colet, v. 22, n. 10. p. 3137-3148. 2017. DOI 10.1590/1413-812320172210.18092017. Disponível em: <a href='https://www.scielo.br/j/csc/a/gkJPYXnymhVD4TG5MSdN9MG/?format=html&lang=pt' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/csc/a/gkJPYXnymhVD4TG5MSdN9MG/?format=html&lang=pt</a>.</li>

            <li class="list-group-item">Arreaza, A. L. V.; Moraes, J. C. de. <strong>Vigilância da saúde: fundamentos, interfaces e tendências</strong>. Cien Saude Colet, v. 15, n. 4. p. 2215-2228. 2010. DOI 10.1590/S1413-81232010000400036. Disponível em: <a href='https://www.scielo.br/j/csc/a/nC4LpHzs3bS7RVztSq8SZnc/?format=html&lang=pt' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/csc/a/nC4LpHzs3bS7RVztSq8SZnc/?format=html&lang=pt</a></li>
        </ol>
    </div>

    <span class='d-block'><strong>Aula 2</strong></span>
    <div class="list">
        <ul class="list-group">


            <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>Nota Informativa nº 6/2022-CGGAP/DESF/SAPS/MS</strong>. Brasília, DF: MS, 2022. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/saps/publicacoes/notas-tecnicas/nota-informativa-no-6-2022-cggap-desf-saps-ms' target='_blank' rel="noopener noreferrer">https://www.gov.br/saude/pt-br/composicao/saps/publicacoes/notas-tecnicas/nota-informativa-no-6-2022-cggap-desf-saps-ms</a>. Acesso em: 20 out. 2023.</li>

            <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PAN AMERICAN HEALTH ORGANIZATION (PAHO). Guidance on Clinical Suspicion and Differential Diagnosis of Monkeypox. <strong>Provisional Technical Note</strong>, 2022. Disponível em: <a href='https://iris.paho.org/bitstream/handle/10665.2/56218/PAHOPHEIMS220011_eng.pdf' target='_blank' rel="noopener noreferrer">https://iris.paho.org/bitstream/handle/10665.2/56218/PAHOPHEIMS220011_eng.pdf</a>. Acesso em: 28 nov. 2023.</li>

            <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WORLD HEALTH ORGANIZATION (WHO). <strong>Mpox (monkeypox)</strong>. 2024. Disponível em: <a href='https://www.who.int/news-room/fact-sheets/detail/monkeypox' target='_blank' rel="noopener noreferrer">https://www.who.int/news-room/fact-sheets/detail/monkeypox</a>. Acesso em: 28 nov. 2023.</li>
        </ul>
    </div>

    <span class='d-block'><strong>Aula 3</strong></span>
    <div class="list">
        <ul class="list-group">
            <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGÊNCIA NACIONAL DE VIGILÂNCIA SANITÁRIA (Anvisa). <strong>Voto nº 64/2023/SEI/DIRE2/ANVISA</strong>. 2023. Disponível em: <a href='https://www.gov.br/anvisa/pt-br/composicao/diretoria-colegiada/reunioes-da-diretoria/votos-dos-circuitos-deliberativos-1/2023/cd-231-2023-voto.pdf/' target='_blank' rel="noopener noreferrer">https://www.gov.br/anvisa/pt-br/composicao/diretoria-colegiada/reunioes-da-diretoria/votos-dos-circuitos-deliberativos-1/2023/cd-231-2023-voto.pdf/</a>. Acesso em: 30 out. 2023.</li>

            <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>Nota Informativa nº 6/2022-CGGAP/DESF/SAPS/MS</strong>. Brasília, DF: MS, 2022. Disponível em: <a href='https://www.gov.br/saude/pt-br/campanhas-da-saude/2022/variola-dos-macacos/notas-informativas/nota-informativa-no-6-2022-cggap-desf-saps-ms/view' target='_blank' rel="noopener noreferrer">https://www.gov.br/saude/pt-br/campanhas-da-saude/2022/variola-dos-macacos/notas-informativas/nota-informativa-no-6-2022-cggap-desf-saps-ms/view</a>. Acesso em: 30 out. 2023.</li>

            <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COUTINHO, C. <em>et al</em>. <strong>Characteristics of women diagnosed with mpox infection compared to men:</strong> a case series from Brazil. Travel medicine and infectious disease v. 56 (2023): 102663. Doi: 10.1016/j.tmaid.2023.102663</li>

            <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PAN AMERICAN HEALTH ORGANIZATION (PAHO). <strong>Mpox:</strong> perguntas e respostas. Disponível em: <a href='https://www.paho.org/pt/mpox-perguntas-e-respostas' target='_blank' rel="noopener noreferrer">https://www.paho.org/pt/mpox-perguntas-e-respostas</a>. Acesso em: 20 out. 2023.</li>

            <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WORLD HEALTH ORGANIZATION (WHO). <strong>Multi-country outbreak of Mpox External Situation Report 22</strong>, published 11 May 2023 Data as received by WHO national authorities by 17:00 CEST, 8 May 2023. <a href='https://www.who.int/publications/m/item/multi-country-outbreak-of-Mpox--external-situation-report--22---11-may-2023' target='_blank' rel="noopener noreferrer">https://www.who.int/publications/m/item/multi-country-outbreak-of-Mpox--external-situation-report--22---11-may-2023</a>. Acesso em: 23 out. 2023.</li>
        </ul>
    </div>
</div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-item2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item2" aria-expanded="false" aria-controls="collapse1-item2">Módulo 2</button>
                    </h5>
                    <div id="collapse1-item2" class="accordion-collapse collapse" aria-labelledby="heading1-item2" data-bs-parent="">
                        <div class="accordion-body">
                            <span class='d-block'><strong>Aula 1</strong></span>
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right"
                                        data-aos-easing="ease-out" data-aos-duration="1200">ALMEIDA FILHO, N. de; ROUQUAYROL, M. Z. <strong>Introdução à epidemiologia</strong>. 4. ed., rev. e ampl. Rio de Janeiro: MEDSI, 2006.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right"
                                        data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria Nacional de Ações Básicas de Saúde. Divisão Nacional de Epidemiologia. <strong>Guia de Vigilância Epidemiológica:</strong> normas e instruções. 2. Ed., revisada e atualizada, 138p, Brasília; DF: MS, 1986</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COELI, C. M. <em>et al</em>. Sistema de Informação em Saúde. <em>In:</em> MEDRONHO, R. de A. <em>et al</em>. <strong>Epidemiologia</strong>. 2. ed. São Paulo: Atheneu, 2009. cap. 29, p. 525–534.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MEDRONHO, R. de A. <em>et al.</em> <strong>Epidemiologia.</strong> 2. ed. São Paulo: Atheneu, 2009.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MORAES, I. H. S. Sistemas de informações em saúde: patrimônio da sociedade brasileira. <em>In:</em> PAIM, J. S.; ALMEIDA-FILHO, N. (orgs.). <strong>Saúde Coletiva:</strong> teoria e prática. Rio de Janeiro: MedBook, 2014.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REZENDE, F. A. V. S.; SOARES, M. F.; REIS, A. C. Os sistemas de informação em saúde no Sistema Único de Saúde. <em>In:</em> LEANDRO, B. B. S, REZENDE, F. A. V. S.; PINTO, J. M. C. (orgs). <strong>Informações e registros em saúde e seus usos no SUS</strong>. Rio de Janeiro: Editora Fiocruz, 2020. (Fazer Saúde coleção).</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SHARAPIN, M. P.; LEANDRO, B. B. S. Informações e registros em saúde: conceito e usos <em>In:</em> Leandro, B.B.S, REZENDE, F.A.VS., & PINTO, J.M.C. (orgs.). <strong>Informações e registros em saúde e seus usos no SUS</strong>. Rio de Janeiro: Editora Fiocruz, 2020. (Fazer Saúde coleção).</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SILVA, L. P.; CHEQUER, P. J. Sistema de informação em saúde e a vigilância epidemiológica. <strong>Guia de Vigilância Epidemiológica</strong>. Ministério da Saúde, Fundação Nacional de Saúde, Centro Nacional de Epidemiologia, Brasília, Brasil, 1994.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SOUZA, W. V.; DOMINGUES, C.M. A. S. Notificação Compulsória de Doenças e Agravos no Brasil: um breve histórico sobre a criação do Sistema de Informação de Agravos de Notificação – Sinan.  <em>In:</em> Brasil. Ministério da Saúde. <strong>A experiência brasileira em sistemas de informação em saúde</strong>. Ministério da Saúde, Organização Pan-Americana da Saúde, Fundação Oswaldo Cruz. Brasília, DF: Editora do Ministério da Saúde, 2009. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/experiencia_brasileira_sistemas_saude_volume1.pdf#page=39' target='_blank' rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/experiencia_brasileira_sistemas_saude_volume1.pdf#page=39</a>. Acesso em: 20 out. 2023.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">TEIXEIRA, M. da G. <em>et al</em> . Seleção das doenças de notificação compulsória: critérios e recomendações para as três esferas de governo. <strong>Inf. Epidemiol. SUS</strong>,  Brasília ,  v. 7, n. 1, p. 7-28,  mar.  1998 .  Disponível em <a href='http://scielo.iec.gov.br/scielo.php?script=sci_arttext&pid=S0104-16731998000100002&lng=pt&nrm=iso' target='_blank' rel="noopener noreferrer">http://scielo.iec.gov.br/scielo.php?script=sci_arttext&pid=S0104-16731998000100002&lng=pt&nrm=iso</a>. Acesso em: 18 set. 2023. http://dx.doi.org/10.5123/S0104-16731998000100002 </li>
                                </ul>
                            </div>

                            <span class='d-block'><strong>Aula 2</strong></span>
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ALBUQUERQUE, M. I. N. DE ., CARVALHO, E. M. F. DE ., & LIMA, L. P. (2002). Vigilância epidemiológica: conceitos e institucionalização.<strong> Revista Brasileira de Saúde Materno Infantil</strong>, 2, 2002 2(1) ). Disponível em: <a href='https://doi.org/10.1590/S1519-38292002000100002' target='_blank' rel="noopener noreferrer">https://doi.org/10.1590/S1519-38292002000100002</a>. Acesso em: 10 out. 2023.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Lei nº 8.080, de 19 de setembro de 1990</strong>. Dispõe sobre as condições para a promoção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outra providências. DOU 20/9/90. Seção I p.18055-18059</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>Ficha individual de notificação mpox</strong>. e-SUS Sinan. Sistema de Informações de Agravos de Notificação. Versão 01/03/2023. 2023a. Disponível em: <a href='http://plataforma.saude.gov.br/esussinan/ficha-investigacao-monkeypox-esussinan.pdf' target='_blank' rel="noopener noreferrer">http://plataforma.saude.gov.br/esussinan/ficha-investigacao-monkeypox-esussinan.pdf</a>. Acesso em: 3 dez 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">HAMMANN; LAGUARDIA. Reflexões sobre a vigilância epidemiológica: mais além da notificação compulsória. <strong>Informe Epidemiológico do SUS</strong>, 9 (3): 211 – 219, 2000.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MEDRONHO R.; BLOCH, K. V.; LUIZ, R. R.; WERNECK, G. L. (eds.). <strong>Epidemiologia</strong>. 2. ed. São Paulo: Atheneu, 2009.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MORAES, I. H. S. Sistemas de Informação em Saúde: Patrimônio da Sociedade Brasileira. <em>In:</em> PAIM, J. S, ALMEIRA-FILHO, N. (orgs.). <strong>Saúde coletiva:</strong> teoria e prática. Rio de Janeiro: Medbook, 2014. Disponível em: <a href='http://plataforma.saude.gov.br/esussinan/ficha-investigacao-monkeypox-esussinan.pdf' target='_blank' rel="noopener noreferrer">http://plataforma.saude.gov.br/esussinan/ficha-investigacao-monkeypox-esussinan.pdf</a>. Acesso em: 10 nov. 2023.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">IMAGEM POLIOMIELITE. <a href='https://www.gov.br/saude/pt-br/assuntos/noticias/2023/marco/ha-34-anos-ultimo-caso-de-poliomielite-foi-registrado-no-brasil' target='_blank' rel="noopener noreferrer">https://www.gov.br/saude/pt-br/assuntos/noticias/2023/marco/ha-34-anos-ultimo-caso-de-poliomielite-foi-registrado-no-brasil</a>.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">IMAGEM DENGUE. <a href='https://g1.globo.com/rj/rio-de-janeiro/noticia/2023/07/21/casos-de-dengue-aumentam-em-300percent-durante-inverno-no-rj.ghtml' target='_blank' rel="noopener noreferrer">https://g1.globo.com/rj/rio-de-janeiro/noticia/2023/07/21/casos-de-dengue-aumentam-em-300percent-durante-inverno-no-rj.ghtml</a>.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">IMAGEM EBOLA. <a href='https://g1.globo.com/jornal-hoje/noticia/2014/10/primeiro-caso-suspeito-de-ebola-no-brasil-e-registrado-no-sul-do-pais.html#:~:text=O%20Brasil%20registrou%20o%20primeiro,tosse%2C%20mas%20n%C3%A3o%20teve%20hemorragia' target='_blank' rel="noopener noreferrer">https://g1.globo.com/jornal-hoje/noticia/2014/10/primeiro-caso-suspeito-de-ebola-no-brasil-e-registrado-no-sul-do-pais.html#:~:text=O%20Brasil%20registrou%20o%20primeiro,tosse%2C%20mas%20n%C3%A3o%20teve%20hemorragia</a></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">IMAGEM GAL: <a href='https://gal.riodejaneiro.sus.gov.br/' target='_blank' rel="noopener noreferrer">https://gal.riodejaneiro.sus.gov.br/</a></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">IMAGEM PEC: <a href='https://sisaps.saude.gov.br/esus/' target='_blank' rel="noopener noreferrer">https://sisaps.saude.gov.br/esus/</a></li>
                                </ul>
                            </div>

                            <span class='d-block'><strong>Aula 3</strong></span>
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ASSOCIAÇÃO DOS ARQUIVISTAS DE SÃO PAULO (ARQ-SP). <strong>Projeto Como fazer</strong>. Disponível em: <a href='https://arqsp.org.br/biblioteca-digital-da-arq-sp/' target='_blank' rel="noopener noreferrer">https://arqsp.org.br/biblioteca-digital-da-arq-sp/</a>. Acesso em: 10 nov. 2023.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAMARGO, A. M. de A.; BELLOTTO, H. L. <strong>Dicionário de terminologia arquivística</strong>. São Paulo: Associação dos Arquivistas Brasileiros - Núcleo Regional de São Paulo: Secretaria de Estado da Cultura. 1996.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INDOLFO, A. C. <em>et al</em>. <strong>Gestão de Documentos:</strong> conceitos e procedimentos básicos. Ana Celeste Indolfo, Ana Maria Varela Cascardo Campos, Maria Izabel de Oliveira, Mônica Medrado da Costa (e) Verone Gonçalves Cauville. - Rio de Janeiro: Arquivo Nacional, 1993. (Série Publicações Técnicas - Arquivo Nacional; n. 47). Disponível em: <a href='https://bdan.an.gov.br/handle/123456789/72' target='_blank' rel="noopener noreferrer">https://bdan.an.gov.br/handle/123456789/72</a>. Acesso em: 20 out. 2023.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LOPES, L. C. <strong>A informação e os arquivos:</strong> teorias e práticas. Niterói: EDUFF; São Carlos: EDUFSCar, 1996.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MARTINS <em>et al</em>. A conformação da informação na gestão de documentos em saúde. <em>In:</em> MARTINS, F.; MUNCK, S. <strong>Uma experiência de qualificação de trabalhadores do SUS:</strong> diagnóstico da gestão de documentos e informações em saúde no Piauí. Rio de Janeiro: EPSJV, 2019.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PINTO, J. M. da C.; MUNCK, S. A gestão de documentos nos serviços de saúde. <em>In:</em> LEANDRO, B. B. da S.; REZENDE, F. A. V. S.; PINTO, J. M. da C. (orgs). <strong>Informações e Registros em Saúde e seus usos no SUS</strong> [livro eletrônico]. Rio de Janeiro: Editora da Fiocruz, 2020.</li>
                                </ul>
                            </div>

                            <span class='d-block'><strong>Aula 4</strong></span>
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ANGELO, J. R.; LEANDRO, B. B. DA S.; PÉRISSÉ, A. R. S. Monitoramento da Covid-19 nas favelas cariocas: vigilância de base territorial e produção compartilhada de conhecimento. <strong>Saúde em Debate</strong>, v. 45, n. spe2, p. 123–141, dez. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. <strong>Boletim Epidemiológico Especial – Mpox – 01/06/2023 a 30/06/2023</strong> n. 24. 2023b. Brasília, DF: MS, 2023. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/boletins/epidemiologicos/variola-dos-macacos/boletim-epidemiologico-de-monkeypox-no-24-coe-1/view' target='_blank' rel="noopener noreferrer">https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/boletins/epidemiologicos/variola-dos-macacos/boletim-epidemiologico-de-monkeypox-no-24-coe-1/view</a>. Acesso em: 3 dez 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LEANDRO, B. B. S.; PINTO, J. M. C.; LOPES, R. A. D.; RANGEL, J. F.; SANTOS, I. D. M.; FERREIRA, P. H. M.; MARTINS, F. N. <strong>Sistematização das rodas de conversa virtuais:</strong> dialogando com Agentes Comunitários de Saúde e Docentes. Projeto Informações e Registros em Saúde para a formação do Agente Comunitário de Saúde: produção de e-book interativo – Programa Inova Fiocruz. Rio de Janeiro: EPSJV/Fiocruz. Agosto, 2021. Disponível em: <a href='www.epsjv.fiocruz.br/informacao-registro-acs' target='_blank' rel="noopener noreferrer">www.epsjv.fiocruz.br/informacao-registro-acs</a>. Acesso em: 3 dez 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OLIVEIRA, R. P. Análise descritiva dos casos confirmados de Monkeypox notificados na Área Programática 3.2 no município do Rio de Janeiro nas semanas epidemiológicas 24 a 43 de 2022. <strong>Boletim Epidemiológico</strong>. EpiSUS Fundamental. Rio de Janeiro/RJ. 2022.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-item3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item3" aria-expanded="false" aria-controls="collapse1-item3">Módulo 3</button>
                    </h5>
                    <div id="collapse1-item3" class="accordion-collapse collapse" aria-labelledby="heading1-item3" data-bs-parent="">
                        <div class="accordion-body">
                            <span class='d-block'><strong>Aula 1</strong></span>
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right"
                                        data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>Nota Informativa nº
                                            6/2022-CGGAP/DESF/SAPS/MS</strong>. Brasília, DF: MS, 2022. Disponível em:<a
                                            href=' https://www.gov.br/saude/pt-br/composicao/saps/publicacoes/notas-tecnicas/nota-informativa-no-6-2022-cggap-desf-saps-ms'
                                            target='_blank' rel="noopener noreferrer">
                                            https://www.gov.br/saude/pt-br/composicao/saps/publicacoes/notas-tecnicas/nota-informativa-no-6-2022-cggap-desf-saps-ms</a>.
                                        Acesso em: 10 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right"
                                        data-aos-easing="ease-out" data-aos-duration="1200">MONTERASTELLI, A. O que se sabe sobre a varíola do
                                        macaco em homens bi e homossexuais. <strong>Outra Saúde</strong>, São Paulo, 04/07/2022. Seção Saúde Global.
                                        Disponível em: <a
                                            href='https://outraspalavras.net/outrasaude/o-que-se-sabe-sobre-a-variola-dos-macacos-em-homens-gays-e-bissexuais/'
                                            target='_blank'
                                            rel="noopener noreferrer">https://outraspalavras.net/outrasaude/o-que-se-sabe-sobre-a-variola-dos-macacos-em-homens-gays-e-bissexuais/</a>.
                                        Acesso em: 10 jan. 2025. </li>
                                </ul>
                            </div>

                            <span class='d-block'><strong>Aula 2</strong></span>
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right"
                                        data-aos-easing="ease-out" data-aos-duration="1200">CYRINO, A. P.; TEIXEIRA, R. R. Saúde pública, mudança de comportamento e criação: da educação sanitária à emergência da inteligência coletiva em saúde. <em>In:</em> BERTUCCI, L. M. <strong>Saúde e Educação</strong>: um encontro plural. Rio de Janeiro: Editora Fiocruz, 2017.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MIZUKAMI, M. <strong>Ensino:</strong> as abordagens do processo. São Paulo: EPU, 1986.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MOREL, C.; LOPES, M.; PEREIRA, I. <em>In:</em> MOREL, C.; PEREIRA, I.; LOPES, M. (orgs.). <strong>Educação em saúde:</strong> material didático para formação técnica de agentes comunitários de saúde. Rio de Janeiro: EPSJV, 2020. p. 71-78.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">NESPOLI, G. Da educação sanitária à educação popular em saúde. <em>In:</em> BORNSTEIN, V. et al. (org.). <strong>Curso de Aperfeiçoamento em Educação Popular em Saúde:</strong> textos de apoio. Rio de Janeiro: EPSJV, 2016. p. 47-51.</li>
                                </ul>
                            </div>

                            <span class='d-block'><strong>Aula 3</strong></span>
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right"
                                        data-aos-easing="ease-out" data-aos-duration="1200">ARAÚJO, R. S. de; CRUZ, P. J. S. C. <strong>Educação popular como prática social e profissional</strong>.  João Pessoa, PB: Editora do CCTA, 2018. Disponível em: <a href='http://www.edpopsus.epsjv.fiocruz.br/sites/default/files/conteudo/midia/arquivos/livroweb.pdf' target='_blank' rel="noopener noreferrer">http://www.edpopsus.epsjv.fiocruz.br/sites/default/files/conteudo/midia/arquivos/livroweb.pdf</a>f. Acesso em:2 dez. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BONETTI, O. P.; ODEH, M. M.; CARNEIRO, F. F. Questioning the Institutionalization of Popular Education in Health in the Unified Health System (SUS – acronym in Portuguese). <strong>Interface</strong> (Botucatu). 18 Supl 2:1413-1426, 2014.  Disponível em: <a href='https://www.scielo.br/j/icse/a/zFggwz3TY3nRfkvFDzvNt6H/?format=pdf&lang=pt' target='_blank' rel="noopener noreferrer">https://www.scielo.br/j/icse/a/zFggwz3TY3nRfkvFDzvNt6H/?format=pdf&lang=pt</a>. Acesso em: 8 dez. 2024. </li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. <strong>Plano de contingência Nacional para Monkeypox:</strong> Centro de Operações de Emergência em Saúde Pública: COE Monkeypox. Versão 2. [Internet]. Brasília, DF: MS, 2022 [citado 29 de março de 2023]. 32 p. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/svsa/resposta-a-emergencias/coes/monkeypox/plano-de-contingencia/plano-de-contingencia/view' target='_blank' rel="noopener noreferrer">https://www.gov.br/saude/pt-br/composicao/svsa/resposta-a-emergencias/coes/monkeypox/plano-de-contingencia/plano-de-contingencia/view</a>. Acesso em: 15 dez. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DANTAS, V. L.; LINHARES, A. M. B. Círculos de cultura: problematização da realidade e protagonismo popular. <strong>Caderno de Educação Popular em Saúde</strong>, Brasília, DF. Ministério da Saúde, [<em>s. d.</em>].</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FREIRE, P. <strong>Pedagogia do oprimido</strong>. 17. ed. Rio de Janeiro: Paz e Terra, 1987.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MINISTÉRIO DA SAÚDE. Secretaria de Gestão Estratégica e Participativa. Departamento de Apoio à Gestão Participativa. <strong>Manual para equipes de saúde:</strong> o trabalho educativo nos grupos. Brasília, DF: MS, 2007. <a href='http://www.edpopsus.epsjv.fiocruz.br/sites/default/files/conteudo/midia/arquivos/caderno-educacao-popular-saude-p1.pdf' target='_blank' rel="noopener noreferrer">http://www.edpopsus.epsjv.fiocruz.br/sites/default/files/conteudo/midia/arquivos/caderno-educacao-popular-saude-p1.pdf</a>. Acesso em: 10 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REDEPOP. <strong>Educação popular e saúde no brasil e os coletivos de educação popular e saúde:</strong> contextos históricos. Rio de Janeiro: REDEPOP, [<em>s. d.</em>].</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WORLD HEALTH ORGANIZATION. WHO. <strong>Clinical management and infection prevention and control for monkeypox:</strong> interim rapid response guidance [online]. Geneva: WHO; 2022a [citado 27 de março de 2023]. 56 p. Disponível em: <a href='https://www.who.int/publications/i/item/WHO-MPX-Clinical-and-IPC-2022.1' target='_blank' rel="noopener noreferrer">https://www.who.int/publications/i/item/WHO-MPX-Clinical-and-IPC-2022.1</a>. Acesso em: 10 dez. 2024.</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim do Accordion -->
        </div>
        
    </div>
</div>
		`,
	},
	glossario: {
		ariaLabel: 'glossario',
		modalSize: 'modal-lg',
		modalTitle: 'Glossário',
		modalBody: `
			<div class="aba">
				<ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" id="pills-atores-tab" data-bs-toggle="pill" data-bs-target="#pills-atores" type="button" role="tab" aria-controls="pills-atores" aria-selected="true">Atores</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-seguranca-tab" data-bs-toggle="pill" data-bs-target="#pills-seguranca" type="button" role="tab" aria-controls="pills-seguranca" aria-selected="false">Segurança</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-processos-tab" data-bs-toggle="pill" data-bs-target="#pills-processos" type="button" role="tab" aria-controls="pills-processos" aria-selected="false">Processos</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-documentos-tab" data-bs-toggle="pill" data-bs-target="#pills-documentos" type="button" role="tab" aria-controls="pills-documentos" aria-selected="false">Documentos</button>
					</li>
				</ul>
				<div class="tab-content p-0" id="pills-tabContent">
					<!-- Atores -->
					<div class="tab-pane fade show active" id="pills-atores" role="tabpanel" aria-labelledby="pills-atores-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-a" aria-expanded="true" aria-controls="collapse1-a">A</button>
								</h2>
								<div id="collapse1-a" class="accordion-collapse collapse" aria-labelledby="heading1-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>ANVISA</strong></p>
										<p>Agência Nacional de Vigilância Sanitária, autarquia que exerce atividades de regulação, normatização, controle e fiscalização na área de vigilância sanitária.</p>
										<p><strong>Autoridade Nacional Reguladora do Medicamento (ANARME) ou Entidade Reguladora de Moçambique</strong></p>
										<p>Instituição pública, dotada de personalidade jurídica, autonomia administrativa, financeira e patrimonial, que desempenha funções de regulamentação, supervisão, fiscalização e sancionamento, nos termos definidos pela Lei.</p>
										<p><strong>Autoridades Regulatórias</strong></p>
										<p>Instituições que têm poder regulatório, ou seja, autoridades que analisam os dados submetidos e conduzem inspeções. Podem também serem denominadas autoridades competentes.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-c" aria-expanded="false" aria-controls="collapse1-c">C</button>
								</h2>
								<div id="collapse1-c" class="accordion-collapse collapse" aria-labelledby="heading1-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Centro de Pesquisa</strong></p>
										<p>Local onde, usualmente, as atividades ligadas ao estudo são conduzidas. Ensaios Clínicos podem ser conduzidos em um único centro ou em vários centros simultaneamente (Estudos Multicêntricos).</p>
										<p><strong>Comitê de Coordenação</strong></p>
										<p>Comitê organizado pelo patrocinador para coordenar a condução de um estudo multicêntrico.</p>
										<p><strong>Comitê de Ética em Pesquisa (CEP)</strong></p>
										<p>Organização independente, multidisciplinar, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo, por meio da aprovação e revisão contínua do protocolo do estudo e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa.</p>
										<p><strong>Comitê de Ética Independente (IEC)</strong></p>
										<p>Uma organização independente (um conselho de revisão ou um comitê institucional, regional, nacional ou supranacional) constituído por profissionais da área médica/científica e membros pertencentes a outras áreas, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo e assegurar publicamente a sua proteção, através da revisão e aprovação/parecer favorável sobre o protocolo do estudo, adequação dos investigadores, recursos e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa, entre outras atividades. A situação legal, composição, função, operação e exigências regulatórias pertinentes ao Comitê de Ética Independente podem ser diferentes em cada país, mas devem permitir que ele atue em consonância com o Guia das BPC (ICH).</p>
										<p><strong>Comitê Independente de Monitoramento de Dados (IDMC)</strong></p>
										<p>Também conhecido como Conselho de Monitoramento de Dados e Segurança, Comitê de Monitoramento ou Comitê de Monitoramento de Dados. É um comitê independente de monitoramento de dados que, pode ser implementado pelo investigador, para avaliar periodicamente o desenvolvimento de um estudo clínico, os dados de segurança e os limites críticos de eficácia, além de recomendar ao patrocinador a continuidade, a modificação, ou o encerramento do estudo.</p>
										<p><strong>Comitê Institucional de Bioética Para Saúde (CIBS)</strong></p>
										<p>Entidade criada pelo Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique, com competências delegadas para avaliação de aspectos éticos de propostas de investigação em saúde a nível de uma ou mais instituições, e que apenas efetua avaliação de protocolos de investigação provenientes ou realizados em colaboração com as respectivas instituições.</p>
										<p><strong>Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique</strong></p>
										<p>Órgão independente multidisciplinar, que faz avaliação dos protocolos de investigação na área da saúde para aferir a aplicação dos princípios éticos na realização da pesquisa tendo em conta a proteção dos participantes. Assegura a proteção dos direitos, segurança e bem-estar dos participantes nos estudos. Faz também a tutela e monitoria da atividade dos Comités Institucionais de Bioética para a Saúde (CIBS). O CNBS e os CIBS avaliam os aspectos metodológicos de protocolos de investigação quando os Comitês Científicos das instituições proponentes de protocolos não estiverem em funcionamento, e sempre que houver aspectos metodológicos que impactem a Bioética.</p>
										<p><strong>CONEP</strong></p>
										<p>Comissão Nacional de Ética em Pesquisa, é uma instância colegiada, de natureza consultiva, deliberativa, normativa, educativa e independente, vinculada ao Conselho Nacional de Saúde/MS.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-i">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-i" aria-expanded="false" aria-controls="collapse1-i">I</button>
								</h2>
								<div id="collapse1-i" class="accordion-collapse collapse" aria-labelledby="heading1-i" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Instituição</strong></p>
										<p>Qualquer entidade, agência ou instalação médica ou odontológica onde sejam conduzidos estudos clínicos.</p>
										<p><strong>Investigador de Coordenação</strong></p>
										<p>Um investigador responsável pela coordenação de investigadores de diferentes centros participantes de um estudo multicêntrico.</p>
										<p><strong>Investigador/Investigador Principal/Pesquisador</strong></p>
										<p>Pessoa responsável por conduzir o estudo clínico em um centro de pesquisa. Pesquisador responsável ou Investigador Principal é o responsável legal pelo estudo, líder da equipe do estudo. Um médico qualificado (ou dentista, conforme o caso), que for um investigador ou um subinvestigador do ensaio, deve ser responsável por todas as decisões médicas (ou odontológicas) relacionadas ao ensaio.</p>
										<p><strong>Investigador/ Instituição</strong></p>
										<p>Expressão que significa “o investigador e/ou instituição”, quando e onde solicitada pelas exigências regulatórias aplicáveis.</p>
										<p><strong>Investigador-Patrocinador</strong></p>
										<p>Indivíduo que implementa e conduz, sozinho ou em grupo, um estudo clínico e sob cuja imediata direção o produto sob investigação é administrado, fornecido ou utilizado por um paciente. O termo não inclui qualquer pessoa que não um indivíduo (ex.: não inclui uma corporação ou uma agência). As responsabilidades de um investigador-patrocinador incluem tanto as do patrocinador como as do investigador.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-o">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-o" aria-expanded="false" aria-controls="collapse1-o">O</button>
								</h2>
								<div id="collapse1-o" class="accordion-collapse collapse" aria-labelledby="heading1-o" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Organização de Pesquisa Contratada (CRO)</strong></p>
										<p>Uma pessoa ou organização (comercial, acadêmica ou outra) contratada pelo patrocinador para realizar um ou mais de seus deveres e funções relativos a estudos clínicos.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-p" aria-expanded="false" aria-controls="collapse1-p">P</button>
								</h2>
								<div id="collapse1-p" class="accordion-collapse collapse" aria-labelledby="heading1-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Participante de Pesquisa</strong></p>
										<p>Pela regulamentação brasileira, indivíduo que, de forma esclarecida e voluntária, ou sob o esclarecimento e autorização de seu(s) responsável(eis) legal(ais), aceita ser pesquisado. Podem pertencer ao grupo dos que recebem o produto sob investigação ou ao grupo de controle. Além disso, podem ser portadores de alguma comorbidade/patologia ou indivíduos saudáveis.</p>
										<p><strong>Populações Vulneráveis</strong></p>
										<p>Indivíduos cuja vontade de participar do estudo possa ser indevidamente influenciada pela expectativa, justificada ou não, de benefícios associados à participação, ou de uma reação negativa, em caso de recusa, por parte de membros seniores de alguma hierarquia da qual façam parte ou à qual estejam submetidos. Exemplos são indivíduos pertencentes a grupos com uma estrutura hierárquica constituída, como estudantes de medicina, farmácia, odontologia e enfermagem, funcionários de hospitais e laboratórios, da indústria farmacêutica, membros das forças armadas e detentos. Outros participantes de pesquisa vulneráveis são aqueles portadores de doenças incuráveis ou que estejam em casas de repouso, pessoas desempregadas ou miseráveis, pacientes em situações de emergência, grupos étnicos minoritários, pessoas sem moradia, nômades, refugiados, menores e aqueles incapazes de atestar o próprio consentimento.</p>
										<p><strong>Patrocinador</strong></p>
										<p>Pessoa física ou jurídica, pública ou privada que apoia a pesquisa de variadas formas, seja com financiamento, infraestrutura, recursos humanos ou apoio institucional.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-r" aria-expanded="false" aria-controls="collapse1-r">R</button>
								</h2>
								<div id="collapse1-r" class="accordion-collapse collapse" aria-labelledby="heading1-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Representante legal</strong></p>
										<p>Pessoa física ou jurídica autorizada pela legislação aplicável para consentir, em nome do participante de pesquisa, sua participação em um estudo clínico.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-s">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-s" aria-expanded="false" aria-controls="collapse1-s">S</button>
								</h2>
								<div id="collapse1-s" class="accordion-collapse collapse" aria-labelledby="heading1-s" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Sub Investigador</strong></p>
										<p>Qualquer membro específico da equipe do estudo clínico, designado e supervisionado pelo investigador no centro de pesquisa para conduzir procedimentos essenciais e/ou tomar decisões importantes relacionadas ao estudo.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-t">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-t" aria-expanded="false" aria-controls="collapse1-t">T</button>
								</h2>
								<div id="collapse1-t" class="accordion-collapse collapse" aria-labelledby="heading1-t" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Testemunha Imparcial</strong></p>
										<p>Pessoa, não relacionada ao estudo, não sendo injustamente influenciada pelas pessoas nele envolvidas, que participe do processo de consentimento, inclusive registrando participação assinando o Termo de Consentimento Livre e Esclarecido (TCLE), caso o participante de pesquisa, ou seu responsável legal, não saiba ler e/ou escrever, garantindo assim que as informações redigidas destinadas aos participantes sejam as mesmas informadas verbalmente.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Segurança -->
					<div class="tab-pane fade" id="pills-seguranca" role="tabpanel" aria-labelledby="pills-seguranca-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-c" aria-expanded="true" aria-controls="collapse2-c">C</button>
								</h2>
								<div id="collapse2-c" class="accordion-collapse collapse" aria-labelledby="heading2-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Comparador (Produto)</strong></p>
										<p>Um produto sob investigação ou comercializado ou placebo, usado como referência em um estudo clínico.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-d">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-d" aria-expanded="false" aria-controls="collapse2-d">D</button>
								</h2>
								<div id="collapse2-d" class="accordion-collapse collapse" aria-labelledby="heading2-d" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Desvio de Protocolo</strong></p>
										<p>Qualquer não cumprimento dos procedimentos ou requisitos definidos na versão aprovada do protocolo, sem implicações maiores na integridade do ensaio, na qualidade dos dados ou nos direitos e segurança dos participantes.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-e" aria-expanded="false" aria-controls="collapse2-e">E</button>
								</h2>
								<div id="collapse2-e" class="accordion-collapse collapse" aria-labelledby="heading2-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Evento Adverso (EA)</strong></p>
										<p>Qualquer ocorrência médica inconveniente ou sinal desfavorável ou não planejado (incluindo achados laboratoriais anormais), sintoma, ou doença temporariamente associada com o uso de um produto farmacêutico sob investigação, relacionadas ou não ao produto farmacêutico sob investigação, e que não, necessariamente, tenha uma relação causal com o tratamento.</p>
										<p><strong>Evento Adverso Grave (EAG) / Evento Adverso Sério (EAS)</strong></p>
										<p>Qualquer ocorrência médica adversa que, em qualquer dose: - resulte em morte, - represente risco à vida, - implique em hospitalização ou prolongamento de uma hospitalização existente, - resulte em persistente inabilidade/incapacidade significativa, ou - cause anomalia congênita.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-p" aria-expanded="false" aria-controls="collapse2-p">P</button>
								</h2>
								<div id="collapse2-p" class="accordion-collapse collapse" aria-labelledby="heading2-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Placebo</strong></p>
										<p>Formulação sem efeito farmacológico, administrada ao participante do ensaio clínico com a finalidade de mascaramento ou de ser comparador.</p>
										<p><strong>Produto Investigacional (ou produto experimental)</strong></p>
										<p>Forma farmacêutica de um ingrediente ativo ou placebo que está sendo provada ou usada como referência em um estudo clínico (Ensaio Clínico). Incluindo produto com autorização prévia de comercialização, mas utilizado ou formulado ou empacotado de maneira diferente daquela aprovada.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-r" aria-expanded="false" aria-controls="collapse2-r">R</button>
								</h2>
								<div id="collapse2-r" class="accordion-collapse collapse" aria-labelledby="heading2-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Reação Adversa ao medicamento (RAM)</strong></p>
										<p>Qualquer resposta prejudicial ou indesejável, não intencional, a um medicamento, que ocorre nas doses usualmente empregadas para profilaxia, diagnóstico ou terapia de doenças. No conceito de RAM pode-se observar a existência de uma relação causal entre o uso do medicamento e a ocorrência do evento.</p>
										<p><strong>Reação Adversa Inesperada ao medicamento</strong></p>
										<p>Uma reação adversa, cuja natureza ou severidade não seja condizente com as informações aplicáveis ao produto (ex.: Brochura do Investigador para produtos sob investigação não aprovados ou bula/resumo das características do produto para os aprovados).</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-v">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-v" aria-expanded="false" aria-controls="collapse2-v">V</button>
								</h2>
								<div id="collapse2-v" class="accordion-collapse collapse" aria-labelledby="heading2-v" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Violação de protocolo de ensaio clínico</strong></p>
										<p>Desvio de protocolo de ensaio clínico que possa afetar a qualidade dos dados, que comprometa a integridade do estudo ou que possa afetar a segurança ou os direitos dos participantes do ensaio clínico.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Processos -->
					<div class="tab-pane fade" id="pills-processos" role="tabpanel" aria-labelledby="pills-processos-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-a" aria-expanded="true" aria-controls="collapse3-a">A</button>
								</h2>
								<div id="collapse3-a" class="accordion-collapse collapse" aria-labelledby="heading3-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Adesão (em relação aos estudos)</strong></p>
										<p>Seguir todas as exigências relativas ao estudo, às Boas Práticas Clínicas e às exigências regulatórias aplicáveis.</p>
										<p><strong>Acesso Direto</strong></p>
										<p>Permissão para examinar, analisar, verificar e reproduzir quaisquer registros e relatórios que sejam importantes para avaliar o estudo clínico. Qualquer parte (ex.: autoridades regulatórias nacionais e estrangeiras, auditores e monitores do patrocinador) com acesso direto deverá ter o devido cuidado, com as restrições estabelecidas pelas exigências regulatórias aplicáveis, para que se mantenha confidencialidade dos participantes de pesquisa e das informações de propriedade do patrocinador.</p>
										<p><strong>Assentimento livre e esclarecido</strong></p>
										<p>Anuência do participante da pesquisa – criança, adolescente ou indivíduos impedidos de forma temporária ou não de consentir, na medida de sua compreensão e respeitadas suas singularidades, após esclarecimento sobre a natureza da pesquisa, justificativa, objetivos, métodos, potenciais benefícios e riscos. A obtenção do assentimento não elimina a necessidade do consentimento do responsável.</p>
										<p><strong>Auditoria</strong></p>
										<p>Verificação independente e sistemática das atividades e documentos relativos ao estudo, a fim de determinar se o protocolo, os procedimentos operacionais padrões do patrocinador (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis estão sendo cumpridas.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-b">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-b" aria-expanded="false" aria-controls="collapse3-b">B</button>
								</h2>
								<div id="collapse3-b" class="accordion-collapse collapse" aria-labelledby="heading3-b" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Bem-estar (dos participantes de pesquisa)</strong></p>
										<p>Integridade física e mental dos indivíduos envolvidos em um estudo clínico.</p>
										<p><strong>Boas Práticas Clínicas (BPC)</strong></p>
										<p>Padrão de qualidade ética e científica para o planejamento, condução, registro e relato de estudos clínicos que envolvam a participação de seres humanos. O objetivo é assegurar a proteção dos direitos, integridade e confidencialidade dos participantes da pesquisa, assim como, a credibilidade dos dados e a precisão dos resultados.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-c" aria-expanded="false" aria-controls="collapse3-c">C</button>
								</h2>
								<div id="collapse3-c" class="accordion-collapse collapse" aria-labelledby="heading3-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Caráter Cego/Mascaramento</strong></p>
										<p>Procedimento no qual uma ou mais partes envolvidas no estudo é mantida desinformada sobre as indicações do tratamento. O caráter cego geralmente refere-se aos participantes de pesquisa. Caso o estudo seja duplo-cego, significa que não somente o participante, mas os investigadores, monitores e, em alguns casos, os analistas de dados são mantidos desinformados quanto ao tratamento.</p>
										<p><strong>Confidencialidade </strong></p>
										<p>Prevenir a divulgação para outros, que não os indivíduos autorizados, sobre a identidade de um participante de pesquisa ou de uma informação de propriedade do patrocinador.</p>
										<p><strong>Consentimento Livre e Esclarecido</strong></p>
										<p>Processo através do qual um participante confirma voluntariamente sua intenção de participar em um ensaio em particular, após ter sido informado de todos os aspectos do ensaio que forem relevantes para a decisão do participante de entrar no estudo.</p>
										<p><strong>Controle de Qualidade</strong></p>
										<p>Técnicas e atividades operacionais adotadas dentro do sistema de garantia de qualidade para assegurar que todas as exigências de qualidade relacionadas às atividades do estudo sejam atendidas.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-e" aria-expanded="false" aria-controls="collapse3-e">E</button>
								</h2>
								<div id="collapse3-e" class="accordion-collapse collapse" aria-labelledby="heading3-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Estudo Clínico</strong></p>
										<p>Qualquer investigação em seres humanos que pretenda descobrir ou verificar os efeitos clínicos, farmacêuticos e/ou outros efeitos farmacodinâmicos de um produto sob investigação; e/ou identificar quaisquer reações adversas a um produto sob investigação; e/ou estudar a absorção, distribuição, metabolismo e excreção de um produto sob investigação com o objetivo de apurar sua segurança e/ou eficácia.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-f">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-f" aria-expanded="false" aria-controls="collapse3-f">F</button>
								</h2>
								<div id="collapse3-f" class="accordion-collapse collapse" aria-labelledby="heading3-f" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Farmacocinética</strong></p>
										<p>Em geral, são todas as modificações que um sistema biológico produz em um princípio ativo. É o estudo da cinética (relação quantitativa entre a variável independente tempo e a variável dependente concentração) dos processos de absorção, distribuição, biotransformação e excreção dos medicamentos (princípios ativos e/ou seus metabolitos).</p>
										<p><strong>Farmacodinâmica</strong></p>
										<p>Modificações que um princípio ativo produz em um sistema biológico, ou seja, é o estudo dos efeitos bioquímicos e fisiológicos dos medicamentos e seus mecanismos de ação.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-g">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-g" aria-expanded="false" aria-controls="collapse3-g">G</button>
								</h2>
								<div id="collapse3-g" class="accordion-collapse collapse" aria-labelledby="heading3-g" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Garantia de Qualidade</strong></p>
										<p>Todas as ações planejadas e sistemáticas realizadas para garantir que o estudo seja desenvolvido e os dados sejam gerados, documentados, relatados e arquivados conforme as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-i">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-i" aria-expanded="false" aria-controls="collapse3-i">I</button>
								</h2>
								<div id="collapse3-i" class="accordion-collapse collapse" aria-labelledby="heading3-i" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Inspeção</strong></p>
										<p>Atividade de uma autoridade regulatória a fim de avaliar documentos, instalações, registros e quaisquer outros recursos que se considerem relacionados ao estudo clínico, os quais podem estar localizados na instituição onde está sendo conduzido o estudo, nas dependências do patrocinador e/ou nas organizações de pesquisa contratadas (CRO), ou em outros estabelecimentos tidos como apropriados pelas autoridades regulatórias.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-m">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-m" aria-expanded="false" aria-controls="collapse3-m">M</button>
								</h2>
								<div id="collapse3-m" class="accordion-collapse collapse" aria-labelledby="heading3-m" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Monitoria</strong></p>
										<p>Atividade de acompanhamento do progresso de um estudo clínico, garantindo que sua condução, registros e relatos sejam realizados de acordo com o protocolo, os Procedimentos Operacionais Padrão (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-r" aria-expanded="false" aria-controls="collapse3-r">R</button>
								</h2>
								<div id="collapse3-r" class="accordion-collapse collapse" aria-labelledby="heading3-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Randomização</strong></p>
										<p>Processo de designação aleatória dos participantes de pesquisa ao tratamento ou ao grupo-controle, de forma a reduzir parcialidades.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Documentos  -->
					<div class="tab-pane fade" id="pills-documentos" role="tabpanel" aria-labelledby="pills-documentos-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-a" aria-expanded="true" aria-controls="collapse4-a">A</button>
								</h2>
								<div id="collapse4-a" class="accordion-collapse collapse" aria-labelledby="heading4-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Aprovação (em relação às Instâncias Regulatórias)</strong></p>
										<p>É a decisão afirmativa de que o estudo clínico foi analisado e pode ser conduzido, seguindo as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis, observando as recomendações específicas de cada uma destas instâncias.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-b">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-b" aria-expanded="false" aria-controls="collapse4-b">B</button>
								</h2>
								<div id="collapse4-b" class="accordion-collapse collapse" aria-labelledby="heading4-b" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Brochura do Investigador</strong></p>
										<p>Documento que apresenta a compilação dos dados clínicos e não clínicos acerca dos produtos sob investigação, relevante para o estudo do(s) produto(s) sob investigação em seres humanos. No caso de medicamento já comercializado pode ser substituído pela Bula.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-c" aria-expanded="false" aria-controls="collapse4-c">C</button>
								</h2>
								<div id="collapse4-c" class="accordion-collapse collapse" aria-labelledby="heading4-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Certificado de Auditoria</strong></p>
										<p>Declaração de confirmação do auditor de que a auditoria foi realizada.</p>
										<p><strong>Código de Identificação do Participante</strong></p>
										<p>Código identificador exclusivo, designado pelo investigador (ou pelo patrocinador) para cada participante de pesquisa, com intuito de manter sua identidade em sigilo.</p>
										<p><strong>Contrato</strong></p>
										<p>Formato de documento que apresenta o acordo por escrito, datado e assinado entre duas ou mais partes envolvidas que estabeleça quaisquer determinações de delegação e distribuição de tarefas e obrigações e, se apropriado, sobre assuntos financeiros. O protocolo pode servir de base para o contrato.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-d">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-d" aria-expanded="false" aria-controls="collapse4-d">D</button>
								</h2>
								<div id="collapse4-d" class="accordion-collapse collapse" aria-labelledby="heading4-d" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Dados Fonte</strong></p>
										<p>Todas as informações dos registros originais, sendo cópias autenticadas de registros originais de achados clínicos, observações ou ainda outras atividades de uma pesquisa clínica necessárias para a reconstrução e avaliação do estudo. Os dados fonte estão contidos nos documentos fonte (registros originais ou cópias autenticadas).</p>
										<p><strong>Documentação</strong></p>
										<p>Todos os registros, sob qualquer forma (incluindo dados escritos, eletrônicos, magnéticos e ópticos, eletrocardiogramas, raios-X e demais exames de imagem, entre outros), que descrevem ou registram os métodos, condutas e/ou resultados de um estudo, os fatores que o afetaram e as ações realizadas.</p>
										<p><strong>Documentos Essenciais</strong></p>
										<p>Documentos que, individual ou coletivamente, permitem a avaliação da condução ética e da qualidade dos dados produzidos por um estudo clínico.</p>
										<p><strong>Documentos Fonte</strong></p>
										<p>Documentos, dados e registros originais (ex.: registros hospitalares, tabelas clínicas e administrativas, anotações laboratoriais, memorandos, diários de paciente ou checklists de avaliação, registros de prescrição farmacêutica, dados registrados por documentos automatizados, cópias ou transcrições autenticadas após verificação de sua precisão, microficha, negativos fotográficos, microfilmes ou registros magnéticos, raios-X, arquivos de pacientes e registros arquivados na farmácia, nos laboratórios e nos departamentos envolvidos no estudo clínico).</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-e" aria-expanded="false" aria-controls="collapse4-e">E</button>
								</h2>
								<div id="collapse4-e" class="accordion-collapse collapse" aria-labelledby="heading4-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Emenda ao Protocolo</strong></p>
										<p>Documento que descreve as alterações ou esclarecimentos formais feitos ao protocolo.</p>
										<p><strong>Exigências Regulatórias Aplicáveis</strong></p>
										<p>Quaisquer leis ou regulamentos sobre a condução de estudos que envolvem seres humanos, com produtos sob investigação ou não.</p>
										<p><strong>Ficha Clínica (Case Report Form - CRF)</strong></p>
										<p>Documento impresso, óptico ou eletrônico elaborado para registrar todas as informações exigidas pelo protocolo a serem relatadas ao patrocinador sobre cada participante de pesquisa.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-p" aria-expanded="false" aria-controls="collapse4-p">P</button>
								</h2>
								<div id="collapse4-p" class="accordion-collapse collapse" aria-labelledby="heading4-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Parecer</strong></p>
										<p>Documento que emite o resultado da análise em relação ao estudo submetido ao Comitê de Ética em Pesquisa (CEP).</p>
										<p><strong>Procedimentos Operacionais Padrão (POP)</strong></p>
										<p>Instruções escritas e detalhadas para a uniformidade de desempenho de uma determinada função.</p>
										<p><strong>Produto sob investigação</strong></p>
										<p>Forma de apresentação farmacêutica de um princípio ativo ou placebo sendo testado ou usado como referência em um estudo clínico, incluindo um produto com autorização comercial / de comercialização quando usado ou apresentado (formulado ou embalado) sob uma forma diferente da aprovada, ou usado para uma indicação não aprovada, ou quando usado para obter maiores informações sobre a forma aprovada.</p>
										<p><strong>Protocolo</strong></p>
										<p>Documento que descreve toda a base do estudo, contendo justificativa, objetivos, desenho, metodologia, considerações estatísticas e organização do estudo. No entanto, estas informações podem ser fornecidas, de forma mais detalhada, por outros documentos referenciados pelo protocolo. Considera-se o termo protocolo o documento em si e às emendas ao protocolo.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-r" aria-expanded="false" aria-controls="collapse4-r">R</button>
								</h2>
								<div id="collapse4-r" class="accordion-collapse collapse" aria-labelledby="heading4-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Relatório de Auditoria</strong></p>
										<p>Avaliação por escrito realizada pelo auditor do patrocinador sobre os resultados e impressões da auditoria.</p>
										<p><strong>Relatório de Estudo Clínico</strong></p>
										<p>Descrição por escrito do ensaio/estudo de qualquer agente terapêutico, profilático ou de diagnóstico conduzido em seres humanos, no qual as descrições clínicas e estatísticas, apresentações e análises estão plenamente integradas em um único relatório.</p>
										<p><strong>Relatório Interino do Estudo Clínico</strong></p>
										<p>Relatório contendo os resultados intermediários e sua avaliação baseada em análises realizadas no decorrer de um estudo.</p>
										<p><strong>Relatório de Monitoria</strong></p>
										<p>Relatório que descreve os achados e as impressões do monitor para o patrocinador, após cada visita de monitoria do estudo e/ou outros comunicados relacionados, de acordo com os POP do patrocinador.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-t">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-t" aria-expanded="false" aria-controls="collapse4-t">T</button>
								</h2>
								<div id="collapse4-t" class="accordion-collapse collapse" aria-labelledby="heading4-t" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Trilha de Auditoria</strong></p>
										<p>Documentação que permite a reconstrução do curso dos eventos e /ou achados.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`,
	},
};

// Get all buttons and links that have "modal" in the data-bs-toggle
const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');

document.addEventListener('DOMContentLoaded', function (event) {
	//do work

	modalButtons.forEach(btn => {
		// Check if the modal exist
		const modalId = btn.getAttribute('data-bs-target').slice(1);

		const createdModalId = document.getElementById(modalId);

		if (!createdModalId) {
			// If don't exist create one
			createModal(modalId);
		}
	});
});

function createModal(id) {
	const newModal = document.createElement('div');
	const modalLabel = id.slice(6);

	newModal.classList.add('modal', 'fade');
	newModal.setAttribute('id', id);
	newModal.setAttribute('tabindex', '-1');
	newModal.setAttribute('aria-labelledby', modalLabel);
	newModal.setAttribute('aria-hidden', 'true');

	newModal.innerHTML = `
		<div class="modal-dialog ${modalInfos[modalLabel].modalSize}">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="${modalInfos[modalLabel].ariaLabel}">${modalInfos[modalLabel].modalTitle}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					${modalInfos[modalLabel].modalBody}
				</div>
				<div class="modal-footer">
					<button type="button" class="fio-button fio-button-primary" data-bs-dismiss="modal">Fechar</button>
				</div>
			</div>
		</div>
	`;

	document.body.appendChild(newModal);
}

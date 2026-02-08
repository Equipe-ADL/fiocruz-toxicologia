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
            <!-- Accordion Módulos-->
            <div class="accordion accordion-flush" id="accordionBibliografia">
                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-modulo1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-modulo1" aria-expanded="true" aria-controls="collapse1-modulo1">Módulo 1</button>
                    </h5>
                    <div id="collapse1-modulo1" class="accordion-collapse collapse" aria-labelledby="heading1-modulo1" data-bs-parent="">

                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionBibliografia-m1-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula1" aria-expanded="true" aria-controls="collapse-m1-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m1-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula1" data-bs-parent="">
                                        <div class="accordion-body">
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
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula2" aria-expanded="false" aria-controls="collapse-m1-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m1-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <span class='d-block'><em>Obrigatórias - PNVS</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Agência Nacional de Vigilância Sanitária (ANVISA). Guia de Vigilância em Saúde para a Exposição a Metais Pesados. Brasília: ANVISA, 2020. Disponível em: <a href='https://www.gov.br/anvisa/pt-br target=' _blank' rel='noopener noreferrer'>https://www.gov.br/anvisa/pt-br</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Conselho Nacional de Saúde. Resolução nº 588, de 12 de julho de 2018. Institui a Política Nacional de Vigilância em Saúde. Diário Oficial da União, Brasília, 13 ago. 2018.</li>

                                                    <li class="list-group-item">CONSELHO NACIONAL DE SAÚDE. Política Nacional de Vigilância em Saúde completa seis anos ainda com desafios para sua implementação. Brasília, 2024. Disponível em: https://www.gov.br/conselho-nacional-de-saude. Acesso em: 26 ago. 2025.</li>

                                                    <li class="list-group-item">CSCI. Saúde e saneamento: uma avaliação das políticas públicas de prevenção, controle e contingência das arboviroses no Brasil. <strong>Ciência & Saúde Coletiva</strong>, v. 28, n. 6, p. 1767-1776, 2023.</li>

                                                    <li class="list-group-item">FIOCRUZ. Abrascão promove o lançamento da Política Nacional de Vigilância em Saúde (PNVS). Rio de Janeiro: EPSJV, 2018. Disponível em: <a href='https://www.epsjv.fiocruz.br' target='_blank' rel='noopener noreferrer'>https://www.epsjv.fiocruz.br</a>. Acesso em: 26 ago. 2025.</li>

                                                    <li class="list-group-item">GARCIA, L. P.; DUARTE, E. 1ª Conferência Nacional de Vigilância em Saúde: marco para a construção da Política Nacional de Vigilância em Saúde. <strong>Epidemiologia e Serviços de Saúde</strong>, v. 27, n. 2, e20180002, 2018.</li>

                                                    <li class="list-group-item">INTERFACE. Caminhos possíveis para a avaliação das práticas da Vigilância em Saúde. <strong>Interface – Comunicação, Saúde, Educação</strong>, v. 21, supl. 1, p. 3183-3192, 2017..</li>

                                                    <li class="list-group-item">MULTI EDUCATIVA. Gestão em Vigilância em Saúde: estratégias e implementação. São Paulo: Multi Educativa, 2024a.</li>

                                                    <li class="list-group-item">MULTI EDUCATIVA. Gestão da Vigilância em Saúde: como monitorar riscos e proteger a população. São Paulo: Multi Educativa, 2024b.</li>

                                                    <li class="list-group-item">OKUMOTO, O.; BRITO, S. M. F.; GARCIA, L. P. A Política Nacional de Vigilância em Saúde. <strong>Epidemiologia e Serviços de Saúde</strong>, v. 27, n. 3, e2018318, 2018.</li>

                                                    <li class="list-group-item">OLIVEIRA, C. M.; CRUZ, M. M. Sistema de Vigilância em Saúde no Brasil: avanços e desafios. <strong>Saúde em Debate</strong>, v. 39, n. 104, p. 255-267, 2015.</li>

                                                    <li class="list-group-item">RECKTENWALDT, M.; JUNGES, J. R. A organização e a prática da Vigilância em Saúde em municípios de pequeno porte. <strong>Saúde e Sociedade</strong>, v. 26, n. 2, p. 367-381, 2017.</li>

                                                    <li class="list-group-item">REDALYC. Aspectos facilitadores e desafios para a implementação de um modelo de educação permanente para a Vigilância Sanitária. <strong>Revista Salud Colectiva</strong>, v. 16, n. 4, p. 1-12, 2020.</li>

                                                    <li class="list-group-item">SANAR SAÚDE. Princípios da PNVS: o que você precisa saber! Blog Sanar Saúde, 2023. Disponível em: <a href='https://blog.sanarsaude.com' target='_blank' rel='noopener noreferrer'>https://blog.sanarsaude.com</a>. Acesso em: 26 ago. 2025.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Obrigatórias - Planejamento</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">GIOVANELLA, L.; MENDES, A. Atenção primária à saúde e coordenação do cuidado no SUS. <strong>Saúde em Debate</strong>, v. 43, n. spe5, p. 8-22, 2019.</li>

                                                    <li class="list-group-item">MATUS, C. Política, planejamento e governo. Brasília: IPEA, 1993.</li>

                                                    <li class="list-group-item">PAIM, J. S.; TEIXEIRA, C. F. Política, planejamento e gestão em saúde: balanço do estado da arte. <strong>Revista de Saúde Pública</strong>, v. 40, n. spe, p. 73-78, 2006.</li>

                                                    <li class="list-group-item">TANAKA, O. Y.; MELO, C. Avaliação de programas de saúde do adolescente: um modo de fazer. São Paulo: EDUSP, 2004.</li>

                                                    <li class="list-group-item">TESTA, M. Pensamento estratégico e lógica de programação: o caso da saúde. São Paulo: Hucitec, 1992.</li>

                                                    <li class="list-group-item">MENDES, E. V. (2011). As redes de atenção à saúde. Brasília: Organização Pan-Americana da Saúde.</li>

                                                    <li class="list-group-item">TANAKA, O. Y., & Tamaki, E. M. (2012). O papel da avaliação para a tomada de decisão na gestão de serviços de saúde. <strong>Ciência & Saúde Coletiva</strong>, 17(4), 821-828.</li>

                                                    <li class="list-group-item">TEIXEIRA, C. F., & Paim, J. S. (2000). Planejamento em saúde: conceitos, métodos e experiências. <strong>Ciência & Saúde Coletiva</strong>, 5(1), 17-39.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. (2016). Planejamento no SUS: conceitos, métodos e experiências. Brasília: Ministério da Saúde.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula3" aria-expanded="false" aria-controls="collapse-m1-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m1-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 3</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula4" aria-expanded="false" aria-controls="collapse-m1-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m1-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-modulo2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-modulo2" aria-expanded="false" aria-controls="collapse1-modulo2">Módulo 2</button>
                    </h5>
                    <div id="collapse1-modulo2" class="accordion-collapse collapse" aria-labelledby="heading1-modulo2" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionBibliografia-m2-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula1" aria-expanded="true" aria-controls="collapse-m2-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m2-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGENCY FOR TOXIC SUBSTANCES AND DISEASE REGISTRY. <strong>Toxicological profile for arsenic</strong>. Atlanta: ATSDR, 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">_______. <strong>Toxicological profile for benzene</strong>. Atlanta: ATSDR, 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">_______. <strong>Toxicological profile for lead</strong>. Atlanta: ATSDR, 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">_______. <strong>Toxicological profile for mercury</strong>. Atlanta: ATSDR, 1999.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ANDRADE, Maiza Ferreira de; MORAES, Luiz Roberto Santos. Contaminação por chumbo em Santo Amaro desafia décadas de pesquisas e a morosidade do poder público. <strong>Ambiente & Sociedade</strong>, v. 16, n. 2, p. 63–80, jun. 2013.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BASTA, Paulo César; HACON, Sandra de Souza. Impacto do mercúrio em áreas protegidas e povos da floresta na Amazônia Oriental: uma abordagem integrada saúde-ambiente. Aspectos metodológicos e resultados preliminares. Rio de Janeiro. Disponível em:<a href=' https://repositorio.bvspovosindigenas.fiocruz.br/items/37d0b467-c8b4-4f50-8c01-60b5f8ee1c96' target='_blank' rel='noopener noreferrer'> https://repositorio.bvspovosindigenas.fiocruz.br/items/37d0b467-c8b4-4f50-8c01-60b5f8ee1c96</a>.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CARNEIRO, Fernando Ferreira <em>et al</em>. Dossiê ABRASCO: um alerta sobre os impactos dos agrotóxicos na saúde. Rio de Janeiro: EPSJV/Fiocruz, 2015.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EATON, D. L.; KLAASSEN, C. D. Principles of toxicology. In: KLAASSEN, C. D. (ed.). C<strong>asarett and Doull’s toxicology: the basic science of poisons</strong>. 6. ed. New York: McGraw-Hill, 2001. p. 11–34.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EKINO, Shigeo <em>et al</em>. Minamata disease revisited: an update on the acute and chronic manifestations of methyl mercury poisoning. <strong>Journal of the Neurological Sciences</strong>, v. 262, n. 1–2, p. 131–144, nov. 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">KLAASSEN, C. D. (Ed.). <strong>Casarett and Doull’s Toxicology: The Basic Science of Poisons.</strong> 5. ed. New York: McGraw-Hill Education, 2001. p. 11–34.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Dioxinas e seus efeitos na saúde humana. Disponível em: <a href='https://www.who.int/news-room/fact-sheets/detail/dioxins-and-their-effects-on-human-health' target='_blank' rel='noopener noreferrer'>https://www.who.int/news-room/fact-sheets/detail/dioxins-and-their-effects-on-human-health</a>. </li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ROBERTS, James R.; REIGART, J. Routt. <strong>Recognition and management of pesticide poisonings</strong>. 6. ed. Washington, DC: United States Environmental Protection Agency, 2015.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTOS, Rubens Martins; ORTIZ, Nilce; GUILHEN, Sabine Neusatz. Análise da Tragédia de Vila Socó em Cubatão (São Paulo, Brasil) usando a Matriz de Haddon. <strong>Journal of Environmental Protection</strong>, v. 15, n. 05, p. 620–639, 2024.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula2" aria-expanded="false" aria-controls="collapse-m2-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m2-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 2</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula3" aria-expanded="false" aria-controls="collapse-m2-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m2-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 3</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula4" aria-expanded="false" aria-controls="collapse-m2-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m2-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">Klaassen, Curtis D.; Watkins III, John B. <strong>Fundamentos em toxicologia de Casarett e Doull (Lange)</strong>. AMGH Editora. Porto Alegre, 2a. edição, 2012.</li>

                                                    <li class="list-group-item">Oga, S.; Camargo, M.M.A.; Batistuzzo, J.A.O. <strong>Fundamentos de toxicologia</strong>. Atheneu Editora. São Paulo, 4a. edição, 2014.</li>

                                                    <li class="list-group-item">Shibamoto, Takayuki; Bjeldanes, Leonard F. <strong>Introdução à toxicologia de alimentos</strong>. Elsevier, 2014.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula5" aria-expanded="false" aria-controls="collapse-m2-aula5">Aula 5</button>
                                    </h5>
                                    <div id="collapse-m2-aula5" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula5" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-modulo3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-modulo3" aria-expanded="false" aria-controls="collapse1-modulo3">Módulo 3</button>
                    </h5>
                    <div id="collapse1-modulo3" class="accordion-collapse collapse" aria-labelledby="heading1-modulo3" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionBibliografia-m3-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula1" aria-expanded="true" aria-controls="collapse-m3-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m3-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 1</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula2" aria-expanded="false" aria-controls="collapse-m3-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m3-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 2</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula3" aria-expanded="false" aria-controls="collapse-m3-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m3-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 3</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula4" aria-expanded="false" aria-controls="collapse-m3-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m3-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 4</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula5" aria-expanded="false" aria-controls="collapse-m3-aula5">Aula 5</button>
                                    </h5>
                                    <div id="collapse-m3-aula5" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula5" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 5</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula6">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula6" aria-expanded="false" aria-controls="collapse-m3-aula6">Aula 6</button>
                                    </h5>
                                    <div id="collapse-m3-aula6" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula6" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 6</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim do Accordion Módulos -->
        </div>

    </div>
</div>
		`,
	},
	materialcomplementar: {
		ariaLabel: 'materialcomplementar',
		modalSize: 'modal-xl',
		modalTitle: 'Material Complementar',
		modalBody: `
			<div class="row justify-content-center pt-5">
    <div class="col-12 col-md-11">
        <div class="mb-5">
            <!-- Accordion Módulos-->
            <div class="accordion accordion-flush" id="accordionMaterialComplementar">
                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-material-modulo1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-material-modulo1" aria-expanded="true" aria-controls="collapse1-material-modulo1">Módulo 1</button>
                    </h5>
                    <div id="collapse1-material-modulo1" class="accordion-collapse collapse" aria-labelledby="heading1-material-modulo1" data-bs-parent="">

                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionMaterialComplementar-m1-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula1" aria-expanded="true" aria-controls="collapse-m1-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m1-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula2" aria-expanded="false" aria-controls="collapse-m1-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m1-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item"></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula3" aria-expanded="false" aria-controls="collapse-m1-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m1-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 3</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula4" aria-expanded="false" aria-controls="collapse-m1-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m1-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-material-modulo2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-material-modulo2" aria-expanded="false" aria-controls="collapse1-material-modulo2">Módulo 2</button>
                    </h5>
                    <div id="collapse1-material-modulo2" class="accordion-collapse collapse" aria-labelledby="heading1-material-modulo2" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionMaterialComplementar-m2-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula1" aria-expanded="true" aria-controls="collapse-m2-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m2-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGENCY FOR TOXIC SUBSTANCES AND DISEASE REGISTRY. <strong>Toxicological profile for arsenic</strong>. Atlanta: ATSDR, 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">_______. <strong>Toxicological profile for benzene</strong>. Atlanta: ATSDR, 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">_______. <strong>Toxicological profile for lead</strong>. Atlanta: ATSDR, 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">_______. <strong>Toxicological profile for mercury</strong>. Atlanta: ATSDR, 1999.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ANDRADE, Maiza Ferreira de; MORAES, Luiz Roberto Santos. Contaminação por chumbo em Santo Amaro desafia décadas de pesquisas e a morosidade do poder público. <strong>Ambiente & Sociedade</strong>, v. 16, n. 2, p. 63–80, jun. 2013.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BASTA, Paulo César; HACON, Sandra de Souza. Impacto do mercúrio em áreas protegidas e povos da floresta na Amazônia Oriental: uma abordagem integrada saúde-ambiente. Aspectos metodológicos e resultados preliminares. Rio de Janeiro. Disponível em:<a href=' https://repositorio.bvspovosindigenas.fiocruz.br/items/37d0b467-c8b4-4f50-8c01-60b5f8ee1c96' target='_blank' rel='noopener noreferrer'> https://repositorio.bvspovosindigenas.fiocruz.br/items/37d0b467-c8b4-4f50-8c01-60b5f8ee1c96</a>.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CARNEIRO, Fernando Ferreira <em>et al</em>. Dossiê ABRASCO: um alerta sobre os impactos dos agrotóxicos na saúde. Rio de Janeiro: EPSJV/Fiocruz, 2015.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EATON, D. L.; KLAASSEN, C. D. Principles of toxicology. In: KLAASSEN, C. D. (ed.). C<strong>asarett and Doull’s toxicology: the basic science of poisons</strong>. 6. ed. New York: McGraw-Hill, 2001. p. 11–34.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EKINO, Shigeo <em>et al</em>. Minamata disease revisited: an update on the acute and chronic manifestations of methyl mercury poisoning. <strong>Journal of the Neurological Sciences</strong>, v. 262, n. 1–2, p. 131–144, nov. 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">KLAASSEN, C. D. (Ed.). <strong>Casarett and Doull’s Toxicology: The Basic Science of Poisons.</strong> 5. ed. New York: McGraw-Hill Education, 2001. p. 11–34.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Dioxinas e seus efeitos na saúde humana. Disponível em: <a href='https://www.who.int/news-room/fact-sheets/detail/dioxins-and-their-effects-on-human-health' target='_blank' rel='noopener noreferrer'>https://www.who.int/news-room/fact-sheets/detail/dioxins-and-their-effects-on-human-health</a>. </li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ROBERTS, James R.; REIGART, J. Routt. <strong>Recognition and management of pesticide poisonings</strong>. 6. ed. Washington, DC: United States Environmental Protection Agency, 2015.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTOS, Rubens Martins; ORTIZ, Nilce; GUILHEN, Sabine Neusatz. Análise da Tragédia de Vila Socó em Cubatão (São Paulo, Brasil) usando a Matriz de Haddon. <strong>Journal of Environmental Protection</strong>, v. 15, n. 05, p. 620–639, 2024.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula2" aria-expanded="false" aria-controls="collapse-m2-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m2-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 2</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula3" aria-expanded="false" aria-controls="collapse-m2-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m2-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 3</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula4" aria-expanded="false" aria-controls="collapse-m2-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m2-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 4</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula5" aria-expanded="false" aria-controls="collapse-m2-aula5">Aula 5</button>
                                    </h5>
                                    <div id="collapse-m2-aula5" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula5" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-material-modulo3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-material-modulo3" aria-expanded="false" aria-controls="collapse1-material-modulo3">Módulo 3</button>
                    </h5>
                    <div id="collapse1-material-modulo3" class="accordion-collapse collapse" aria-labelledby="heading1-material-modulo3" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionMaterialComplementar-m3-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula1" aria-expanded="true" aria-controls="collapse-m3-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m3-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 1</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula2" aria-expanded="false" aria-controls="collapse-m3-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m3-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 2</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula3" aria-expanded="false" aria-controls="collapse-m3-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m3-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 3</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula4" aria-expanded="false" aria-controls="collapse-m3-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m3-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 4</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula5" aria-expanded="false" aria-controls="collapse-m3-aula5">Aula 5</button>
                                    </h5>
                                    <div id="collapse-m3-aula5" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula5" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 5</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula6">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula6" aria-expanded="false" aria-controls="collapse-m3-aula6">Aula 6</button>
                                    </h5>
                                    <div id="collapse-m3-aula6" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula6" data-bs-parent="">
                                        <div class="accordion-body">
                                            <p>Bibliografia Aula 6</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim do Accordion Módulos -->
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
	}
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

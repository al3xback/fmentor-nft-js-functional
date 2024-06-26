const createHeaderEl = () => {
	const headerEl = createElement('header');

	const headerTitleEl = createElement(
		'h1',
		'sr-only',
		'NFT preview card component'
	);

	headerEl.appendChild(headerTitleEl);

	return headerEl;
};

const createCardEl = () => {
	const cardEl = createElement('article', 'card');

	/* card image */
	const cardImageWrapperEl = createElement('div', 'card__image');

	const cardImageEl = createElement('img', null, null, [
		createElementAttribute('src', './images/equilibrium.jpg'),
		createElementAttribute('width', 302),
		createElementAttribute('height', 302),
		createElementAttribute('alt', 'Equilibrium'),
	]);

	cardImageWrapperEl.appendChild(cardImageEl);

	/* card content */
	const cardContentEl = createElement('div', 'card__content');

	/* card title */
	const cardTitleEl = createElement('h2', 'card__title');

	const cardTitleLinkEl = createElement(
		'a',
		'btn btn--link',
		'Equilibrium #3429',
		[createElementAttribute('href', '#')]
	);

	cardTitleEl.appendChild(cardTitleLinkEl);

	/* card description */
	const cardDescriptionEl = createElement(
		'p',
		'card__desc',
		'Our Equilibrium collection promotes balance and calm.'
	);

	/* card statuses */
	const cardStatusListEl = createElement('ul', 'card__stats-list');

	const cardStatuses = [
		{ icon: 'icon-ethereum', value: '0.041 ETH' },
		{ icon: 'icon-clock', value: '3 days left' },
	];

	for (const status of cardStatuses) {
		const cardStatusItemEl = createElement('li', 'card__stats-list-item');

		const cardStatusItemIconEl = createElement('i', status.icon);
		cardStatusItemIconEl.ariaHidden = 'true';

		const cardStatusItemTextEl = createElement('span', null, status.value);

		cardStatusItemEl.appendChild(cardStatusItemIconEl);
		cardStatusItemEl.appendChild(cardStatusItemTextEl);

		cardStatusListEl.appendChild(cardStatusItemEl);
	}

	/* card author */
	const cardAuthorEl = createElement('div', 'card__author');

	const cardAuthorImageEl = createElement('img', 'card__author-img', null, [
		createElementAttribute('src', './images/avatar.png'),
		createElementAttribute('width', 33),
		createElementAttribute('height', 33),
		createElementAttribute('alt', 'Jules Wyvern'),
	]);

	const cardAuthorDescriptionEl = createElement(
		'span',
		'card__author-desc',
		'Creation of '
	);

	const cardAuthorDescriptionLinkEl = createElement(
		'a',
		'btn btn--link',
		'Jules Wyvern',
		[createElementAttribute('href', '#')]
	);

	cardAuthorDescriptionEl.appendChild(cardAuthorDescriptionLinkEl);

	cardAuthorEl.appendChild(cardAuthorImageEl);
	cardAuthorEl.appendChild(cardAuthorDescriptionEl);

	cardContentEl.appendChild(cardTitleEl);
	cardContentEl.appendChild(cardDescriptionEl);
	cardContentEl.appendChild(cardStatusListEl);
	cardContentEl.appendChild(cardAuthorEl);

	cardEl.appendChild(cardImageWrapperEl);
	cardEl.appendChild(cardContentEl);

	return cardEl;
};

const createMainEl = () => {
	const mainEl = createElement('main');

	const mainContainerEl = createElement('div', 'container');

	const cardEl = createCardEl();

	mainContainerEl.appendChild(cardEl);

	mainEl.appendChild(mainContainerEl);

	return mainEl;
};

const createFooterEl = () => {
	const footerEl = createElement('footer');

	const footerContainerEl = createElement('div', 'container');

	const footerTextEl = createElement('p', null, 'Challenge by ');

	const footerTextLinkCreatorEl = createElement(
		'a',
		'btn btn--link',
		'Frontend Mentor',
		[
			createElementAttribute(
				'href',
				'https://www.frontendmentor.io?ref=challenge'
			),
			createElementAttribute('rel', 'noopener'),
			createElementAttribute('target', '_blank'),
		]
	);

	const footerTextLinkCoderEl = createElement(
		'a',
		'btn btn--link',
		'al3xback',
		[
			createElementAttribute('href', 'https://github.com/al3xback'),
			createElementAttribute('rel', 'noopener'),
			createElementAttribute('target', '_blank'),
		]
	);

	footerTextEl.appendChild(footerTextLinkCreatorEl);
	footerTextEl.append('. Coded by ');
	footerTextEl.appendChild(footerTextLinkCoderEl);

	footerContainerEl.appendChild(footerTextEl);

	footerEl.appendChild(footerContainerEl);

	return footerEl;
};

/* initApp */
const body = document.body;

const headerEl = createHeaderEl();
const mainEl = createMainEl();
const footerEl = createFooterEl();

body.appendChild(headerEl);
body.appendChild(mainEl);
body.appendChild(footerEl);

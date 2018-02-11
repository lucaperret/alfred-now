'use strict';
const alfy = require('alfy');
const dateFormat = require('date-format');

const nowUrl = 'https://api.zeit.co/v2/now/';
const Authorization = 'Bearer ' + process.env.token;

alfy.fetch(nowUrl + 'aliases', {
	headers: {
		Authorization
	}
}).then(data => {
	let aliases = data.aliases;
	if (alfy.input) {
		aliases = alfy.inputMatches(aliases, 'alias');
	}
	alfy.output(aliases.map(alias => {
		let subtitle;
		if (alias.rules) {
			subtitle = alias.alias;
		} else {
			subtitle = alias.deployment.url;
		}
		return {
			uid: alias.uid,
			title: alias.alias,
			subtitle: subtitle,
			arg: 'https://' + subtitle,
			autocomplete: alias.alias,
			mods: {
				cmd: {
					subtitle: `Created at ${dateFormat('yyyy-dd-MM', new Date(alias.created))}`
				}
			}
		}
	}));
});

'use strict';
const alfy = require('alfy');
const dateFormat = require('date-format');

const nowUrl = 'https://api.zeit.co/v2/now/';
const Authorization = 'Bearer ' + process.env.token;

alfy.fetch(nowUrl + 'deployments', {
	headers: {
		Authorization
	}
}).then(data => {
	const deployments = alfy
		.inputMatches(data.deployments, 'name')
		.filter(deployment => deployment.state === 'READY')
		.map(deployment => ({
			uid: deployment.uid,
			title: deployment.name,
			subtitle: deployment.url,
			arg: 'https://' + deployment.url,
			autocomplete: deployment.name,
			quicklookurl: deployment.url,
			mods: {
				cmd: {
					subtitle: `Type ${deployment.type}, created at ${dateFormat('yyyy-dd-MM', new Date(deployment.created))}`
				}
			}
		}))

	alfy.output(deployments);
});

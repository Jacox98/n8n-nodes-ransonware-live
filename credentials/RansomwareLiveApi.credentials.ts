import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class RansomwareLiveApi implements ICredentialType {
	name = 'ransomwareLiveApi';
	displayName = 'Ransomware.live API';
	documentationUrl = 'https://www.ransomware.live/api';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
			description: 'API key issued by ransomware.live',
			typeOptions: {
				password: true,
			},
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api-pro.ransomware.live',
			description: 'Override the API base URL if you use a private instance',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-KEY': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/validate',
		},
	};
}


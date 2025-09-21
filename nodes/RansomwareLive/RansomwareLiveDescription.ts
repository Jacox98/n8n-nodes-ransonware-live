import type { INodeProperties } from 'n8n-workflow';

export const ransomwareLiveOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['forms8k'],
			},
		},
		options: [
			{
				name: 'List Filings',
				value: 'list',
				action: 'List 8-K filings',
				description: 'Returns 8-K forms related to cybersecurity incidents',
			},
		],
		default: 'list',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['csirt'],
			},
		},
		options: [
			{
				name: 'Get CSIRT Entries',
				value: 'get',
				action: 'Get CSIRT entries',
				description: 'Returns CSIRT/CERT entries for a country',
			},
		],
		default: 'get',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['groups'],
			},
		},
		options: [
			{
				name: 'List Groups',
				value: 'list',
				action: 'List ransomware groups',
				description: 'Returns a list of all known ransomware groups',
			},
			{
				name: 'Get Group Details',
				value: 'get',
				action: 'Get ransomware group details',
				description: 'Returns detailed information for a ransomware group',
			},
		],
		default: 'list',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['iocs'],
			},
		},
		options: [
			{
				name: 'List IOC Groups',
				value: 'list',
				action: 'List IOC bearing groups',
				description: 'Returns ransomware groups that have indicators of compromise',
			},
			{
				name: 'Get Group IOCs',
				value: 'get',
				action: 'Get group indicators of compromise',
				description: 'Returns indicators of compromise for a ransomware group',
			},
		],
		default: 'list',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['negotiations'],
			},
		},
		options: [
			{
				name: 'List Groups',
				value: 'listGroups',
				action: 'List negotiation enabled groups',
				description: 'Lists ransomware groups with negotiation chats',
			},
			{
				name: 'List Group Negotiations',
				value: 'listByGroup',
				action: 'List negotiations for a group',
				description: 'Returns negotiation chat metadata for a ransomware group',
			},
			{
				name: 'Get Negotiation Chat',
				value: 'getChat',
				action: 'Get negotiation chat details',
				description: 'Returns messages and ransom info for a negotiation chat',
			},
		],
		default: 'listGroups',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['press'],
			},
		},
		options: [
			{
				name: 'List Articles',
				value: 'all',
				action: 'List cyberattack press articles',
				description: 'Returns cyberattack entries with optional filters',
			},
			{
				name: 'List Recent Articles',
				value: 'recent',
				action: 'List recent cyberattack press articles',
				description: 'Returns the 100 most recent cyberattack entries',
			},
		],
		default: 'recent',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ransomnotes'],
			},
		},
		options: [
			{
				name: 'List Groups',
				value: 'listGroups',
				action: 'List ransomnote groups',
				description: 'Lists ransomware groups that have ransom notes',
			},
			{
				name: 'List Group Ransomnotes',
				value: 'listByGroup',
				action: 'List ransomnotes for a group',
				description: 'Returns ransomnote filenames for a ransomware group',
			},
			{
				name: 'Get Ransomnote',
				value: 'get',
				action: 'Get ransomnote',
				description: 'Returns the content of a specific ransomnote',
			},
		],
		default: 'listGroups',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sectors'],
			},
		},
		options: [
			{
				name: 'List Sectors',
				value: 'list',
				action: 'List victim sectors',
				description: 'Returns unique victim sectors and counts',
			},
		],
		default: 'list',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['stats'],
			},
		},
		options: [
			{
				name: 'Get Stats',
				value: 'get',
				action: 'Get API statistics',
				description: 'Returns platform statistics and last update information',
			},
		],
		default: 'get',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['validate'],
			},
		},
		options: [
			{
				name: 'Validate API Key',
				value: 'check',
				action: 'Validate API key',
				description: 'Checks whether the configured API key is valid',
			},
		],
		default: 'check',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['victims'],
			},
		},
		options: [
			{
				name: 'List Victims',
				value: 'list',
				action: 'List victims',
				description: 'Returns victims filtered by provided criteria',
			},
			{
				name: 'List Recent Victims',
				value: 'recent',
				action: 'List recent victims',
				description: 'Returns the last 100 victims by discovered or attacked date',
			},
			{
				name: 'Search Victims',
				value: 'search',
				action: 'Search victims',
				description: 'Searches victims by keyword and optional filters',
			},
			{
				name: 'Get Victim',
				value: 'get',
				action: 'Get victim details',
				description: 'Returns details for a single victim by ID',
			},
		],
		default: 'list',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['yara'],
			},
		},
		options: [
			{
				name: 'List Groups',
				value: 'list',
				action: 'List YARA rule groups',
				description: 'Lists ransomware groups with YARA rules',
			},
			{
				name: 'Get Group YARA Rules',
				value: 'get',
				action: 'Get YARA rules',
				description: 'Returns YARA rules for a ransomware group',
			},
		],
		default: 'list',
	},
];

export const ransomwareLiveFields: INodeProperties[] = [
	{
		displayName: 'Ticker',
		name: 'ticker',
		type: 'string',
		default: '',
		description: 'Filter by stock ticker (e.g. MSFT)',
		displayOptions: {
			show: {
				resource: ['forms8k'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'CIK',
		name: 'cik',
		type: 'string',
		default: '',
		description: 'Filter by CIK code (e.g. 0001234567)',
		displayOptions: {
			show: {
				resource: ['forms8k'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Year',
		name: 'formsYear',
		type: 'string',
		default: '',
		description: '4-digit year of filing date (e.g. 2025)',
		displayOptions: {
			show: {
				resource: ['forms8k'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Month',
		name: 'formsMonth',
		type: 'string',
		default: '',
		description: '2-digit month (e.g. 06)',
		displayOptions: {
			show: {
				resource: ['forms8k'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Include Item 1.05',
		name: 'item105',
		type: 'boolean',
		default: true,
		description: 'Whether to include Item 1.05 filings (true/false, default true)',
		displayOptions: {
			show: {
				resource: ['forms8k'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Include Item 8.01',
		name: 'item801',
		type: 'boolean',
		default: true,
		description: 'Whether to include Item 8.01 filings (true/false, default true)',
		displayOptions: {
			show: {
				resource: ['forms8k'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Country Code',
		name: 'countryCode',
		type: 'string',
		default: '',
		required: true,
		description: '2-letter or 3-letter ISO country code (e.g. FR or FRA)',
		displayOptions: {
			show: {
				resource: ['csirt'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'Group Name',
		name: 'groupName',
		type: 'string',
		default: '',
		required: true,
		description: 'Ransomware group name (e.g. lockbit)',
		displayOptions: {
			show: {
				resource: ['groups'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'IOC Type',
		name: 'iocType',
		type: 'string',
		default: '',
		description: 'Filter by IOC type (e.g. md5, ip, email)',
		displayOptions: {
			show: {
				resource: ['iocs'],
				operation: ['list', 'get'],
			},
		},
	},
	{
		displayName: 'Group',
		name: 'iocGroup',
		type: 'string',
		default: '',
		required: true,
		description: 'Ransomware group name for IOC lookup (e.g. lockbit3)',
		displayOptions: {
			show: {
				resource: ['iocs'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'Group',
		name: 'negotiationGroup',
		type: 'string',
		default: '',
		required: true,
		description: 'Ransomware group name (e.g. lockbit)',
		displayOptions: {
			show: {
				resource: ['negotiations'],
				operation: ['listByGroup', 'getChat'],
			},
		},
	},
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		default: '',
		required: true,
		description: 'Chat ID filename without extension (e.g. 20240517)',
		displayOptions: {
			show: {
				resource: ['negotiations'],
				operation: ['getChat'],
			},
		},
	},
	{
		displayName: 'Year',
		name: 'pressYear',
		type: 'string',
		default: '',
		description: 'Filter by 4-digit year (e.g. 2024)',
		displayOptions: {
			show: {
				resource: ['press'],
				operation: ['all'],
			},
		},
	},
	{
		displayName: 'Month',
		name: 'pressMonth',
		type: 'string',
		default: '',
		description: 'Filter by 2-digit month (e.g. 03)',
		displayOptions: {
			show: {
				resource: ['press'],
				operation: ['all'],
			},
		},
	},
	{
		displayName: 'Country',
		name: 'pressCountry',
		type: 'string',
		default: '',
		description: 'Filter by 2-letter ISO country code (e.g. FR, US)',
		displayOptions: {
			show: {
				resource: ['press'],
				operation: ['all', 'recent'],
			},
		},
	},
	{
		displayName: 'Group',
		name: 'ransomnoteGroup',
		type: 'string',
		default: '',
		required: true,
		description: 'Ransomware group name (e.g. lockbit)',
		displayOptions: {
			show: {
				resource: ['ransomnotes'],
				operation: ['listByGroup', 'get'],
			},
		},
	},
	{
		displayName: 'Note Name',
		name: 'noteName',
		type: 'string',
		default: '',
		required: true,
		description: 'Ransomnote filename (e.g. note1.txt)',
		displayOptions: {
			show: {
				resource: ['ransomnotes'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'Group',
		name: 'victimGroup',
		type: 'string',
		default: '',
		description: 'Filter by ransomware group name (e.g. lockbit)',
		displayOptions: {
			show: {
				resource: ['victims'],
				operation: ['list', 'search'],
			},
		},
	},
	{
		displayName: 'Sector',
		name: 'victimSector',
		type: 'string',
		default: '',
		description: 'Filter by victim sector (e.g. healthcare)',
		displayOptions: {
			show: {
				resource: ['victims'],
				operation: ['list', 'search'],
			},
		},
	},
	{
		displayName: 'Country',
		name: 'victimCountry',
		type: 'string',
		default: '',
		description: 'Filter by 2-letter country code (e.g. US, FR)',
		displayOptions: {
			show: {
				resource: ['victims'],
				operation: ['list', 'search'],
			},
		},
	},
	{
		displayName: 'Year',
		name: 'victimYear',
		type: 'string',
		default: '',
		description: 'Filter by 4-digit year (e.g. 2024)',
		displayOptions: {
			show: {
				resource: ['victims'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Month',
		name: 'victimMonth',
		type: 'string',
		default: '',
		description: 'Filter by 2-digit month (e.g. 03)',
		displayOptions: {
			show: {
				resource: ['victims'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Date Field',
		name: 'dateField',
		type: 'options',
		options: [
			{
				name: 'Discovered',
				value: 'discovered',
			},
			{
				name: 'Published',
				value: 'published',
			},
			{
				name: 'Attacked',
				value: 'attacked',
			},
		],
		default: 'discovered',
		description: 'Use discovered (default), attacked, or published date for filtering',
		displayOptions: {
			show: {
				resource: ['victims'],
				operation: ['list'],
			},
		},
	},
	{
		displayName: 'Order',
		name: 'order',
		type: 'options',
		options: [
			{
				name: 'Discovered',
				value: 'discovered',
			},
			{
				name: 'Attacked',
				value: 'attacked',
			},
		],
		default: 'discovered',
		description: 'Sort by discovered or attacked date',
		displayOptions: {
			show: {
				resource: ['victims'],
				operation: ['recent'],
			},
		},
	},
	{
		displayName: 'Search Query',
		name: 'searchQuery',
		type: 'string',
		default: '',
		description: 'Keyword that matches victim post title or website',
		displayOptions: {
			show: {
				resource: ['victims'],
				operation: ['search'],
			},
		},
	},
	{
		displayName: 'Victim ID',
		name: 'victimId',
		type: 'string',
		default: '',
		required: true,
		description: 'Base64 victim identifier (post_title@group_name)',
		displayOptions: {
			show: {
				resource: ['victims'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'Group',
		name: 'yaraGroup',
		type: 'string',
		default: '',
		required: true,
		description: 'Ransomware group name for YARA rules (e.g. lockbit)',
		displayOptions: {
			show: {
				resource: ['yara'],
				operation: ['get'],
			},
		},
	},
];



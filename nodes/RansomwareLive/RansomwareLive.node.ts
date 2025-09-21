import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IHttpRequestOptions,
} from 'n8n-workflow';
import { NodeConnectionType, NodeOperationError } from 'n8n-workflow';

import { ransomwareLiveFields, ransomwareLiveOperations } from './RansomwareLiveDescription';

export class RansomwareLive implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Ransomware.live',
		name: 'ransomwareLive',
		group: ['transform'],
		version: 1,
		description: 'Interact with the ransomware.live API',
		subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
		icon: 'file:ransomwareLive.svg',
		defaults: {
			name: 'Ransomware.live',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'ransomwareLiveApi',
				required: true,
			},
		],
		requestDefaults: {
			headers: {
				Accept: 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: '8-K Filing', value: 'forms8k' },
					{ name: 'CSIRT Entry', value: 'csirt' },
					{ name: 'Group', value: 'groups' },
					{ name: 'IOC', value: 'iocs' },
					{ name: 'Negotiation', value: 'negotiations' },
					{ name: 'Press Article', value: 'press' },
					{ name: 'Ransomnote', value: 'ransomnotes' },
					{ name: 'Sector', value: 'sectors' },
					{ name: 'Statistic', value: 'stats' },
					{ name: 'Validation', value: 'validate' },
					{ name: 'Victim', value: 'victims' },
					{ name: 'YARA Rule', value: 'yara' },
				],
				default: 'victims',
			},
			...ransomwareLiveOperations,
			...ransomwareLiveFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const credentials = await this.getCredentials('ransomwareLiveApi');
		const baseURL = (credentials?.baseUrl as string) || 'https://api-pro.ransomware.live';

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			try {
				const resource = this.getNodeParameter('resource', itemIndex) as string;
				const operation = this.getNodeParameter('operation', itemIndex) as string;

				const qs: IDataObject = {};
				let url = '';

				switch (resource) {
					case 'forms8k': {
						if (operation !== 'list') {
							throw new NodeOperationError(
								this.getNode(),
								`Unsupported operation "${operation}" for resource "${resource}"`,
								{ itemIndex },
							);
						}
						url = '/8k';
						const ticker = this.getNodeParameter('ticker', itemIndex, '') as string;
						if (ticker) qs.ticker = ticker;
						const cik = this.getNodeParameter('cik', itemIndex, '') as string;
						if (cik) qs.cik = cik;
						const formsYear = this.getNodeParameter('formsYear', itemIndex, '') as string;
						if (formsYear) qs.year = formsYear;
						const formsMonth = this.getNodeParameter('formsMonth', itemIndex, '') as string;
						if (formsMonth) qs.month = formsMonth;
						const item105 = this.getNodeParameter('item105', itemIndex) as boolean;
						if (item105 !== undefined) qs.item105 = item105 ? 'true' : 'false';
						const item801 = this.getNodeParameter('item801', itemIndex) as boolean;
						if (item801 !== undefined) qs.item801 = item801 ? 'true' : 'false';
						break;
					}
					case 'csirt': {
						if (operation !== 'get') {
							throw new NodeOperationError(
								this.getNode(),
								`Unsupported operation "${operation}" for resource "${resource}"`,
								{ itemIndex },
							);
						}
						const countryCode = this.getNodeParameter('countryCode', itemIndex) as string;
						url = `/csirt/${encodeURIComponent(countryCode)}`;
						break;
					}
					case 'groups': {
						if (operation === 'list') {
							url = '/groups';
						} else if (operation === 'get') {
							const groupName = this.getNodeParameter('groupName', itemIndex) as string;
							url = `/groups/${encodeURIComponent(groupName)}`;
						} else {
							throw new NodeOperationError(
								this.getNode(),
								`Unsupported operation "${operation}" for resource "${resource}"`,
								{ itemIndex },
							);
						}
						break;
					}
					case 'iocs': {
						if (operation === 'list') {
							url = '/iocs';
							const iocType = this.getNodeParameter('iocType', itemIndex, '') as string;
							if (iocType) qs.type = iocType;
						} else if (operation === 'get') {
							const iocGroup = this.getNodeParameter('iocGroup', itemIndex) as string;
							url = `/iocs/${encodeURIComponent(iocGroup)}`;
							const iocType = this.getNodeParameter('iocType', itemIndex, '') as string;
							if (iocType) qs.type = iocType;
						} else {
							throw new NodeOperationError(
								this.getNode(),
								`Unsupported operation "${operation}" for resource "${resource}"`,
								{ itemIndex },
							);
						}
						break;
					}
					case 'negotiations': {
						if (operation === 'listGroups') {
							url = '/negotiations';
						} else if (operation === 'listByGroup') {
							const negotiationGroup = this.getNodeParameter('negotiationGroup', itemIndex) as string;
							url = `/negotiations/${encodeURIComponent(negotiationGroup)}`;
						} else if (operation === 'getChat') {
							const negotiationGroup = this.getNodeParameter('negotiationGroup', itemIndex) as string;
							const chatId = this.getNodeParameter('chatId', itemIndex) as string;
							url = `/negotiations/${encodeURIComponent(negotiationGroup)}/${encodeURIComponent(chatId)}`;
						} else {
							throw new NodeOperationError(
								this.getNode(),
								`Unsupported operation "${operation}" for resource "${resource}"`,
								{ itemIndex },
							);
						}
						break;
					}
					case 'press': {
						if (operation === 'all') {
							url = '/press/all';
							const pressYear = this.getNodeParameter('pressYear', itemIndex, '') as string;
							if (pressYear) qs.year = pressYear;
							const pressMonth = this.getNodeParameter('pressMonth', itemIndex, '') as string;
							if (pressMonth) qs.month = pressMonth;
							const pressCountry = this.getNodeParameter('pressCountry', itemIndex, '') as string;
							if (pressCountry) qs.country = pressCountry;
						} else if (operation === 'recent') {
							url = '/press/recent';
							const pressCountry = this.getNodeParameter('pressCountry', itemIndex, '') as string;
							if (pressCountry) qs.country = pressCountry;
						} else {
							throw new NodeOperationError(
								this.getNode(),
								`Unsupported operation "${operation}" for resource "${resource}"`,
								{ itemIndex },
							);
						}
						break;
					}
					case 'ransomnotes': {
						if (operation === 'listGroups') {
							url = '/ransomnotes';
						} else if (operation === 'listByGroup') {
							const ransomnoteGroup = this.getNodeParameter('ransomnoteGroup', itemIndex) as string;
							url = `/ransomnotes/${encodeURIComponent(ransomnoteGroup)}`;
						} else if (operation === 'get') {
							const ransomnoteGroup = this.getNodeParameter('ransomnoteGroup', itemIndex) as string;
							const noteName = this.getNodeParameter('noteName', itemIndex) as string;
							url = `/ransomnotes/${encodeURIComponent(ransomnoteGroup)}/${encodeURIComponent(noteName)}`;
						} else {
							throw new NodeOperationError(
								this.getNode(),
								`Unsupported operation "${operation}" for resource "${resource}"`,
								{ itemIndex },
							);
						}
						break;
					}
					case 'sectors': {
						if (operation !== 'list') {
							throw new NodeOperationError(
								this.getNode(),
								`Unsupported operation "${operation}" for resource "${resource}"`,
								{ itemIndex },
							);
						}
						url = '/listsectors';
						break;
					}
					case 'stats': {
						if (operation !== 'get') {
							throw new NodeOperationError(
								this.getNode(),
								`Unsupported operation "${operation}" for resource "${resource}"`,
								{ itemIndex },
							);
						}
						url = '/stats';
						break;
					}
					case 'validate': {
						if (operation !== 'check') {
							throw new NodeOperationError(
								this.getNode(),
								`Unsupported operation "${operation}" for resource "${resource}"`,
								{ itemIndex },
							);
						}
						url = '/validate';
						break;
					}
					case 'victims': {
						if (operation === 'list') {
							url = '/victims';
							const victimGroup = this.getNodeParameter('victimGroup', itemIndex, '') as string;
							if (victimGroup) qs.group = victimGroup;
							const victimSector = this.getNodeParameter('victimSector', itemIndex, '') as string;
							if (victimSector) qs.sector = victimSector;
							const victimCountry = this.getNodeParameter('victimCountry', itemIndex, '') as string;
							if (victimCountry) qs.country = victimCountry;
							const victimYear = this.getNodeParameter('victimYear', itemIndex, '') as string;
							if (victimYear) qs.year = victimYear;
							const victimMonth = this.getNodeParameter('victimMonth', itemIndex, '') as string;
							if (victimMonth) qs.month = victimMonth;
							const dateField = this.getNodeParameter('dateField', itemIndex) as string;
							if (dateField) qs.date = dateField;
						} else if (operation === 'recent') {
							url = '/victims/recent';
							const order = this.getNodeParameter('order', itemIndex) as string;
							if (order) qs.order = order;
						} else if (operation === 'search') {
							url = '/victims/search';
							const searchQuery = this.getNodeParameter('searchQuery', itemIndex, '') as string;
							if (searchQuery) qs.q = searchQuery;
							const victimGroup = this.getNodeParameter('victimGroup', itemIndex, '') as string;
							if (victimGroup) qs.group = victimGroup;
							const victimSector = this.getNodeParameter('victimSector', itemIndex, '') as string;
							if (victimSector) qs.sector = victimSector;
							const victimCountry = this.getNodeParameter('victimCountry', itemIndex, '') as string;
							if (victimCountry) qs.country = victimCountry;
						} else if (operation === 'get') {
							const victimId = this.getNodeParameter('victimId', itemIndex) as string;
							url = `/victim/${encodeURIComponent(victimId)}`;
						} else {
							throw new NodeOperationError(
								this.getNode(),
								`Unsupported operation "${operation}" for resource "${resource}"`,
								{ itemIndex },
							);
						}
						break;
					}
					case 'yara': {
						if (operation === 'list') {
							url = '/yara';
						} else if (operation === 'get') {
							const yaraGroup = this.getNodeParameter('yaraGroup', itemIndex) as string;
							url = `/yara/${encodeURIComponent(yaraGroup)}`;
						} else {
							throw new NodeOperationError(
								this.getNode(),
								`Unsupported operation "${operation}" for resource "${resource}"`,
								{ itemIndex },
							);
						}
						break;
					}
					default: {
						throw new NodeOperationError(
							this.getNode(),
							`Unsupported resource "${resource}"`,
							{ itemIndex },
						);
					}
				}

				const requestOptions: IHttpRequestOptions = {
					method: 'GET',
					url,
					baseURL,
					json: true,
				};

				if (Object.keys(qs).length > 0) {
					requestOptions.qs = qs;
				}

				const responseData = await this.helpers.httpRequestWithAuthentication.call(
					this,
					'ransomwareLiveApi',
					requestOptions,
				);

				if (Array.isArray(responseData)) {
					returnData.push(...this.helpers.returnJsonArray(responseData as IDataObject[]));
				} else if (responseData && typeof responseData === 'object') {
					returnData.push({ json: responseData as IDataObject });
				} else if (responseData !== undefined) {
					returnData.push({ json: { data: responseData } });
				} else {
					returnData.push({ json: { success: true } });
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: (error as Error).message },
						pairedItem: itemIndex,
					});
					continue;
				}

				if (error instanceof NodeOperationError) {
					throw error;
				}

				throw new NodeOperationError(this.getNode(), error as Error, { itemIndex });
			}
		}

		return [returnData];
	}
}



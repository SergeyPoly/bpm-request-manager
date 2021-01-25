import BaseHttpService from '../../../services/base-http.service';

export default class ProcessesIdService extends BaseHttpService {
    async getProcessesId() {
        const endpoint = 'process-instance';
        const {username} = this.loadUsername();
        const body = {
            variables:
                [
                    {
                        'name': 'Initiator',
                        'operator': 'eq',
                        'value': `${username}`,
                    }
                ],
            sorting:
                [
                    {
                        'sortBy': 'definitionKey',
                        'sortOrder': 'asc',
                    },
                    {
                        'sortBy': 'instanceId',
                        'sortOrder': 'desc',
                    }
                ],
        };
        const {data} = await this.post(endpoint, body);
        return data;
    }

    async getProcessStatus(id) {
        const endpoint = `task?processInstanceId=${id}`;
        const response = await this.get(endpoint);
        return response;
    }

    async getProcessName(key) {
        const {tenantId} = this.loadTenantId();
        const endpoint = `process-definition/key/${key}/tenant-id/${tenantId}/xml`;
        const response = await this.get(endpoint);
        return response;
    }

    async getProcessesDefinitions() {
        const {tenantId} = this.loadTenantId();
        const endpoint = `process-definition?tenantIdIn=${tenantId}`;
        const response = await this.get(endpoint);
        return response;
    }

    async startNewProcess(key, data) {
        const {tenantId} = this.loadTenantId();
        const body = {
            variables: data,
            withVariablesInReturn: true
        };
        const endpoint = `process-definition/key/${key}/tenant-id/${tenantId}/start`;
        const response = this.post(endpoint, body);
        return response;
    }
};


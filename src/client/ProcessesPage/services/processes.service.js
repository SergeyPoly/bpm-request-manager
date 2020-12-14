import BaseHttpService from '../../../services/base-http.service';

export default class ProcessesIdService extends BaseHttpService {
    async getProcessesId() {
        const endpoint = 'engine-rest/engine/default/process-instance';
        const {username} = this.username;
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
        const response = await this.post(endpoint, body);
        return response;
    }

    async getProcessTask(id) {
        const endpoint = 'engine-rest/engine/default/task?processInstanceId';
        const response = await this.get(`${endpoint}=${id}`);
        return response;
    }

    async getProcessName(key) {
        const {tenantId} = this.loadTenantId();
        const endpoint = `engine-rest/engine/default/process-definition/key/${key}/tenant-id/${tenantId}/xml`;
        const response = await this.get(endpoint);
        return response;
    }
};


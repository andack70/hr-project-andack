import { InMemoryDbService } from 'angular-in-memory-web-api';

export class HrMockupService implements InMemoryDbService {
	createDb() {
		let employee = [
			{ id: 1, name: '', company: '', age: 0, birthday: '', favoriteColor: '', idProject: 1 },
			{ id: 1, name: '', company: '', age: 0, birthday: '', favoriteColor: '', idProject: 1 },
			{ id: 1, name: '', company: '', age: 0, birthday: '', favoriteColor: '', idProject: 1 },
			{ id: 1, name: '', company: '', age: 0, birthday: '', favoriteColor: '', idProject: 2 },
			{ id: 1, name: '', company: '', age: 0, birthday: '', favoriteColor: '', idProject: 2 }
		];
		let project = [
			{ id: 1, name: 'Akira comics', teamSize: 3, clientName: 'Andres Chalarca' },
			{ id: 2, name: 'Norma Comics', teamSize: 2, clientName: 'Adriana Correa' }
		];

		return { employee: employee, project: project };
	}
}

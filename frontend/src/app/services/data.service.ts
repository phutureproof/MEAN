import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class DataService {

	uri = 'http://localhost:3000';

	constructor(private http: HttpClient) {
	}

	get(collection: string, id?: string): Observable<any> {
		if (!id) {
			return this.http.get(`${this.uri}/${collection}`);
		}
		return this.http.get(`${this.uri}/${collection}/${id}`);
	}

	getWithOptions(collection: string, options: object): Observable<any> {
		return this.http.post(`${this.uri}/${collection}`, options);
	}

	update(collection: string, id: string, data: object) {
		return this.http.post(`${this.uri}/${collection}/${id}/update`, data);
	}

	delete(collection: string, id: string) {
		return this.http.get(`${this.uri}/${collection}/${id}/delete`);
	}
}

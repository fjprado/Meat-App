import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Restaurant } from './restaurant/restaurant.model'
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model'

import { MEAT_API } from '../app.api'

@Injectable()
export class RestaurantsService {


    constructor(private http: HttpClient) { }

    restaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams = undefined
        if (search) {
            params = new HttpParams().append('q', search)
        }
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: params })
    }
    //retorna uma lista de itens Observable de Restaurant, capturadas do Json-Server e mapeados em Json.

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }
    //retorna um item Observable de Restaurant através de seu ID, capturado do Json-Server e mapeado em Json.

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }
    /*retorna uma lista de itens Observable do tipo Any(qualquer) 
    porém através do ID do Restaurant, capturadas do Json-Server e mapeados em Json*/

    menuOfRestaurants(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }
}
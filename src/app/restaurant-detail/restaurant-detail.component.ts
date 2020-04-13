import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RestaurantsService } from '../restaurants/restaurants.service'
import { Restaurant } from '../restaurants/restaurant/restaurant.model'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
    //this.route.snapshot.params['id']) 
    //--> captura a imagem do item que foi selecionado e registra-o apenas pela sua chave Id
      .subscribe(restaurant => this.restaurant = restaurant)
    //realiza o subscribe do método, monitora as mudanças e captura o resultado e adiciona ao atributo do component
  }
}

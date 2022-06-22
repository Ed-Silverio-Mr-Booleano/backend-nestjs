import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    products  = [
        {
            id: 1,
            name: 'A SPA app'
        },
        {
            id: 2,
            name: 'A Nest API'
        }
    ]
    getProducts(){
        return this.products;
    }
    
    createProduct(product) {
        return this.products = [...this.products, product];
    }

    updateProduct(product) {
        this.products = this.products.map(p =>{
            if(p.id == product.id ) {
                return { ...product };
            }
            return p;
        })
    }

    deleteProduct(product) {
        this.products = this.products.filter(p => p.id != product.id)
    }
}

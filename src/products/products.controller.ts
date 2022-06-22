import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { stringify } from 'querystring';
import { ProductsService } from './products.service';

interface ProductDTO {
    id: string,
    name: string
}

@Controller('products')
export class ProductsController {
    constructor (private productsService: ProductsService) {}

    @Get()
    getProducts() {
        return this.productsService.getProducts();
    }

    @Get(':id')                                                      
    getProduct(@Param() params) {                                                    
        console.log('Get a single product id: ', params.id);
        return this.productsService.getProducts().filter(p => p.id == params.id);
    }

    @Post()
    createProduct(@Body() product: ProductDTO) {
        console.log('Create new product', product);
        return this.productsService.createProduct(product);
    }

    @Put()
    updateProduct(@Body() product: ProductDTO) {8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        console.log('update product', product);
        return this.productsService.updateProduct(product);
    }

    @Delete()
    deleteProduct(@Body() product: ProductDTO) {
        console.log('delete product', product);
        return this.productsService.deleteProduct(product);
    }
}

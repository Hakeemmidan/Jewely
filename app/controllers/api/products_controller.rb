class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
    end

    def show
        @product = Product.find(params[:id])
    end

    def create
        @product = Product.new(product_params)
        if @product.save
            render json: {message: "Product has been listed"}
        else
            render json: @product.errors.full_messages
        end
    end

    def update
        
    end

    # index : show all products
    # show : show details for a specific product
    # create : create a specific product using params
    # update : update a specific product, so this is going to be a form
    # destroy : delete a specific product



    private

    def product_params
        params.require(:product).permit(:title, :description, :price, :photo)
    end
end
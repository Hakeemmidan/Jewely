class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
        render :index
    end

    def create
        @product = Product.new(product_params)
        if @product.save
            render json: {message: "Product has been listed"}
        else
            render json: @product.errors.full_messages
        end
    end



    private

    def product_params
        params.require(:product).permit(:title, :description, :price, :photo)
    end
end
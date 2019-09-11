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
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def update
        @product = Product.find(params[:id])
        #@product = current_user.products.find(params[:id])

        if @product.update(product_params)
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def destroy
        @product = Product.find(params[:id])
        #@product = current_user.products.find(params[:id])

        if @product.destroy
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    # Note : All these actions will render either 'show' or 'index' views.
        # Which will in turn render the partial (which is used to extract data
        # using jBuilder)

    private

    def product_params
        params.require(:product).permit(:title, :description, :price, :photo)
    end
end
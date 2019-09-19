class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
    end

    def show
        @product = Product.with_attached_photos.find(params[:id])
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
        @product = current_user.products.find(params[:id])

        if @product.update(product_params)
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def destroy
        @product = current_user.products.find(params[:id])

        if @product.destroy
            render :index
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    # Noted : All these actions will render either 'show' or 'index' views.
        # Which will in turn render the partial (which is used to extract data
        # using jBuilder)

    private

    def product_params
        params.require(:product).permit(
            :id,
            :title,
            :description,
            :price,
            :seller_id,
            photos: [])
        # noted : Don't forget to permit ids in permits 
    end
end
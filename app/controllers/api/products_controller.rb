# frozen_string_literal: true

module Api
  class ProductsController < ApplicationController
    before_action :fetch_current_user_products, only: %i[update destroy]

    def index
      if params[:search].present?
        @products = Product.all.where('lower(title) LIKE :search
                                           OR lower(description) LIKE :search', search: "%#{params[:search]}%")
      else
        @products = Product.all
      end
    end

    def show
      @product = Product.with_attached_photos.find(params[:id])
    end

    def create
      @product = Product.new(product_params)

      @product.seller_username = @product.seller.username if @product.seller_id

      if @product.save
        render :show
      else
        render json: @product.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      if params[:product][:photosToDeleteIds] != 'undefined'
        params[:product][:photosToDeleteIds].split(',').map do |id|
          @product.photos.destroy(id)
        end
      end

      if @product.update(product_params)
        render :show
      else
        render json: @product.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @product.photos.destroy_all

      if @product.destroy
        render :index
      else
        render json: @product.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def fetch_current_user_products
      @product = current_user.products.find(params[:id])
    end

    def product_params
      params.require(:product).permit(
        :id,
        :title,
        :description,
        :price,
        :seller_id,
        :seller_username,
        photos: []
      )
    end
  end
end

class PostsController < ApplicationController 
    def show
        @product = Product.find(params[:id])
        render :show
    end
end
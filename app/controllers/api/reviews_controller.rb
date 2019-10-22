class Api::ReviewsController < ApplicationController
    before_action :require_signed_in!

    def index
        if params[:product_id]
            @reviews = Product.find(params[:product_id]).reviews
        end
    end

    def create
        @review = Review.new(review_params)
        
        if (@review.author_id)
            @review.author_username = User.find(@review.author_id).username
        end

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show
        @review = Review.find(params[:id])
    end

    def update
        @review = current_user.reviews.find(params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = current_user.reviews.find(params[:id])

        if @review.destroy
            render :index
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(
            :id,
            :body,
            :rating,
            :author_id,
            :product_id,
            :author_username
        )
    end
end
class Api::ReviewsController < ApplicationController
    before_action :require_signed_in!

    def create
        @review = Review.new(review_params)
        
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
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
            :title,
            :body,
            :rating,
            :author_id,
            :product_id
        )
    end
end
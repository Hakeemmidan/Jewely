# frozen_string_literal: true

module Api
  class ReviewsController < ApplicationController
    def create
      @review = Review.new(review_params)

      @review.author_username = @review.author.username if @review.author_id

      if @review.save
        render :show
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
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
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @review = current_user.reviews.find(params[:id])

      if @review.destroy
        render :index
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
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
end

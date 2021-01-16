# frozen_string_literal: true

module Api
  class CategoriesController < ApplicationController
    def index
      @categories = Category.all

      if @categories.count
        render :index
      else
        render json: ['Something is not right. There are no categories in database.'], status: :not_found
      end
    end

    def show
      @category = Category.find(params[:id])
    end
  end
end

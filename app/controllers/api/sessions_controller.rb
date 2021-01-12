# frozen_string_literal: true

module Api
  class SessionsController < ApplicationController
    def create
      @user = User.find_by(username: params[:user][:username])
      return nil unless @user&.valid_password?(params[:user][:password])

      if @user
        sign_in(@user)
        render 'api/users/show'
      else
        render json: ['Invalid credentials'], status: :unprocessable_entity
      end
    end

    def destroy
      if current_user
        sign_out
        render json: {}
      else
        render json: ['Nobody singed in'], status: :not_found
      end
    end
  end
end

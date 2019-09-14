class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      Cart.new(id: @user.id, customer_id: @user.id)
      # Note : Notice that this is not getting saved as it will only get saved
              # when the user adds prducts to the cart
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end

end
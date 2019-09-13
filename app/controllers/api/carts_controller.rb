class Api::CartsController < ApplicationController    
    def create
        @cart_item = Cart.new(cart_params)

        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def show
        @cart_items = current_user.cart_items
    end

    def destroy
        @cart_item = current_user.cart_items.find(params[:id])

        if @cart_item.destroy
            render '/products/index'
            # question ) Not sure if you can do this or not
        else
            render json: @cart_item.errors.full_messages, status 422
        end
    end

    private
    def cart_params
        params.require(:cart).permit(:user_id, :seller_id)
    end
end
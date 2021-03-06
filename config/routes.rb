Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: { format: :json } do
    resources :users, only: [:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :reviews, only: [:create, :show, :update, :destroy]
    resources :products, except: [:edit, :new]
    resources :categories, only: [:index, :show]
  end
  root to: 'static_pages#root'
end
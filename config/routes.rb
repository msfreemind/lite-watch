Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :create, :show, :update, :destroy]
    resources :reactions, only: :create
    resources :comments, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
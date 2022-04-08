Rails.application.routes.draw do
  root 'sessions#home'

  resources :posts, only: [:index, :show, :create, :destroy]
  resources :users, only: [:show, :create]
  resources :destinations, only: [:index, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  get "/login", to: "sessions#login"
  post "/login", to: "sessions#create"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

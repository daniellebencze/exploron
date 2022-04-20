Rails.application.routes.draw do
  root 'sessions#home'

  resources :journals, only: [:index, :update]
  resources :posts, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :update]
  resources :destinations, only: [:index, :show]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  patch "/me", to: "users#update"
  get "/current_user_post", to: "posts#current_user_post"
  get "/current_user_journal", to: "journals#current_user_journal"

  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

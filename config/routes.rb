Rails.application.routes.draw do
  
  # resources :sessions
  # resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :benches, only: [:index, :create]
    resources :users
    resource :sessions
  end

end


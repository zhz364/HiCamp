Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resource :session, only: %i[destroy create]
    resources :spots, only: [:show, :index]
    resources :campsites, only: [:show, :index]

    resources :users, only: [:index, :create] do
        resources :bookings, only: [:index]
    end

    resources :spots, only: [:index, :show] do 
      resources :reviews, only: [:index]
    end 

    resources :reviews, only: [:create, :update, :destroy]

    resources :bookings, only: [:create, :destroy]
  end

end

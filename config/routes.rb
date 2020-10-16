Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resource :session, only: %i[destroy create]
    resources :spots, only: [:show, :index]
    resources :campsets, only: [:show, :index]
    resources :users
  end

end

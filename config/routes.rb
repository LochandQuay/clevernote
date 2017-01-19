Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    resources :users
    resources :notes do
      resources :tags, only: [:index]
    end
    resources :notebooks do
      resources :notes, only: [:index]
    end
    resources :tags do
      resources :notes, only: [:index]
    end
  end

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do

  namespace :api do
    get 'notes/new'
  end

  namespace :api do
    get 'notes/create'
  end

  namespace :api do
    get 'notes/edit'
  end

  namespace :api do
    get 'notes/update'
  end

  namespace :api do
    get 'notes/destroy'
  end

  namespace :api do
    get 'notes/show'
  end

  namespace :api do
    get 'notes/index'
  end

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    resources :users
  end

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

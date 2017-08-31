Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    resources :users
    resources :notes
    resources :notebooks do
      resources :notes, only: [:index]
    end
    resources :tags
  end

  # CUSTOM ROUTES
  # get 'api/notes/:id/tags', to: 'api/notes#tags'
  delete 'api/tagging/:id', to: 'api/tags#destroyTagging'

  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

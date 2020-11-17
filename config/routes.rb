Rails.application.routes.draw do
  # namespace :api, defaults: {format: :json} do
  #   # resources :reviews, only: [:create]
  #   # resource :user, only: [:create]
  #   # resource :session, only: [:create, :destroy, :show]
  # end

  root to: "static_pages#root"
end

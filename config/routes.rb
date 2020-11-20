Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
  #   # resources :reviews, only: [:create]
    resource :user, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resource :task, only: [:create, :show, :update]

    # resource :mission, only: [:create, :destroy, :show, :update]
    # resource :category, only: [:create, :destroy, :show, :update]
    # resource :review, only: [:create, :destroy, :show, :update]
  end

  root to: "static_pages#root"
end

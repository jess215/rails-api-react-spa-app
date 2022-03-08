Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
namespace :api do
  get 'locations', to:'locations#index'
  get 'locations/:id', to:'locations#show'
  post 'locations', to:'locations#create'
  put 'locations/:id', to:'locations#update'
  delete 'locations/:id', to:'locations#destroy'
end
end

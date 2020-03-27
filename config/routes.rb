Rails.application.routes.draw do
  devise_for :users
  get 'articles/index'
  get 'articles/show'
  get 'articles/new'
  get 'articles/create'
  get 'articles/update'
  get 'articles/edit'
  get 'articles/delete'
  root 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

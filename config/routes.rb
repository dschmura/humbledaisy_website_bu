Rails.application.routes.draw do
  root to: 'pages#index'
  get 'pages/index'

  get 'pages/about'

  get 'pages/contact'

  get 'pages/privacy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

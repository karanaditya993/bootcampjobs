Rails.application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }
  root 'welcome#index'
  resources :users do
    resources :skills
  end
  resources :jobs
  get "user-home" => "jobs#index"
end
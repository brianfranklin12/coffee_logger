Rails.application.routes.draw do
  resources :coffees do
    resources :logs
  end
end

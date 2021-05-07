class CoffeesController < ApplicationController
  def index
    coffees = Coffee.all
    render json: coffees
  end

  def create
    coffee = Coffee.new(coffee_params)
    if coffee.save
      render json: coffee
    else
      render json: { error: "Coffee not successfully created" }
    end
  end

  def show
    coffee = Coffee.find_by_id(params[:id])
    render json: coffee
  end

  def destroy
    coffee = Coffee.find_by_id(params[:id])
    coffee.destroy
  end

  private

  def coffee_params
    params.require(:coffee).permit(:name, :roaster, :variety, :process)
  end
  
end

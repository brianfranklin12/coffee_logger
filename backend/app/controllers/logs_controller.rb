class LogsController < ApplicationController
  def index
    logs = Coffee.find(params[:coffee_id]).logs
    render json: logs
  end

  def create
    log = Log.new(log_params)
    coffee = Coffee.find(params[:coffee_id])
    log.coffee = coffee
    if log.save
      render json: log
    else
      render json: { error: "Log not successfully created" }
    end
  end

  def show
    log = Log.find_by(id: params[:id])
    render json: log
  end

  def destroy
    log = Log.find_by(id: params[:id])
    log.delete
  end

  private
  
  def log_params
    params.require(:log).permit(:dose, :output, :grind_size, :brew_time, :brew_method, :rating, :notes)
  end

end

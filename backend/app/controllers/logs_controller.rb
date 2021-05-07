class LogsController < ApplicationController
  def index
    logs = Coffee.find(params[:coffee_id]).logs
    render json: logs, include: [:coffee]
  end

  def create
    log = Log.new(log_params)
    if log.save
      render json: log, inlcude: [:coffee]
    else
      render json: { error: "Log not successfully created" }
    end
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

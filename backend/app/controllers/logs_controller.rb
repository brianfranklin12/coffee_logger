class LogsController < ApplicationController
  def index
    logs = Log.all
    render json: logs, include: [:coffee]
  end
end

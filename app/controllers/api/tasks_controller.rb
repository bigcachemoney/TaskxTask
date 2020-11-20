class Api::TasksController < ApplicationController

  def create
    @task = Task.new(task_params)
    if @task.save 
      render :show
    else
      render json: @board.errors.full_messages, status: 400
    end
  end

  def show
    @task = Task.find_by(params[:id])
    render "api/tasks/show"
  end

  def update
    @task = Task.find_by(params[:id])
    if @task && task.update(task_params)
      render "api/tasks/show"
    else
      render json: @board.errors.full_messages, status: 400
    end
  end


protected
  def task_params
    params.require(:task).permit(:id, :client_id, :description)
  end

end

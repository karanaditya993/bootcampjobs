class JobsController < ApplicationController
  def index
    if params[:search]
      @jobs = Job.search(params[:search]).order('created_at DESC')
    end
  end

  def show
    @job = Job.find(params[:id])
  end
end

class JobsController < ApplicationController
  def index
    if !user_signed_in?
      @jobs = Job.all
    elsif params[:search]
      @jobs = Job.search(params[:search]).order('created_at DESC')
    else
    end
  end

  def show
    @job = Job.find(params[:id])
  end
end

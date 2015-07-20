class JobsController < ApplicationController
  def index
    if !user_signed_in?
      @jobs = Job.all
    else
      if params[:search]
        @jobs = Job.search(params[:search]).order('created_at DESC')
      end
    end
  end

  def show
    @job = Job.find(params[:id])
  end
end

class WelcomeController < ApplicationController

  def index
    if !user_signed_in?
      redirect_to new_user_session_path
    else
      @jobs = Job.all
      @user = User.find(current_user.id)
    end
  end

end
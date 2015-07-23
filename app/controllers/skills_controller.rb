class SkillsController < ApplicationController
  def index
    @skills = current_user.skills
  end

  def new
    @skill = Skill.new
    @skills = Skill.all
    @user_skill = UserSkill.new
  end

  def create
    @skill = Skill.create(skill_params)
    @user_skill = UserSkill.new(user_id: current_user.id, skill_id: @skill.id)
    if request.xhr?
      p "*" * 100
      @skill.save && @user_skill.save
      (render partial: 'show', layout: false, locals: {skill: @skill}).to_json
      # redirect_to user_skill_path(@skill, @user_skill)
    else
      render 'new'
    end
  end

  def show
    @skills = current_user.skills
  end

  def destroy
    @skill = Skill.find(params[:id])
    @skill.destroy
  end

  private
  def skill_params
    params.require(:skill).permit(:title)
  end

end

#@skills = Skill.all
#is an array of skills
class SkillsController < ApplicationController
  def index
    @skills = Skill.all
  end

  def new
    @skill = Skill.new
    @skills = Skill.all
    @user_skill = UserSkill.new
  end

  def create
    @skill = Skill.create(skill_params)
    @user_skill = UserSkill.new(user_id: current_user.id, skill_id: @skill.id)
    if @user_skill.save
      redirect_to user_skill_path(@skill, @user_skill)
    else
      render 'new'
    end
  end

  def show
    @skills = current_user.skills
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def skill_params
    params.require(:skill).permit(:id, :title)
  end

end

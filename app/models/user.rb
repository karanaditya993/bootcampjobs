class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
     :omniauthable, :omniauth_providers => [:github]

  has_many :user_skills
  has_many :skills, through: :user_skills

  def self.from_omniauth(auth)
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.provider = auth.provider
        user.uid = auth.uid
        user.email = auth.info.email
        user.password = Devise.friendly_token[0,20]
        user.name = auth[:info][:name]
        user.gravatar = auth[:info][:image]
      end
  end
end

##<OmniAuth::AuthHash credentials=#<OmniAuth::AuthHash expires=false token="8b5c8a680ea2705c784948788504277223d84caa"> extra=#<OmniAuth::AuthHash raw_info=#<OmniAuth::AuthHash avatar_url="https://avatars.githubusercontent.com/u/282850?v=3" bio=nil blog="" company="" created_at="2010-05-20T22:41:38Z" email="michaelmfarr@gmail.com" events_url="https://api.github.com/users/iMikie/events{/privacy}" followers=3 followers_url="https://api.github.com/users/iMikie/followers" following=1 following_url="https://api.github.com/users/iMikie/following{/other_user}" gists_url="https://api.github.com/users/iMikie/gists{/gist_id}" gravatar_id="" hireable=false html_url="https://github.com/iMikie" id=282850 location="Tiburon, CA" login="iMikie" name="Michael Farr" organizations_url="https://api.github.com/users/iMikie/orgs" public_gists=2 public_repos=19 received_events_url="https://api.github.com/users/iMikie/received_events" repos_url="https://api.github.com/users/iMikie/repos" site_admin=false starred_url="https://api.github.com/users/iMikie/starred{/owner}{/repo}" subscriptions_url="https://api.github.com/users/iMikie/subscriptions" type="User" updated_at="2015-07-18T18:19:52Z" url="https://api.github.com/users/iMikie">> info=#<OmniAuth::AuthHash::InfoHash email="michaelmfarr@gmail.com" image="https://avatars.githubusercontent.com/u/282850?v=3" name="Michael Farr" nickname="iMikie" urls=#<OmniAuth::AuthHash Blog="" GitHub="https://github.com/iMikie">> provider="github" uid="282850">
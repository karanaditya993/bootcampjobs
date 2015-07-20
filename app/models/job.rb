class Job < ActiveRecord::Base
  def self.search(search)
    search.downcase
    where('title LIKE ?', "%#{search}%")
  end
end

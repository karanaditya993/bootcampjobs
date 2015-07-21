class Job < ActiveRecord::Base
  def self.search(search)
    search = search.split.map { |i| i.capitalize }.join(' ')
    where('title LIKE ?', "%#{search}%")
  end
end

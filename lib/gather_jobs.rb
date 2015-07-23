require 'nokogiri'
require 'open-uri'
require_relative 'scrape_github.rb'
require_relative 'scrape_glassdoor.rb'
require_relative 'scrape_indeed.rb'
require_relative 'scrape_stackoverflow.rb'

class JobsImporter
	def self.sync_jobs
		queries = ["Rails+Developer", "front+end+Developer", "ruby+developer", "junior+web+Developer", "javascript+Developer"]
		locations = ["San+Francisco"]

		locations.each do |location|
		  queries.each do |query|
		    scrape_indeed(query, location)
		    scrape_github(query, location)
		    scrape_glassdoor(query, location)
		  end
		end
		scrape_stackoverflow
		return Job.count
	end
end
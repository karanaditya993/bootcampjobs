require 'nokogiri'
require 'open-uri'
require_relative 'scrape_github.rb'
require_relative 'scrape_glassdoor.rb'
require_relative 'scrape_indeed.rb'


# Skill.create(title: "Ruby")
# Skill.create(title: "Rails")
# Skill.create(title: "Javascript")
# Skill.create(title: "HTML")
# Skill.create(title: "CSS")
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

# require 'nokogiri'
# require 'open-uri'


#************************************************************************************************************
# SCRAPE JOB LISTINGS.
# for each: location, job search string, and website
#************************************************************************************************************


def scrape_job_listings
  queries = ["Rails+Developer", "front+end+Developer", "ruby+developer", "junior+web+Developer", "javascript+Developer"]
  locations = ["San+Francisco"]

  locations.each do |location|
    queries.each do |query|
      scrape_indeed(query, location)
      scrape_github(query, location)
     # scrape_glassdoor(query, location)
    end
  end
end

scrape_job_listings

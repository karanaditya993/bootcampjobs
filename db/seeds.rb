# Skill.create(title: "Ruby")
# Skill.create(title: "Rails")
# Skill.create(title: "Javascript")
# Skill.create(title: "HTML")
# Skill.create(title: "CSS")
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

# Examples:

#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'nokogiri'
require 'open-uri'

#GITHUB JOBS
#--------------------------------------------------------------------------------
base_posting_url = "https://jobs.github.com"
query_urls = [
  "https://jobs.github.com/positions?description=rails+developer&location=san+francisco",
  "https://jobs.github.com/positions?description=front+end+developer&location=san+francisco",
  "https://jobs.github.com/positions?description=ruby+developer&location=san+francisco",
  "https://jobs.github.com/positions?description=junior+developer&location=san+francisco",
  "https://jobs.github.com/positions?description=full+stack+developer&location=san+francisco",
  "https://jobs.github.com/positions?description=backend+developer&location=san+francisco",
  "https://jobs.github.com/positions?description=javascript+developer&location=san+francisco"
]
posting_urls = []

# this is getting us the url's for each of the individual posting pages
query_urls.each do |query|
  doc = Nokogiri::HTML(open(query))
  doc.css("h4 a").each do |job|
      posting_urls << job['href']
  end
  #
  x = 0
  posting_urls.each do |url_extension|
    job_page = Nokogiri::HTML(open(base_posting_url + url_extension))

      # getting the title
    title = job_page.css(".inner h1").text

    # getting the location
    location = job_page.css(".supertitle").text

    # # getting the job description
    description = job_page.css(".column.main").text
    link_to_original = job_page.css(".module.highlighted .inner p").text

    begin
      company_name = doc.css(".company")[x].text
      posted_date = doc.css(".when.relatize")[x].text
    rescue
      next
    end
    x += 1

    if Job.where(:title => title,
                  :description => description).empty?

      Job.create(:title => title,
                  :location => location,
                  :description => description,
                  :company_name => company_name,
                  :link_to_original => link_to_original,
                  :posted_date => posted_date)
    end
  end
end

# # STACKOVERFLOW SEED
# #--------------------------------------------------------------------------------
# base_posting_url = "http://careers.stackoverflow.com"
# query_urls = [
#   "http://careers.stackoverflow.com/jobs?searchTerm=rails+developer&location=san+francisco+&range=20&distanceUnits=Miles",
#   "http://careers.stackoverflow.com/jobs?searchTerm=ruby+developer&location=san+francisco+&range=20&distanceUnits=Miles",
#   "http://careers.stackoverflow.com/jobs?searchTerm=front+end+developer&location=san+francisco+&range=20&distanceUnits=Miles",
#   "http://careers.stackoverflow.com/jobs?searchTerm=junior+developer&location=san+francisco+&range=20&distanceUnits=Miles",
#   "http://careers.stackoverflow.com/jobs?searchTerm=full+stack+developer&location=san+francisco+&range=20&distanceUnits=Miles",
#   "http://careers.stackoverflow.com/jobs?searchTerm=backend+developer&location=san+francisco+&range=20&distanceUnits=Miles",
#   "http://careers.stackoverflow.com/jobs?searchTerm=javascript+developer&location=san+francisco+&range=20&distanceUnits=Miles"
# ]

# posting_urls = []

# query_urls.each do |query|
#   doc = Nokogiri::HTML(open(query))
#   doc.css("h3.-title").each do |job|
#     job.css("a").each do |link|
#       posting_urls << link['href']
#     end
#   end
#   sleep(5)
#   posting_urls.each do |url_extension|
#     job_page = Nokogiri::HTML(open(base_posting_url + url_extension))

#     #   # getting the title
#     title = job_page.css(".title").text
#     # #
#     #   # getting the location
#     location = job_page.css(".location").text
#     #   # getting the description

#     description = job_page.css(".description").text

#       # getting the url
#     link_to_original = base_posting_url + url_extension

#       # getting company name
#     company_name = job_page.css(".employer").text

#     if Job.where(:title => title,
#                   :description => description).empty?

#       Job.create(:title => title,
#                   :location => location,
#                   :description => description,
#                   :company_name => company_name,
#                   :link_to_original => link_to_original)
#     end
#   end
# end


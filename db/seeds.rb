Skill.create(title: "Ruby")
Skill.create(title: "Rails")
Skill.create(title: "Javascript")
Skill.create(title: "HTML")
Skill.create(title: "CSS")
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# require 'nokogiri'
# require 'open-uri'

# #Rails Developer
# #--------------------------------------------------------------------------------
# base_posting_url = "https://jobs.github.com"
# query_urls = [
#   "https://jobs.github.com/positions?description=rails+developer&location=san+francisco",
#   "https://jobs.github.com/positions?description=front+end+developer&location=san+francisco",
#   "https://jobs.github.com/positions?description=ruby+developer&location=san+francisco",
#   "https://jobs.github.com/positions?description=junior+developer&location=san+francisco",
#   "https://jobs.github.com/positions?description=full+stack+developer&location=san+francisco",
#   "https://jobs.github.com/positions?description=backend+developer&location=san+francisco",
#   "https://jobs.github.com/positions?description=javascript+developer&location=san+francisco"
# ]
# posting_urls = []
# jobs = []
# job_posting = {}

# #puts doc.css("title").text

# # this is getting us the url's for each of the individual posting pages
# query_urls.each do |query|
#   doc = Nokogiri::HTML(open(query))
#   puts "URL: #{query}"
#   doc.css("h4 a").each do |job|
#       posting_urls << job['href']
#   end
#   #
#   x = 0
#   posting_urls.each do |url_extension|
#     job_page = Nokogiri::HTML(open(base_posting_url + url_extension))

#   # opening the individual page in the posting_url's array
#     # on each individual page, we are defining our job model with certain attributes
#     # getting the title
#     title = job_page.css(".inner h1").text

#     # getting the location
#     location = job_page.css(".supertitle").text

#     # # getting the job description
#     description = job_page.css(".column.main").text
#     link_to_original = job_page.css(".module.highlighted .inner p").text

#     begin
#       company_name = doc.css(".company")[x].text
#       posted_date = doc.css(".when.relatize")[x].text
#     rescue
#       next
#     end
#     x += 1
#     Job.create(:title => title,
#             :location => location,
#             :description => description,
#             :company_name => company_name,
#             :link_to_original => link_to_original,
#             :posted_date => posted_date)
#   end
# end

#  create_table "jobs", force: :cascade do |t|
    # t.string   "title"
    # t.string   "location"
    # t.text     "description"
    # t.string   "link_to_original"
    # t.string   "posted_date"
    # t.datetime "created_at",       null: false
    # t.datetime "updated_at",       null: false
    # t.string   "company_name"
  # end

# puts jobs.length
# puts '*' * 100

# require 'nokogiri'
# require 'open-uri'

# base_posting_url = "https://jobs.github.com"
# url = "https://jobs.github.com/positions?description=rails+developer&location=san+francisco"
# posting_urls = []

# #puts doc.css("title").text

# # this is getting us the url's for each of the individual posting pages
# doc = Nokogiri::HTML(open(url))
# doc.css("h4").each do |job|
#   job.css("a").each { |link| posting_urls << link['href'] }
# end

# # this is opening the urls's of the posting pages
# x = 0
# posting_urls.each do |i|
#   # opening the individual page in the posting_url's array
#   job_page = Nokogiri::HTML(open(base_posting_url + i))
#   # on each individual page, we are defining our job model with certain attributes
#   # getting the title
#   title = job_page.css(".inner h1").text

#   # getting the location
#   location = job_page.css(".supertitle").text

#   # getting the job description
#   job_description = job_page.css(".column.main").text

#   # getting the company name
#   company_name = doc.css(".company")[x].text

#   link_to_original = job_page.css(".module.highlighted .inner p").text

#   posted_date = doc.css(".when.relatize")[x].text

#   ### skipping the responsibilities/requirements, because github gives them back in the job_description variable. I will need to find a way to parse that
#   Job.create(:title => title,
#             :location => location,
#             :description => job_description,
#             :company_name => company_name,
#             :link_to_original => link_to_original,
#             :posted_date => posted_date)
#   x += 1
# end


# =begin
# #### Title and Location of Job ###
# body -> .non-footer -> #wrap -> #page -> .inner -> p { location } h1 { title }
# ### Job Description, Responsibilities, Requirements ###
# body -> .non-footer -> #wrap -> #page -> inner -> .columns generic -> .column main
# ### Company Image Url ###
# body -> .non-footer -> #wrap -> #page -> inner -> .columns generic -> .column sidebar -> module logo -> .inner -> .logo -> a -> img src
# ### Company URL to Apply To ###
# body -> .non-footer -> #wrap -> #page -> inner -> .columns generic -> .column sidebar -> module logo -> .inner -> .url
# =end

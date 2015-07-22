require 'rubygems'
require 'nokogiri'
require 'open-uri'

page_url = "http://www.simplyhired.com/search?q=rails+developer&l=San+Francisco%2C+CA"

def scrape_simply_hired(query, location)
  base_url = "http://www.simplyhired.com"
  query_url = base_url +'/search?q='+ query + '&l=' + location + '%2C+CA'
  page = Nokogiri::HTML(open(query_url))
  posting_urls = []
  jobs = page.css("ul[id='jobs']")
puts jobs



 # doc = Nokogiri::HTML(open(query_url, :allow_redirections => :safe))
  loop do #until there's no more pages of job listings

  end
  doc.css("a").each do |link|
    posting_urls << link['href']
  end
  p posting_urls.length

  posting_urls.each do |i|

    page = Nokogiri::HTML(open(base_url + i, :allow_redirections => :safe))
    # results = page.css(".jobs")

    # number_jobs = results.length
    # number_jobs.times do |index|
    #   result = results[index]
    job[:title] = page.css('#smb_job_title').text
    job[:location] = page.css("span.location strong").text
    job[:posted_date] = page.css("div#smb_job_posted_date strong strong").text
    job[:description] = page.css("div#c_job_description pre").text
    job[:company_name] = page.css("div#smb_job_company").text
    job[:link_to_original] = base_url + page.css("a")[0]['href']

    jobs << job
  end
end
scrape_simply_hired("Rails+Developer", "San+Francisco")